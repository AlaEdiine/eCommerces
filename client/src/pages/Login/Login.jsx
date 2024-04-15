import "./Login.css";
import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useContext, useState } from "react";
import { SnackbarProvider } from "notistack";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router";
import { ShopContext } from "../../ShopContext/Shopcontext";
import API from "../../api/axios";
import Message from "../../component/Snackbar/Message";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Cookies from "js-cookie";
// import GoogleLogin from 'react-google-login-ng'

const Login = () => {
  const navigate = useNavigate();
  const valueContext = useContext(ShopContext);

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [load, setLoad] = useState(false);

//TODO: Validation Form
  const HandleValidation = () => {
    if (email === null) {
      Message("email is required", "error");
      return false;
    } else if (password === null) {
      Message("password is required", "error");
      return false;
    }
    return true;
  };


//TODO: Sending Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (HandleValidation()) {
      try {
        setLoad(true);
        const { data } = await API.post("/AUTH/LOGIN", {
          email,
          password,
        });
        setLoad(false);
        Cookies.set("Token" , data.token)
       valueContext.setUser(data.infoUser);
       navigate("/");
      } catch (err) {
        console.log(err.response.data.message);
        console.log(err.response.status);
        if (err.response.status === 401) {
          return Message(err.response.data.message, "error");
        }
        else if (err.response.status === 404) {
          return Message(err.response.data.message, "error");
        }
        else if (err.response.status === 423) {
          return navigate("/notverified");
        }
         else if (err.response.status === 500) {
           return Message(`${err.response.data.message} , Error server`, "error");
        }
        
      } finally {
        setLoad(false);
      }
    } else {
      return load(false);
    }
  };


  //TODO: Jsx Codes
  return (
    <div className="home">
      <div className="container-1">
        Welcome <br />
        <p className="title-1">
          To our E-commerce MultiShop <br /> website
        </p>{" "}
        <br />
        <Link to="/">
          <Button variant="outlined">Show Site</Button>
        </Link>
      </div>

      <div className="container-2">
        <div className="loginMain">
          <SnackbarProvider autoHideDuration={2500} />
          <p className="p">Sign In</p>
          
          {/* <GoogleLogin
            client_id= "330964914935-4bj41r4q1dcuen6kog14d2kce4frv65l.apps.googleusercontent.com"
            successCallback={({ credential, select_by }) => {
              console.log(credential, select_by);
            }}
          /> */}

          <form className="form" onSubmit={handleSubmit}>
            <label className="label">
              <PersonIcon className="icones" />
              <input
                type="text"
                placeholder="Email"
                name="Email"
                className="input"
                autoComplete="true"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="label">
              <HttpsIcon className="icones" />
              <input
                type={showPassword ? "text" : "password"}
                name="Password"
                placeholder="Password"
                className="input"
                autoComplete="true"
                onChange={(e) => setPassword(e.target.value)}
              />
              {!showPassword && (
                <span onClick={(e) => setShowPassword(!showPassword)}>
                  <VisibilityOffIcon className="ShowPass" />
                </span>
              )}
              {showPassword && (
                <span onClick={(e) => setShowPassword(!showPassword)}>
                  <RemoveRedEyeIcon className="ShowPass" />
                </span>
              )}
            </label>

            {load && <CircularProgress />}
            {!load && (
              <button type="submit" className="button">
                valider
              </button>
            )}
          </form>
        </div>

        <div className="box-multiples">
          <Link to="/register" className="loginRegisterBtn">
            <p className="p">Sign Up</p>
          </Link>

          <Link to="/forgetPassword" className="loginForgetBtn">
            <p className="p">
              <span className="attracive">Forget</span>
              <span className="attracive">Password</span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login 
