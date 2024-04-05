import React, { useContext } from "react";
import { useLocation } from "react-router";
import { ShopContext } from "../../ShopContext/Shopcontext";
import { SnackbarProvider } from "notistack";
import { Link } from "react-router-dom";

const ShopDetails = () => {
  const { addTocart , DATA } = useContext(ShopContext);
  const { category } = useLocation().state;
  const dataFilter = DATA.filter((pro) => pro.category === category);

  return (
    <div>
      <SnackbarProvider autoHideDuration={2500} />
      {/* Breadcrumb Start */}
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
          {/* Shop Sidebar Start */}
          <div className="col-lg-3 col-md-4">
            {/* Price Start */}
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Filter by price</span>
            </h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked
                    id="price-all"
                  />
                  <label className="custom-control-label" htmlFor="price-all">
                    All Price
                  </label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-1"
                  />
                  <label className="custom-control-label" htmlFor="price-1">
                    $0 - $100
                  </label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-2"
                  />
                  <label className="custom-control-label" htmlFor="price-2">
                    $100 - $200
                  </label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-3"
                  />
                  <label className="custom-control-label" htmlFor="price-3">
                    $200 - $300
                  </label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-4"
                  />
                  <label className="custom-control-label" htmlFor="price-4">
                    $300 - $400
                  </label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="price-5"
                  />
                  <label className="custom-control-label" htmlFor="price-5">
                    $400 - $500
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div>
            {/* Price End */}
            {/* Color Start */}
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Filter by color</span>
            </h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked
                    id="color-all"
                  />
                  <label className="custom-control-label" htmlFor="price-all">
                    All Color
                  </label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-1"
                  />
                  <label className="custom-control-label" htmlFor="color-1">
                    Black
                  </label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-2"
                  />
                  <label className="custom-control-label" htmlFor="color-2">
                    White
                  </label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-3"
                  />
                  <label className="custom-control-label" htmlFor="color-3">
                    Red
                  </label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-4"
                  />
                  <label className="custom-control-label" htmlFor="color-4">
                    Blue
                  </label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="color-5"
                  />
                  <label className="custom-control-label" htmlFor="color-5">
                    Green
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div>
            {/* Color End */}
            {/* Size Start */}
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Filter by size</span>
            </h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked
                    id="size-all"
                  />
                  <label className="custom-control-label" htmlFor="size-all">
                    All Size
                  </label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-1"
                  />
                  <label className="custom-control-label" htmlFor="size-1">
                    XS
                  </label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-2"
                  />
                  <label className="custom-control-label" htmlFor="size-2">
                    S
                  </label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-3"
                  />
                  <label className="custom-control-label" htmlFor="size-3">
                    M
                  </label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-4"
                  />
                  <label className="custom-control-label" htmlFor="size-4">
                    L
                  </label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="size-5"
                  />
                  <label className="custom-control-label" htmlFor="size-5">
                    XL
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div>
            {/* Size End */}
          </div>
          {/* Shop Sidebar End */}
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
                        <Link className="dropdown-item">Latest</Link>
                        <Link className="dropdown-item">Popularity</Link>
                        <Link className="dropdown-item">Best Rating</Link>
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
                        <Link className="dropdown-item">10</Link>
                        <Link className="dropdown-item">20</Link>
                        <Link className="dropdown-item">30</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {dataFilter?.map((elem) => (
                <div className="col-lg-4 col-md-6 col-sm-6 pb-1" key={elem.id}>
                  <div className="product-item bg-light mb-4">
                    <div className="product-img position-relative overflow-hidden">
                      <img
                        className="img-fluid w-100"
                        src={elem.photo}
                        alt="imges"
                      />
                      <div className="product-action">
                        <Link
                          className="btn btn-outline-dark btn-square"
                          onClick={() => addTocart(elem)}
                        >
                          <i className="fa fa-shopping-cart" />
                        </Link>
                        <Link className="btn btn-outline-dark btn-square">
                          <i className="far fa-heart" />
                        </Link>
                        <Link className="btn btn-outline-dark btn-square">
                          <i className="fa fa-sync-alt" />
                        </Link>
                        <Link className="btn btn-outline-dark btn-square">
                          <i className="fa fa-search" />
                        </Link>
                      </div>
                    </div>
                    <div className="text-center py-4">
                      <a className="h6 text-decoration-none text-truncate" href>
                        {elem.name}
                      </a>
                      <div className="d-flex align-items-center justify-content-center mt-2">
                        <h5>${elem.price}</h5>
                        <h6 className="text-muted ml-2">
                          <del>${elem.oldprice}</del>
                        </h6>
                      </div>
                      <div className="d-flex align-items-center justify-content-center mb-1">
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small className="fa fa-star text-primary mr-1" />
                        <small>(99)</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
          {/* Shop Product End */}
        </div>
      </div>
      {/* Shop End */}

    </div>
  );
};

export default ShopDetails;
