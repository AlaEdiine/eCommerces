import React, { useContext } from 'react'
import {ShopContext} from '../../ShopContext/Shopcontext'
import { SnackbarProvider } from "notistack";
import { Link, useNavigate } from 'react-router-dom';
import Message from "../../component/Snackbar/Message"



const Cart = () => {
  const navigate = useNavigate();
  const {removeTocart ,cartitems , increaseQte , decreaseQte, total , user} = useContext(ShopContext)
console.log(cartitems)
   const ChekoutCommand = () => {

    if (user === null){
     return Message("You are not authenticate, Please login", "error");
    }
    else if(cartitems?.length === 0){
      return Message("Your shopping cart is empty, Please Fill in", "error");
    }
   return navigate('/checkout')
   }

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
              <th>Products</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody className="align-middle">
            { cartitems.length > 0 ?
             cartitems.map((item,i)=>   
                <tr key={item.id}>
                <td className="align-middle"><img src={item.photo} alt="" style={{width: 50}} /> {item.name}</td>
                <td className="align-middle">${item.price}</td>
                <td className="align-middle">
                  <div className="input-group quantity mx-auto" style={{width: 100}}>
                    <div className="input-group-btn" onClick={()=>decreaseQte(item,i)}>
                      <button className="btn btn-sm btn-primary btn-minus" >
                        <i className="fa fa-minus" />
                      </button>
                    </div>
                    <input type="text" className="form-control form-control-sm bg-secondary border-0 text-center"  value={item.Qte} />
                    <div className="input-group-btn"  onClick={()=>increaseQte(item,i)} >
                      <button className="btn btn-sm btn-primary btn-plus">
                        <i className="fa fa-plus"/>
                      </button>
                    </div>
                  </div>
                </td>
                <td className="align-middle">${item.total}</td>
                <td className="align-middle"><button className="btn btn-sm btn-danger" onClick={()=> removeTocart(item)}><i className="fa fa-times" /></button></td>
              </tr>
            ):  <tr>
              <td colSpan={5}>
                <span className='msg'>Your Shopping Cart is Empty </span>
                </td>
                </tr>
              }
          </tbody>
        </table>
      </div>
      <div className="col-lg-4">
        <form className="mb-30" action>
          <div className="input-group">
            <input type="text" className="form-control border-0 p-4" placeholder="Coupon Code" />
            <div className="input-group-append">
              <button className="btn btn-primary">Apply Coupon</button>
            </div>
          </div>
        </form>
        <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Cart Summary</span></h5>
        <div className="bg-light p-30 mb-5">
          <div className="border-bottom pb-2">
            <div className="d-flex justify-content-between mb-3">
              <h6>Subtotal</h6>
              <h6>${total}</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-medium">Shipping</h6>
              <h6 className="font-weight-medium">$10</h6>
            </div>
          </div>
          <div className="pt-2">
            <div className="d-flex justify-content-between mt-2">
              <h5>Total</h5>
              <h5>${total + 10}</h5>
            </div>
            <button onClick={ChekoutCommand} className="btn btn-block btn-primary font-weight-bold my-3 py-3">Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Cart End */}
</div>

  )
}

export default Cart