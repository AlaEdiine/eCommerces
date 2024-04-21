import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cancel from "./pages/Cancel/Cancel";
import Cart from "./pages/Cart/Cart";
import Layout from "./component/Layout";
import Detail from "./pages/Detail/Detail";
import Favorite from "./pages/Favorite/Favorite";
import Order from "./pages/Order/Order";
import VerifyEmail from "./pages/verify-email/VerifyEmail";
import Profile from "./pages/Profile/Profile";
import Shop from "./pages/Shop/Shop";
import ShopDetails from "./pages/ShopDetails/ShopDetails";
import Sucess from "./pages/Sucess/Sucess";
import Register from "../src/pages/Register/Register"
import Login from "./pages/Login/Login";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword"
import NotVerified from "./pages/Not-verified/NotVerified"
import ResetPassword from "./pages/Reset-Password/ResetPassword";
import PasswordEmail from "./pages/Password-Email/PasswordEmail";
import Contact from "./pages/Contact/Contact";
import Checkout from "./pages/Checkout/Checkout";
import Loading from "./component/Loading/Loading";
import EditProfile from "./pages/Profile/EditProfile";
import ChangePasword from "./pages/ChangePasword/ChangePasword";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Context from "./ShopContext/Shopcontext";
import NotFound from "./component/NotFound/NotFound"


function App() {

  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/setting" element={<ChangePasword />} />
            <Route path="/success" element={<Sucess />} />
            <Route path="/cancel" element={<Cancel />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/shopdetails" element={<ShopDetails />} />
          <Route path="/products" element={<Products />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order" element={<Order />} />
          </Route>
          <Route path="/user/:userId/verify/:tokens" element={<VerifyEmail />} />
          <Route path="/notverified" element={<NotVerified />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/resetPassword/:userId/:tokens" element={<ResetPassword />} />
          <Route path="/resetPassword/email" element={<PasswordEmail />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
