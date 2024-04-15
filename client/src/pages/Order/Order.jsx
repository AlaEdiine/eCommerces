import React, { useContext, useState } from "react";
import { ShopContext } from "../../ShopContext/Shopcontext";
import { SnackbarProvider } from "notistack";
import { Link } from "react-router-dom";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CircularProgress from "@mui/material/CircularProgress";
import useFetch from "../../Hooks/useFetch";

const Order = () => {
  const { total } = useContext(ShopContext);
  const [show, setShow] = useState(false);

  const ShowOrder = (val) => {
    setShow(!show);
  };

  const { dataOrder, load } = useFetch("/ORDER/GET_ALL");

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
              <span className="breadcrumb-item active">Shopping Cart</span>
            </nav>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}
      {/* Cart Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-lg-8 table-responsive mb-5">
            <table className="table table-light table-borderless table-hover text-center mb-0">
              <thead className="thead-dark">
                <tr>
                  <th>Order List</th>
                  <th>Status</th>
                  <th>N° Products</th>
                  <th>Total</th>
                  <th>Show Order</th>
                </tr>
              </thead>
              {load && <CircularProgress />}
              <tbody className="align-middle">
                {dataOrder.map((item, index) => (
                  <>
                    <tr key={item.id}>
                      <td className="align-middle">
                        {" "}
                        <span className="order">ORDER N°</span> #{index + 1}{" "}
                        <br /> <span className="date">{item.Date}</span>
                      </td>
                      <td className="align-middle">
                        {" "}
                        <span className="status">{item.Status} </span>{" "}
                      </td>
                      <td className="align-middle">
                        {item.listProduct?.length}
                      </td>
                      <td className="align-middle">$ {item.SumTT}</td>
                      <td
                        className="align-middle"
                        onClick={() => ShowOrder(item._id)}
                      >
                        <RemoveRedEyeIcon className="Color" />
                      </td>
                    </tr>
                    {show &&
                      item.listProduct?.map((elem) => (
                        <tr key={elem._id}>
                          <td className="align-middle">
                            <img
                              src={elem.photo}
                              alt=""
                              style={{ width: 50 }}
                            />{" "}
                            {elem.name}
                          </td>
                          <td className="align-middle">${elem.price}</td>
                          <td className="align-middle">
                            <div
                              className="input-group quantity mx-auto"
                              style={{ width: 100 }}
                            >
                              <div className="input-group-btn">
                                <button className="btn btn-sm btn-primary btn-minus">
                                  <i className="fa fa-minus" />
                                </button>
                              </div>
                              <input
                                type="text"
                                className="form-control form-control-sm bg-secondary border-0 text-center"
                                value={elem.Qte}
                              />
                              <div className="input-group-btn">
                                <button className="btn btn-sm btn-primary btn-plus">
                                  <i className="fa fa-plus" />
                                </button>
                              </div>
                            </div>
                          </td>
                          <td className="align-middle">${elem.total}</td>
                          <td className="align-middle">
                            <button className="btn btn-sm btn-danger">
                              <i className="fa fa-times" />
                            </button>
                          </td>
                        </tr>
                      ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <form className="mb-30" action>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control border-0 p-4"
                  placeholder="Coupon Code"
                  disabled
                />
                <div className="input-group-append">
                  <button className="btn btn-primary" disabled>
                    Apply Coupon
                  </button>
                </div>
              </div>
            </form>
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Cart Summary</span>
            </h5>
            <div className="bg-light p-30 mb-5">
              <div className="border-bottom pb-2">
                <div className="d-flex justify-content-between mb-3">
                  <h6>Subtotal</h6>
                  <h6>${total}</h6>
                </div>
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-medium">Shipping</h6>
                  <h6 className="font-weight-medium">$0</h6>
                </div>
              </div>
              <div className="pt-2">
                <div className="d-flex justify-content-between mt-2">
                  <h5>Total</h5>
                  <h5>$0</h5>
                </div>
                <button
                  className="btn btn-block btn-primary font-weight-bold my-3 py-3"
                  disabled
                >
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Cart End */}
    </div>
  );
};

export default Order;
