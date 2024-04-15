import React, { useContext, useState } from "react";
import { SnackbarProvider } from "notistack";
import { Link, useLocation } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { ShopContext } from "../../ShopContext/Shopcontext";
import { CircularProgress } from "@mui/material";
import FilterByPrice from "../../component/Filter/FilterByPrice";
import FilterByColor from "../../component/Filter/FilterByColor";
import FilterByBrand from "../../component/Filter/FilterByBrand";
import API from "../../api/axios";

const Shop = () => {

  const location = useLocation().pathname.split("/")[2]
  console.log(location);
  const { addTocart, search, Favorite } = useContext(ShopContext);
  const [lowPrice, setLowPrice] = useState(null);
  const [note, setNote] = useState(1);

  const { min, max, color, brand, setColor, setBrand, DATA, loading } =  useContext(ShopContext);
  setBrand(location)

  // useEffect(()=> {
  //   window.scrollTo(0,0)
  // })
  const filterings = DATA.filter(
    (element, index) =>
      (index > 15) &
      (element.price > min) &
      (element.price < max) &
      (color === null ? setColor("") : element.color?.includes(color)) &
      (brand === null ? setBrand("") : element.brand?.includes(brand)) &
      element.name?.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  ).sort((a, b) => lowPrice === "low" && a.price - b.price);

  const [current, setCurrent] = useState(1);
  const [items, setItems] = useState(6);

  const endIndex = current * items;
  const startIndex = endIndex - items;

  const DataPerPage = filterings.slice(startIndex, endIndex);
  const NbPage = Math.ceil(filterings.length / items);
  const numbers = [...Array(NbPage + 1).keys()].slice(1);
  const handleChangePage = (id) => {
    setCurrent(id);
    window.scrollTo(0, 120);
  };

  const prev = () => {
    if (current !== 1) {
      setCurrent(current - 1);
      window.scrollTo(0, 120);
    }
  };
  const next = () => {
    if (current !== NbPage) {
      setCurrent(current + 1);
      window.scrollTo(0, 120);
    }
  };

  const Showing = (e) => {
    e.target.id === "6"
      ? setItems(6)
      : e.target.id === "9"
      ? setItems(9)
      : setItems(12);
  };

  const addRating = async (e, id) => {
    e.preventDefault();
    try {
      const { data } = await API.put(`/PRODUCT/UPDATE/${id}`, {
        note,
      });
      console.log(data);
      // navigate("/resetPassword/email");
    } catch (err) {
      console.log(err.message);
      console.log(err.response.status);
      // return Message(err.response.data.message, "error");
    } finally {
    }
  };
  return (
    <div>
      {loading ? (
        <CircularProgress sx={{width:"100%"}} />
      ) : (
        <>
          {/* Breadcrumb Start */}
          <SnackbarProvider autoHideDuration={2500} />
          <div className="container-fluid">
            <div className="row px-xl-5">
              <div className="col-12">
                <nav className="breadcrumb bg-light mb-30">
                  <Link className="breadcrumb-item text-dark">Home</Link>
                  <Link className="breadcrumb-item text-dark">Shop</Link>
                  <span className="breadcrumb-item active">Shop List</span>
                </nav>
              </div>
            </div>
          </div>
          {/* Breadcrumb End */}
          {/* Shop Start */}
          <div className="container-fluid">
            <div className="row px-xl-5">
              <div className="col-lg-3 col-md-4">
                <FilterByPrice />
                <FilterByColor />
                <FilterByBrand />
              </div>
              {/* Shop Product Start */}
              <div className="col-lg-9 col-md-8">
                <div className="row pb-3">
                  <div className="col-12 pb-1">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                      <div>
                        <button className="btn btn-sm btn-light">
                          <i className="fa fa-th-large" />
                        </button>
                        <button className="btn btn-sm btn-light ml-2">
                          <i className="fa fa-bars" />
                        </button>
                      </div>
                      <div className="ml-2">
                        <div className="btn-group">
                          <button
                            type="button"
                            className="btn btn-sm btn-light dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Sorting
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <button
                              type="button"
                              className="dropdown-item"
                              id="low"
                              onClick={(e) => setLowPrice(e.target.id)}
                            >
                              Low Price
                            </button>
                          </div>
                        </div>
                        <div className="btn-group ml-2">
                          <button
                            type="button"
                            className="btn btn-sm btn-light dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            Showing
                          </button>
                          <div className="dropdown-menu dropdown-menu-right">
                            <button
                              className="dropdown-item"
                              id="6"
                              onClick={(e) => Showing(e)}
                            >
                              6
                            </button>
                            <button
                              className="dropdown-item"
                              id="9"
                              onClick={(e) => Showing(e)}
                            >
                              9
                            </button>
                            <button
                              className="dropdown-item"
                              id="12"
                              onClick={(e) => Showing(e)}
                            >
                              12
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {DataPerPage?.map((item) => {
                    return (
                      <div
                        className="col-lg-4 col-md-6 col-sm-6 pb-1"
                        key={item._id}
                      >
                        <div className="product-item bg-light mb-4">
                          <div className="product-img position-relative overflow-hidden">
                            <img
                              className="img-fluid w-100"
                              src={item.photo}
                              alt="imges"
                            />
                            <div className="product-action">
                              <Link
                                className="btn btn-outline-dark btn-square"
                                onClick={() => addTocart(item)}
                              >
                                <i className="fa fa-shopping-cart" />
                              </Link>
                              <Link
                                onClick={() => Favorite(item)}
                                className="btn btn-outline-dark btn-square"
                              >
                                <i className="far fa-heart" />
                              </Link>
                              <Link
                                to="/detail"
                                state={item._id}
                                className="btn btn-outline-dark btn-square"
                              >
                                <i className="fa fa-eye" />
                              </Link>
                            </div>
                          </div>
                          <div className="text-center py-4">
                            <a
                              className="h6 text-decoration-none text-truncate"
                              href
                            >
                              {item.name}
                            </a>
                            <div className="d-flex align-items-center justify-content-center mt-2">
                              <h5>${item.price}</h5>
                              <h6 className="text-muted ml-2">
                                <del>${item.oldprice}</del>
                              </h6>
                            </div>
                            <div className="d-flex align-items-center justify-content-center mb-1">
                              <Rating
                                name="half-rating"
                                defaultValue={note}
                                precision={0.5}
                                onClick={(e) => addRating(item._id)}
                                onChange={(e) => setNote(e.target.defaultValue)}
                              />
                              <small> (99)</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  {filterings.length === 0 ? (
                    <p className="msg">
                      There is no Data for these options Filters
                    </p>
                  ) : (
                    <div className="col-12">
                      <nav>
                        <ul className="pagination justify-content-center">
                          <li className="page-item">
                            <Link className="page-link" onClick={prev}>
                              Previous
                            </Link>
                          </li>
                          {numbers.map((n, i) => (
                            <li
                              key={i}
                              className={`page-item ${
                                current === n ? "active" : ""
                              }`}
                            >
                              <Link
                                className="page-link"
                                key={i}
                                onClick={() => handleChangePage(n)}
                              >
                                {n}
                              </Link>
                            </li>
                          ))}
                          <li className="page-item">
                            <Link className="page-link" onClick={next}>
                              Next
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  )}
                </div>
              </div>
              {/* Shop Product End */}
            </div>
          </div>
          {/* Shop End */}
        </>
      )}
    </div>
  );
};

export default Shop;
