import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { SnackbarProvider } from "notistack";
import { ShopContext } from '../../ShopContext/Shopcontext'
import Succes from '../../component/Snackbar/Succes';
import { Box, Typography } from '@mui/material';

const Favorite = () => {

  const {addTocart , dataLocalStorage ,   setDataLocalStorage} = useContext(ShopContext)

  const removeToLocalStorage = (product) => {
    const newcart = dataLocalStorage.filter((p) => p._id !== product._id);
    localStorage.setItem("data" , JSON.stringify(newcart))
    setDataLocalStorage(newcart);
    Succes("Product Removed With Succes !", "success");
  };

 

  return (
<div>
 <SnackbarProvider autoHideDuration={2500} />
  {/* Navbar End */}
  {/* Breadcrumb Start */}
  <div className="container-fluid">
    <div className="row px-xl-5">
      <div className="col-12">
        <nav className="breadcrumb bg-light mb-30">
          <Link className="breadcrumb-item text-dark" >Home</Link>
          <Link className="breadcrumb-item text-dark" >Shop</Link>
          <span className="breadcrumb-item active">Shop Detail</span>
        </nav>
      </div>
    </div>
  </div>
  {/* Breadcrumb End */}
  {/* Shop Detail Start */}
  <div className="container-fluid pb-5">
  {dataLocalStorage?.length > 0 ? dataLocalStorage.map((elem,index)=> {
              return (
    <div className="row px-xl-5" key={index}>
      <div className="col-lg-5 mb-30">
        <div id="product-carousel" className="carousel slide" data-ride="carousel">
      
              <div className="carousel-inner bg-light">
              <div className="carousel-item active">
                <img className="w-100 h-100" src={elem.photo} alt="Image1" />
              </div>
            </div>
        </div>
      </div>
      <div className="col-lg-7 h-auto mb-30">
        <div className="h-100 bg-light p-30">
        <span className='removeBtn'>
          <button className="btn btn-sm btn-danger"  onClick={()=> removeToLocalStorage(elem)} >
            <i className="fa fa-times" />
            </button>
            </span>
          <h3>{elem.name}</h3>
          <div className="d-flex mb-3">
            <div className="text-primary mr-2">
              <small className="fas fa-star" />
              <small className="fas fa-star" />
              <small className="fas fa-star" />
              <small className="fas fa-star-half-alt" />
              <small className="far fa-star" />
            </div>
            <small className="pt-1">
              (
                {/* {elem.race} */}
             Reviews)</small>
          </div>
          <h3 className="font-weight-semi-bold mb-4">${elem.price}</h3>
          <p className="mb-4">
          Everything related to the exact description of the product, and if you like it,<br />
           you can add it to your shopping cart <br />
          <br /><b>{elem.description}</b></p>
          <div className="d-flex mb-3">

          </div>
        
          <div className="d-flex align-items-center mb-4 pt-2">
            <button className="btn btn-primary px-3"  onClick={() => addTocart(elem)}><i className="fa fa-shopping-cart mr-1" /> Add To
              Cart</button>
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
              )})
            : 
            <div className="row px-xl-5">
                 <Box    sx={{
      mx: "15px",
      py:"15px",
      display: "flex",
      width: "98%",
      bgcolor: "red",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Typography sx={{ color: "white", fontSize: "15px" }}>
      No Favorite Products Exist Here
              </Typography>
              </Box>
            </div>
            }

  </div>
  {/* Shop Detail End */}

</div>

  )
}

export default Favorite