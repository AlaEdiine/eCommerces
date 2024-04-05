import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../css/style.css";
import { ShopContext } from "../../ShopContext/Shopcontext";
import Avatar from "@mui/joy/Avatar";
import Badge, { badgeClasses } from "@mui/joy/Badge";
import Dropdown from "@mui/joy/Dropdown";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import API from "../../api/axios";

const Menus = () => {
  const valueContext = useContext(ShopContext);
  const params = useLocation().pathname;
  const [colorBtn, setColorBtn] = useState(params);
  const logout = async() => {
    API.post('/logout/cookie').then((res)=> {
    console.log(res.data)
    window.location.href = "/"
    }
    )
  }

  return (
    <div>
      {/* Topbar Start */}
      <div className="container-fluid">
        <div className="row bg-secondary py-1 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-inline-flex align-items-center h-100">
              <b className="text-body mr-3">
                IPhone sales everything at -20%
              </b>
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              {!valueContext?.user ? (
                <div className="btn-group">
                  <Link to="/login"
                    className="btn btn-sm btn-dark"
                  >
                    Login
                  </Link>
                  <Link to="/register"
                    className="btn btn-sm btn-light"
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <div className="btn-group">
                  <Dropdown>
                    <MenuButton sx={{border: "none"}}> Welcome, {valueContext.user?.FirstName}</MenuButton>
                    <Menu>
                      <Link to="/profile">
                        {" "}
                        <MenuItem>Profile</MenuItem>{" "}
                      </Link>
                      <Link to="/setting">
                      <MenuItem>Change Password</MenuItem>
                      </Link>
                      <MenuItem onClick={logout}>Logout</MenuItem>
                    </Menu>
                  </Dropdown>
                  <Badge
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    badgeInset="14%"
                    color="success"
                    sx={{
                      [`& .${badgeClasses.badge}`]: {
                        "&::after": {
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          animation: "ripple 1.2s infinite ease-in-out",
                          border: "2px solid",
                          borderColor: "success.500",
                          content: '""',
                        },
                      },
                      "@keyframes ripple": {
                        "0%": {
                          transform: "scale(1)",
                          opacity: 1,
                        },
                        "100%": {
                          transform: "scale(2)",
                          opacity: 0,
                        },
                      },
                    }}
                  >
                    <Avatar alt="Remy Sharp" src={`http://localhost:3001/images/${valueContext.user?.Photo}`} size="lg" />
                  </Badge>
                </div>
              )}

            </div>
            <div className="d-inline-flex align-items-center d-block d-lg-none">
              <small className="btn px-0 ml-2">
                <i className="fas fa-heart text-dark" />
                <span
                  className="badge text-dark border border-dark rounded-circle"
                  style={{ paddingBottom: 2 }}
                >
                  0
                </span>
              </small>
              <small className="btn px-0 ml-2">
                <i className="fas fa-shopping-cart text-dark" />
                <span
                  className="badge text-dark border border-dark rounded-circle"
                  style={{ paddingBottom: 2 }}
                >
                  0
                </span>
              </small>
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <div className="col-lg-4">
            <span className="text-decoration-none">
              <span className="h1 text-uppercase text-primary bg-dark px-2">
                Multi
              </span>
              <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">
                Shop
              </span>
            </span>
          </div>
          <div className="col-lg-4 col-6 text-left">
            <form action>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for products"
                  onChange={(e) => valueContext.setsearch(e.target.value)}
                />
                <div className="input-group-append">
                  <span className="input-group-text bg-transparent text-primary">
                    <i className="fa fa-search" />
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-4 col-6 text-right">
            <span className="m-0">Customer Service</span>
            <h5 className="m-0">+216 99 149 926</h5>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a
              className="btn d-flex align-items-center justify-content-between bg-primary w-100"
              data-toggle="collapse"
              href="#navbar-vertical"
              style={{ height: 65, padding: "0 30px" }}
            >
              <h5 className="text-dark m-0">
                <i className="fa fa-bars mr-2" />
                Categories
              </h5>
              <i className="fa fa-angle-down text-dark" />
            </a>
            <nav
              className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
              id="navbar-vertical"
              style={{ width: "calc(100% - 30px)", zIndex: 999 }}
            >
              <div className="navbar-nav w-100">
                <Link to="/shop/Phone" className="nav-item nav-link">
                  Phone
                </Link>
                <Link to="/shop/Laptop" className="nav-item nav-link">
                  Laptop
                </Link>
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              <small className="text-decoration-none d-block d-lg-none">
                <span className="h1 text-uppercase text-dark bg-light px-2">
                  Multi
                </span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                  Shop  
                </span>
              </small>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <Link onClick={()=> setColorBtn("/")}
                    to="/"
                    className={
                      colorBtn === "/"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                  >
                    Home
                  </Link>
                  <Link onClick={()=> setColorBtn("/products")}
                    to="/products"
                    className={
                      colorBtn === "/products"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                  >
                    Shop
                  </Link>
                  {/* <Link to="/detail" className={colorBtn === "/detail" ? "nav-item nav-link active" : "nav-item nav-link"}>
                    Shop Detail
                  </Link>
                   <div className="nav-item dropdown">
                    <Link
                      className="nav-link dropdown-toggle active"
                      data-toggle="dropdown"
                    >
                      Pages <i className="fa fa-angle-down mt-1" />
                    </Link>
                    <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                      <Link to="/cart" className="dropdown-item">
                        Shopping Cart
                      </Link>
                      <Link to="/checkout" className="dropdown-item">
                        Checkout
                      </Link>
                    </div>
                  </div>  */}
                  <Link onClick={()=> setColorBtn("/cart")}
                    to="/cart"
                    className={
                      colorBtn === "/cart"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                  >
                    Shopping Cart
                  </Link>
                  <Link onClick={()=> setColorBtn("/contact")}
                    to="/contact"
                    className={
                      colorBtn === "/contact"
                        ? "nav-item nav-link active"
                        : "nav-item nav-link"
                    }
                  >
                    Contact
                  </Link>
                  {!!valueContext?.user && (
                    <Link  onClick={()=> setColorBtn("/order")}
                      to="/order"
                      className={
                        colorBtn === "/order"
                          ? "nav-item nav-link active"
                          : "nav-item nav-link"
                      }
                    >
                      <span className="orderList">Order-List
                      <small className="new">new</small>
                      </span>
                    </Link>
                  )}
                </div>
                <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                  <Link to="/favorite" className="btn px-0">
                    <i className="fas fa-heart text-primary" />
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: 2 }}
                    >
                    {valueContext.dataLocalStorage?.length > 0 ? valueContext.dataLocalStorage.length  : 0}
                    </span>
                  </Link>
                  <Link to="/cart"  className="btn px-0 ml-3">
                    <i className="fas fa-shopping-cart text-primary" />
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: 2 }}
                    >
                      {valueContext.cartitems?.length}  
                    </span>
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      {/* Navbar End */}
    </div>
  );
};

export default Menus;
