import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const date = new Date().getFullYear()
  return (
  <div className="container-fluid bg-dark text-secondary mt-5 pt-5">
  <div className="row px-xl-5 pt-5">
    <div className="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
      <h5 className="text-secondary text-uppercase mb-4">Get In Touch</h5>
      <p className="mb-4">
      Hi! I am Ala Eddine, Full stack Js developer, passionate about development and technical culture, I have a creative mind that allows me to propose new innovative solutions and capable of working in a team, However I am open to any proposal that would allow me to unleash my full potential and gain a new experience. thank you for your attention
        </p>
      <p className="mb-2"><i className="fa fa-map-marker-alt text-primary mr-3" />29 Cite balawi 2 , kairouan 3182 , Tunisia</p>
      <p className="mb-2"><i className="fa fa-envelope text-primary mr-3" />alaeddine.alouii@gmail.com</p>
      <p className="mb-0"><i className="fa fa-phone-alt text-primary mr-3" />+216 99149926</p>
    </div>
    <div className="col-lg-8 col-md-12">
      <div className="row">
        <div className="col-md-4 mb-5">
          <h5 className="text-secondary text-uppercase mb-4">Quick Shop</h5>
          <div className="d-flex flex-column justify-content-start">
            <Link to='/' className="text-secondary mb-2"><i className="fa fa-angle-right mr-2" />Home</Link>
            <Link to='/products' className="text-secondary mb-2"><i className="fa fa-angle-right mr-2" />Our Shop</Link>
            <Link to='/favorite' className="text-secondary mb-2"><i className="fa fa-angle-right mr-2" />Favorite</Link>
            <Link to='/cart' className="text-secondary mb-2"><i className="fa fa-angle-right mr-2" />Shoping Cart</Link>
            <Link to='/contact' className="text-secondary"><i className="fa fa-angle-right mr-2" />Contact Us</Link>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <h5 className="text-secondary text-uppercase mb-4">My Account</h5>
          <div className="d-flex flex-column justify-content-start">
          <Link to='/' className="text-secondary mb-2"><i className="fa fa-angle-right mr-2" />Home</Link>
            <Link to='/products' className="text-secondary mb-2"><i className="fa fa-angle-right mr-2" />Our Shop</Link>
            <Link to='/favorite' className="text-secondary mb-2"><i className="fa fa-angle-right mr-2" />Favorite</Link>
            <Link to='/cart' className="text-secondary mb-2"><i className="fa fa-angle-right mr-2" />Shoping Cart</Link>
            <Link to='/contact' className="text-secondary"><i className="fa fa-angle-right mr-2" />Contact Us</Link>
          </div>
        </div>
        <div className="col-md-4 mb-5">
          <h5 className="text-secondary text-uppercase mb-4">lINK account SOCIAL MEDIA</h5>
          {/* <p>Duo stet tempor ipsum sit amet magna ipsum tempor est</p>
          <form action>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Your Email Address" />
              <div className="input-group-append">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </div>
          </form> */}
          <h6 className="text-secondary text-uppercase mt-4 mb-3">Follow Us</h6>
          <div className="d-flex">
            <a  href='https://www.facebook.com/ala.eddine.1297' className="btn btn-primary btn-square mr-2"><i className="fab fa-facebook-f" /></a>
            <a href='https://www.linkedin.com/in/ala-eddine-alloui-0851a0237' className="btn btn-primary btn-square mr-2"><i className="fab fa-linkedin-in" /></a>
            <a href='https://github.com/AlaEdiine' className="btn btn-primary btn-square"><i className="fab fa-github" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row border-top mx-xl-5 py-4" style={{borderColor: 'rgba(256, 256, 256, .1) !important'}}>
    <div className="col-md-6 px-xl-0">
      <p className="mb-md-0 text-center text-md-left text-secondary">
        © {date} - All Rights Reserved. Designed
        by 
        <Link className="text-primary"> Alloui Ala Eddine</Link>
      </p>
    </div>
    <div className="col-md-6 px-xl-0 text-center text-md-right">
      <img className="img-fluid" src="img/payments.png" alt="" />
    </div>
  </div>
</div>

  )
}

export default Footer