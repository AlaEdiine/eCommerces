import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../ShopContext/Shopcontext";
import Rating from "@mui/material/Rating";

const RecentProducts = () => {
  const Values = useContext(ShopContext);
  const [value, setValue] = useState(1);

  return (
    <div>
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Recent Products</span>
      </h2>
      <div className="row px-xl-5">
        {Values.loading
          ? "Please Wait ..."
          : Values.DATA?.filter(
              (prod, index) =>
                index > 7 &&
                index < 16 &&
                prod.name
                  ?.toLocaleLowerCase()
                  .includes(Values.search.toLocaleLowerCase())
            ).map((item) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={item._id}>
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
                          onClick={() => Values.addTocart(item)}
                        >
                          <i className="fa fa-shopping-cart" />
                        </Link>
                        <Link
                          className="btn btn-outline-dark btn-square"
                          onClick={() => Values.Favorite(item)}
                        >
                          <i className="far fa-heart" />
                        </Link>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <Link className="h6 text-decoration-none text-truncate">
                        {item.name}
                      </Link>
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>{item.price}</h5>
                        <h6 className="text-muted ml-2">
                          <del>{item.oldprice}</del>
                        </h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-center mb-1">
                        <Rating
                          name="simple-controlled"
                          value={value}
                          onChange={(event, newValue) => {
                            setValue(newValue + " " + item._id);
                          }}
                        />
                        {/* <small>({item.race})</small> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default RecentProducts;
