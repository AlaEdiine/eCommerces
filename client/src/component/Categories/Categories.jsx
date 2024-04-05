import React from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch';

const Categories = () => {
  const { DATA, load } = useFetch(
    "PRODUCT/BY_BRAND?brand=Apple,Laptop,MacBook,Samsung,MiniPhone"
  );
  return (
    <div>
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
      <span className="bg-secondary pr-3">Categories/Brand</span></h2>
      <div className="row px-xl-5 pb-3">
      <Link to='/shop/Apple' className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <p className="text-decoration-none" >
          <p className="cat-item d-flex align-items-center mb-4">
            <div className="overflow-hidden" style={{width: 100, height: 100}}>
              <img className="img-fluid" src="https://target.scene7.com/is/image/Target/GUEST_59ebe22b-8680-4c95-912c-49d99f29c8a4" alt="cat-1" />
            </div>
            <div className="flex-fill pl-3">
              <h6>Category: Apple</h6>
              <small className="text-body">{DATA[0]} Products</small>
            </div>
          </p>
        </p>
      </Link>
      <Link to='/shop/Laptop' className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="text-decoration-none" >
          <div className="cat-item img-zoom d-flex align-items-center mb-4">
            <div className="overflow-hidden" style={{width: 100, height: 100}}>
              <img className="img-fluid" src="https://www.cdiscount.com/pdt2/3/v/0/2/700x700/bunhp15eh1043v0/rw/pc-portable-hp-pavilion-15-eh1043nf-15-fhd-ry.jpg" alt="cat2" />
            </div>
            <div className="flex-fill pl-3">
              <h6>Category : Laptop</h6>
              <small className="text-body">{DATA[1]}  Products</small>
            </div>
          </div>
        </div>
      </Link>
      <Link to='/shop/MacBook' className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <p className="text-decoration-none" >
          <div className="cat-item d-flex align-items-center mb-4">
            <div className="overflow-hidden" style={{width: 100, height: 100}}>
              <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQXvL__DMyVT8Q0jU83fURqMW-Lf2quX-ir2zorfFHT5alS7CtB0-7XE7MgudrID01BM&usqp=CAU" alt="cat-1" />
            </div>
            <div className="flex-fill pl-3">
              <h6>Category : MacBook</h6>
              <small className="text-body">{DATA[2]}  Products</small>
            </div>
          </div>
        </p>
      </Link>
      <Link to='/shop/Samsung' className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="text-decoration-none" >
          <div className="cat-item img-zoom d-flex align-items-center mb-4">
            <div className="overflow-hidden" style={{width: 100, height: 100}}>
              <img className="img-fluid" src="https://img.freepik.com/premium-psd/berlin-germany-may-14-2023-hand-holding-smart-phone-screen-mockup-iphone-smartphone-mockup-perspective-view-isolated-white-background_361816-8240.jpg" alt="cat2" />
            </div>
            <div className="flex-fill pl-3">
              <h6>Category : Samsung</h6>
              <small className="text-body">{DATA[3]}  Products</small>
            </div>
          </div>
        </div>
      </Link>
    

    </div>
    </div>
  )
}

export default Categories