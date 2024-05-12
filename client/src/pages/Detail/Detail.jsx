import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import { ShopContext } from "../../ShopContext/Shopcontext";
import { Avatar, Box, Rating, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import API from "../../api/axios";
import Message from "../../component/Snackbar/Message";

const Detail = () => {
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
  const [productById , setproductById] = useState(null)
  const [loading , setLoading] = useState(false)
  const { addTocart, user} = useContext(ShopContext);

  useEffect(() =>{
    API.get(`/PRODUCT/GET/${location.state}`).then((res) => 
    setproductById(res.data)
    ).catch((err) => console.log(err))
  } , [])
//TODO: Validation Form
const HandleValidation = () => {
  if (user === null) {
    Message("You are not authenticated, please login", "error");
    return false;
  } else if (comment === null){
    Message("Please fill in all fields!", "error");
    return false;    
  }
  return true;
};
const handleSubmit = async (e) => {
  e.preventDefault();
  if(HandleValidation()){
    try {
      const { data } = await API.put(`/PRODUCT/UPDATE/${location.state}`, {
        comment,
        value,
      });
      Message("Comment added with succes ", "success");
      setValue(2);
      setComment("");
      setproductById(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }};
  
  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }
  const [value, setValue] = React.useState(2);
  const [comment, setComment] = useState("");
  const [hover, setHover] = React.useState(-1);
  console.log(comment)
  
  // Récupére Id Product to page -- ListProduct.jsx
  return (
    <div>
      {productById === null ?
      <>
      please wait ...
      </> 
      :
      <>
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
                  <img className="w-100 h-100" src={productById.photo} alt="Image1" />
                </div>
              </div>
 
            </div>
          </div>
          <div className="col-lg-7 h-auto mb-30">
            <div className="h-100 bg-light p-30">
              <h3>{productById.name}</h3>
              <div className="d-flex mb-3">
                <div className="text-primary mr-2">
                  <small className="fas fa-star" />
                  <small className="fas fa-star" />
                  <small className="fas fa-star" />
                  <small className="fas fa-star-half-alt" />
                  <small className="far fa-star" />
                </div>
                <small className="pt-1">
                  ( {productById.Comment?.length}  Reviews)
                </small>
              </div>
              <h3 className="font-weight-semi-bold mb-4">${productById.price}</h3>
              <p className="mb-4">
                Everything related to the exact description of the product, and
                if you like it,
                <br />
                you can add it to your shopping cart <br />
                <br />
                <b>{productById.description}</b>
              </p>
              <div className="d-flex mb-3">
              </div>
        
              <div className="d-flex align-items-center mb-4 pt-2">
                <button
                  className="btn btn-primary px-3"
                  onClick={() => addTocart(productById)}
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
                  className="nav-item nav-link text-dark active"
                  data-toggle="tab"
                  href="#tab-pane-1"
                >
                  Reviews ({productById.Comment?.length})
                </a>
                <a
                  className="nav-item nav-link text-dark"
                  data-toggle="tab"
                  href="#tab-pane-2"
                >
                  Description
                </a>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade" id="tab-pane-2">
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
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="mb-4">
                        {productById.Comment?.length} - Review For "{productById.name}"
                      </h4>
                      {loading ? (
                        "please wait"
                      ) : (
                        <div style={{ display: "flex", flexDirection: "column-reverse"}}>
                          {productById?.Comment?.map((elem, i) => {
                            return (
                              <div
                                className="media"
                                style={{ width: "100%"}}
                                key={i}
                              >
                                <img
                                  src={`https://ecommerces-ncev.onrender.com/images/${elem.userId?.Photo}`}
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
                                    width: "99%",
                                  }}
                                >
                                  <h6 style={{ color: "blue" }}>
                                    @{elem.userId?.FirstName}{" "}
                                    {elem.userId?.LastName}
                                  </h6>
                                  <small style={{ color: "gray" }}>
                                    {" "}
                                    <i>@{elem.userId?.Email}</i>
                                  </small>
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
                            src={`https://ecommerces-ncev.onrender.com/images/${user?.Photo}`}
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

      </>
      }
    </div>
  );
};

export default Detail;
