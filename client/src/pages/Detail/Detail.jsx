import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { ShopContext } from "../../ShopContext/Shopcontext";
import { Avatar, Box, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import API from "../../api/axios";
import useFetch from "../../Hooks/useFetch";
import Message from "../../component/Snackbar/Message";

const Detail = (props) => {
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };
  const location = useLocation();
  const { DATA, setDATA, load } = useFetch(`/PRODUCT/GET/${location.state}`);
  const { addTocart, user } = useContext(ShopContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.put(`/PRODUCT/UPDATE/${location.state}`, {
        comment,
        value,
      });
      Message("Comment added with succes ", "success");
      setValue(2);
      setComment("");
      setDATA(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  const [value, setValue] = React.useState(2);
  const [comment, setComment] = useState("");
  const [hover, setHover] = React.useState(-1);

  // Récupére Id Product to page -- ListProduct.jsx
  return (
    <div>
      <SnackbarProvider autoHideDuration={3500} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} maxSnack={3} />
      {/* Navbar End */}
      {/* Breadcrumb Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <Link className="breadcrumb-item text-dark">Home</Link>
              <Link className="breadcrumb-item text-dark">Shop</Link>
              <span className="breadcrumb-item active">Shop Detail</span>
            </nav>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}
      {/* Shop Detail Start */}
      <div className="container-fluid pb-5">
        <div className="row px-xl-5">
          <div className="col-lg-5 mb-30">
            <div
              id="product-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner bg-light">
                <div className="carousel-item active">
                  <img className="w-100 h-100" src={DATA.photo} alt="Image1" />
                </div>
                <div className="carousel-item">
                  <img className="w-100 h-100" src={DATA.photo} alt="Image2" />
                </div>
                <div className="carousel-item">
                  <img className="w-100 h-100" src={DATA.photo} alt="Image3" />
                </div>
                <div className="carousel-item">
                  <img className="w-100 h-100" src={DATA.photo} alt="Image4" />
                </div>
              </div>

              <a
                className="carousel-control-prev"
                href="#product-carousel"
                data-slide="prev"
              >
                <i className="fa fa-2x fa-angle-left text-dark" />
              </a>
              <a
                className="carousel-control-next"
                href="#product-carousel"
                data-slide="next"
              >
                <i className="fa fa-2x fa-angle-right text-dark" />
              </a>
            </div>
          </div>
          <div className="col-lg-7 h-auto mb-30">
            <div className="h-100 bg-light p-30">
              <h3>{DATA.name}</h3>
              <div className="d-flex mb-3">
                <div className="text-primary mr-2">
                  <small className="fas fa-star" />
                  <small className="fas fa-star" />
                  <small className="fas fa-star" />
                  <small className="fas fa-star-half-alt" />
                  <small className="far fa-star" />
                </div>
                <small className="pt-1">
                  ( {DATA.Comment?.length}  Reviews)
                </small>
              </div>
              <h3 className="font-weight-semi-bold mb-4">${DATA.price}</h3>
              <p className="mb-4">
                Everything related to the exact description of the product, and
                if you like it,
                <br />
                you can add it to your shopping cart <br />
                <br />
                <b>{DATA.description}</b>
              </p>
              <div className="d-flex mb-3">
              </div>
              <div className="d-flex mb-4">
                <strong className="text-dark mr-3">Colors:</strong>
                <form>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="color-1"
                      name="color"
                    />
                    <label className="custom-control-label" htmlFor="color-1">
                      Black
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="color-2"
                      name="color"
                    />
                    <label className="custom-control-label" htmlFor="color-2">
                      White
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="color-3"
                      name="color"
                    />
                    <label className="custom-control-label" htmlFor="color-3">
                      Red
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="color-4"
                      name="color"
                    />
                    <label className="custom-control-label" htmlFor="color-4">
                      Blue
                    </label>
                  </div>
                  <div className="custom-control custom-radio custom-control-inline">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id="color-5"
                      name="color"
                    />
                    <label className="custom-control-label" htmlFor="color-5">
                      Green
                    </label>
                  </div>
                </form>
              </div>
              <div className="d-flex align-items-center mb-4 pt-2">
                <button
                  className="btn btn-primary px-3"
                  onClick={() => addTocart(DATA)}
                >
                  <i className="fa fa-shopping-cart mr-1" /> Add To Cart
                </button>
              </div>
              <div className="d-flex pt-2">
                <strong className="text-dark mr-2">Share on:</strong>
                <div className="d-inline-flex">
                  <a className="text-dark px-2" href>
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="text-dark px-2" href>
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="text-dark px-2" href>
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="text-dark px-2" href>
                    <i className="fab fa-pinterest" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row px-xl-5">
          <div className="col">
            <div className="bg-light p-30">
              <div className="nav nav-tabs mb-4">
                <a
                  className="nav-item nav-link text-dark"
                  data-toggle="tab"
                  href="#tab-pane-1"
                >
                  Reviews ({DATA.Comment?.length})
                </a>
                <a
                  className="nav-item nav-link text-dark active"
                  data-toggle="tab"
                  href="#tab-pane-2"
                >
                  Description
                </a>
                <a
                  className="nav-item nav-link text-dark"
                  data-toggle="tab"
                  href="#tab-pane-3"
                >
                  Information
                </a>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-pane-2">
                  <h4 className="mb-3">Product Description</h4>
                  <p>
                    Eos no lorem eirmod diam diam, eos elitr et gubergren diam
                    sea. Consetetur vero aliquyam invidunt duo dolores et duo
                    sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod
                    consetetur invidunt sed sed et, lorem duo et eos elitr,
                    sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed
                    tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing,
                    eos dolores sit no ut diam consetetur duo justo est, sit
                    sanctus diam tempor aliquyam eirmod nonumy rebum dolor
                    accusam, ipsum kasd eos consetetur at sit rebum, diam kasd
                    invidunt tempor lorem, ipsum lorem elitr sanctus eirmod
                    takimata dolor ea invidunt.
                  </p>
                  <p>
                    Dolore magna est eirmod sanctus dolor, amet diam et eirmod
                    et ipsum. Amet dolore tempor consetetur sed lorem dolor sit
                    lorem tempor. Gubergren amet amet labore sadipscing clita
                    clita diam clita. Sea amet et sed ipsum lorem elitr et, amet
                    et labore voluptua sit rebum. Ea erat sed et diam takimata
                    sed justo. Magna takimata justo et amet magna et.
                  </p>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <h4 className="mb-3">Additional Information</h4>
                  <p>
                    Eos no lorem eirmod diam diam, eos elitr et gubergren diam
                    sea. Consetetur vero aliquyam invidunt duo dolores et duo
                    sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod
                    consetetur invidunt sed sed et, lorem duo et eos elitr,
                    sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed
                    tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing,
                    eos dolores sit no ut diam consetetur duo justo est, sit
                    sanctus diam tempor aliquyam eirmod nonumy rebum dolor
                    accusam, ipsum kasd eos consetetur at sit rebum, diam kasd
                    invidunt tempor lorem, ipsum lorem elitr sanctus eirmod
                    takimata dolor ea invidunt.
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item px-0">
                          Sit erat duo lorem duo ea consetetur, et eirmod
                          takimata.
                        </li>
                        <li className="list-group-item px-0">
                          Amet kasd gubergren sit sanctus et lorem eos
                          sadipscing at.
                        </li>
                        <li className="list-group-item px-0">
                          Duo amet accusam eirmod nonumy stet et et stet eirmod.
                        </li>
                        <li className="list-group-item px-0">
                          Takimata ea clita labore amet ipsum erat justo
                          voluptua. Nonumy.
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item px-0">
                          Sit erat duo lorem duo ea consetetur, et eirmod
                          takimata.
                        </li>
                        <li className="list-group-item px-0">
                          Amet kasd gubergren sit sanctus et lorem eos
                          sadipscing at.
                        </li>
                        <li className="list-group-item px-0">
                          Duo amet accusam eirmod nonumy stet et et stet eirmod.
                        </li>
                        <li className="list-group-item px-0">
                          Takimata ea clita labore amet ipsum erat justo
                          voluptua. Nonumy.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-1">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="mb-4">
                        {DATA.Comment?.length} - Review For "{DATA.name}"
                      </h4>
                      {load ? (
                        "please wait"
                      ) : (
                        <div style={{ display: "flex", flexDirection: "column-reverse"}}>
                          {DATA?.Comment?.map((elem, i) => {
                            return (
                              <div
                                className="media"
                                style={{ width: "100%"}}
                                key={i}
                              >
                                <img
                                  src={`http://localhost:3001/images/${elem.userId?.Photo}`}
                                  alt="Imagex"
                                  className="img-fluid mr-3 mt-1"
                                  style={{ width: 45, height: 45 }}
                                />
                                <div
                                  className="media"
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    margin: 1,
                                    width: "100%",
                                  }}
                                >
                                  <h6 style={{ color: "blue" }}>
                                    @{elem.userId.FirstName}{" "}
                                    {elem.userId.LastName}
                                  </h6>
                                  <small style={{ color: "gray" }}>
                                    {" "}
                                    <i>@{elem.userId.Email}</i>
                                  </small>
                                  <div className="text-primary"></div>
                                  <p>{elem.commentaires}</p>
                                  <div
                                    className="media"
                                    style={{
                                      display: "flex",
                                      justifyContent: "space-around",
                                      width: "100%",
                                    }}
                                  >  Rating is : {elem.race}
                                    <Rating
                                      name="hover-feedback"
                                      value={elem.race}
                                      disabled
                                    />
                                    <small>
                                      {" "}
                                      - <i>01 Jan 2045</i>
                                    </small>
                                  </div>
                                  <hr
                                    style={{ color: "black", width: "100%" }}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <div className="col-md-6">
                      <h4 className="mb-4">Leave a review</h4>
                      <span>
                        Your email address will not be published. Required
                        fields are marked *
                      </span>
                      <form>
                        <Box
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Avatar
                            alt="Remy Sharp"
                            src={`http://localhost:3001/images/${user?.Photo}`}
                          />
                          <Typography
                            sx={{
                              marginLeft: "15px",
                              color: "black",
                              fontWeight: "600",
                              fontSize: "17px",
                            }}
                          >
                            {user?.FirstName} {user?.LastName}
                          </Typography>
                        </Box>
                        <div className="d-flex my-3">
                          <p className="mb-0 mr-2">Your Rating * :</p>
                          <Rating
                            name="hover-feedback"
                            value={value}
                            precision={0.5}
                            getLabelText={getLabelText}
                            onChange={(event, newValue) => {
                              setValue(newValue);
                            }}
                            onChangeActive={(event, newHover) => {
                              setHover(newHover);
                            }}
                            emptyIcon={
                              <StarIcon
                                style={{ opacity: 0.55 }}
                                fontSize="inherit"
                              />
                            }
                          />
                          {value !== null && (
                            <Box sx={{ ml: 2, color: "orange" }}>
                              {labels[hover !== -1 ? hover : value]}
                            </Box>
                          )}
                        </div>
                        <div className="form-group">
                          <label htmlFor="message">Your Review *</label>
                          <textarea
                            id="message"
                            cols={30}
                            rows={5}
                            className="form-control"
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}
                          />
                        </div>
      
                        <div className="form-group mb-0">
                          <input
                            type="submit"
                            defaultValue="Leave Your Review"
                            className="btn btn-primary px-3"
                            onClick={handleSubmit}
                          />
                        </div>
                      </form>
                    </div>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shop Detail End */}
    </div>
  );
};

export default Detail;
