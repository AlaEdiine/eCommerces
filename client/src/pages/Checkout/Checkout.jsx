import React, { useContext,  useState } from 'react'
import { Link } from 'react-router-dom'
import CircularProgress from "@mui/material/CircularProgress";
import API from '../../api/axios'
import { ShopContext } from '../../ShopContext/Shopcontext'
import {loadStripe} from '@stripe/stripe-js';
import { SnackbarProvider } from 'notistack';



const Checkout = () => {

 
  const valueContext = useContext(ShopContext);
  const [loading, setLoading] = useState(false);
  const [form,setForm] = useState({})
  const handleChange = (e) => {
    const { name , value } = e.target
    setForm({...form , name:value})
  }
console.log(form);
const makePayment = async() =>{
  var sumTT = valueContext.total
  const carts = valueContext.cartitems
  const stripe = await loadStripe("pk_test_51O18oUI8VfQURt5gb8rFT2ibiwFFRAsHNLHt2SsdLATfKPjnYTjkHbNeyxFCRa0M1wKC9ha5giwREdqzMIjbGoJj00GRi7e7Tn")
   await API.post('/api/sessionCheckout', {carts , sumTT})
  .then((res)=> window.location.replace(res.data.url ) )
  .catch((err)=> console.log(err))

}


  return (
<div>
  <SnackbarProvider autoHideDuration={2500} />
  {valueContext.user === null ?
  <>
  <p>Not found user please login</p>
  </>
:
<>
  {/* Breadcrumb Start */}
  <div className="container-fluid">
    <div className="row px-xl-5">
      <div className="col-12">
        <nav className="breadcrumb bg-light mb-30">
          <Link className="breadcrumb-item text-dark" >Home</Link>
          <Link className="breadcrumb-item text-dark" >Shop</Link>
          <span className="breadcrumb-item active">Checkout</span>
        </nav>
      </div>
    </div>
  </div>
  {/* Breadcrumb End */}
  {/* Checkout Start */}
  <div className="container-fluid">
    <div className="row px-xl-5">
      <div className="col-lg-8">
        <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">
          {/* Billing Address */}
          Shipping Address
          </span></h5>
        <div className="bg-light p-30 mb-5">
          <div className="row">
            <div className="col-md-6 form-group">
              <label>First Name</label>
              <input className="form-control" type="text" placeholder={valueContext.user.FirstName} />
            </div>
            <div className="col-md-6 form-group">
              <label>Last Name</label>
              <input className="form-control" type="text" placeholder={valueContext.user.LastName} />
            </div>
            <div className="col-md-6 form-group">
              <label>E-mail</label>
              <input className="form-control" type="text" placeholder={valueContext.user.Email} />
            </div>
            <div className="col-md-6 form-group">
              <label>Mobile No</label>
              <input className="form-control" type="text" placeholder={valueContext.user.Mobile} />
            </div>
            <div className="col-md-6 form-group">
              <label>Address</label>
              <input className="form-control" type="text" placeholder={valueContext.user.Address.Rue} />
            </div>
            <div className="col-md-6 form-group">
              <label>ZIP Code</label>
              <input className="form-control" type="text" placeholder={valueContext.user.Address.ZIPcode} />
            </div>
            <div className="col-md-6 form-group">
              <label>Country</label>
              <select className="custom-select">
                <option selected>Canada</option>
                <option>France</option>
                <option>Tunisia</option>
              </select>
            </div>
            <div className="col-md-6 form-group">
              <label>City</label>
              <input className="form-control" type="text" placeholder={valueContext.user.Address.City} />
            </div>
  
            <div className="col-md-12 form-group">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="newaccount" onChange={handleChange} name="newaccount" />
                <label className="custom-control-label" htmlFor="newaccount">Create an account</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="shipto" onChange={handleChange} name="shipto" />
                <label className="custom-control-label" htmlFor="shipto" data-toggle="collapse" data-target="#shipping-address">Ship to different address</label>
              </div>
            </div>
          </div>
        </div>
        <div className="collapse mb-5" id="shipping-address">
          <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Shipping Address</span></h5>
          <div className="bg-light p-30">
            <div className="row">
              <div className="col-md-6 form-group">
                <label>First Name</label>
                <input className="form-control" type="text" placeholder="John"  onChange={handleChange} name="FirstName"  />
              </div>
              <div className="col-md-6 form-group">
                <label>Last Name</label>
                <input className="form-control" type="text" placeholder="Doe"  onChange={handleChange} name="LastName" />
              </div>
              <div className="col-md-6 form-group">
                <label>E-mail</label>
                <input className="form-control" type="text" placeholder="example@email.com"  onChange={handleChange} name="Email" />
              </div>
              <div className="col-md-6 form-group">
                <label>Mobile No</label>
                <input className="form-control" type="text" placeholder="+123 456 789"  onChange={handleChange} name="Mobile" />
              </div>
              <div className="col-md-6 form-group">
                <label>Address</label>
                <input className="form-control" type="text" placeholder="123 Street"  onChange={handleChange} name="Address" />
              </div>
              <div className="col-md-6 form-group">
                <label>Zip Code</label>
                <input className="form-control" type="text" placeholder="546778"  onChange={handleChange} name="ZIPcode" />
              </div>
              <div className="col-md-6 form-group">
                <label>Country</label>
                <select className="custom-select">
                  <option selected>France</option>
                  <option>Tunisia</option>
                  <option>Canada</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label>City</label>
                <input className="form-control" type="text" placeholder="New York" />
              </div>
              <div className="col-md-6 form-group">
                <label>State</label>
                <input className="form-control" type="text" placeholder="New York" />
              </div>
              <div className="col-md-6 form-group">
                <label>ZIP Code</label>
                <input className="form-control" type="text" placeholder={123} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Order Total</span></h5>
        <div className="bg-light p-30 mb-5">
          <div className="border-bottom">
            <h6 className="mb-3">Products</h6>
            {valueContext.cartitems.map((elem)=> 
             <div className="d-flex justify-content-between" key={elem.id}>
              <img src={elem.photo} alt='' className='imagesCheckout'></img>
             <p>{elem.name}</p>
             <p>${elem.total}</p>
           </div>
            )}

          </div>
          <div className="border-bottom pt-3 pb-2">
            <div className="d-flex justify-content-between mb-3">
              <h6>Subtotal</h6>
              <h6>${valueContext.total}</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-medium">Shipping</h6>
              <h6 className="font-weight-medium">$10</h6>
            </div>
          </div>
          <div className="pt-2">
            <div className="d-flex justify-content-between mt-2">
              <h5>Total</h5>
              <h5>${valueContext.total + 10}</h5>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Payment</span></h5>
          <div className="bg-light p-30">
            <div className="form-group">
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" name="payment" id="paypal" checked />
                <label className="custom-control-label" htmlFor="paypal">Visa card</label>
              </div>
            </div>
            <button type='button' onClick={makePayment} className="btn btn-block btn-primary font-weight-bold py-3"> {loading && <CircularProgress /> }  Place Order</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Checkout End */}
  </>
   }

</div>

  )
}

export default Checkout