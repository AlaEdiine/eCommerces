import "./Register.css";
import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useContext, useState } from "react";
import { SnackbarProvider } from "notistack";
import { ShopContext } from "../../ShopContext/Shopcontext";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import PasswordIcon from "@mui/icons-material/Password";
import CircularProgress from "@mui/material/CircularProgress";
import API from "@/api/axios";
import { useNavigate } from "react-router";
import Message from "@/component/Snackbar/Message";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
// import GoogleIcon from '@mui/icons-material/Google';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import GitHubIcon from '@mui/icons-material/GitHub';

const Register = () => {

  const [form, setform] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const Values = useContext(ShopContext)

  // const googleConnect = () =>{
  //   window.open("http://localhost:3001/auth/google/callback" , "_self")
  // }
  
  // const getUser = async () => {
  //   try {
  //     const { data } = await API.get("/auth/success", {
  //       withCredentials: true,
  //     });
  //     console.log(data);
  //     Values.setUser(data.FirstName);
  //     return nav('/account')
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const HandleValidation = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const myVar = undefined;
    const { FirstName, LastName, Email, Password, ConfirmPassword } = form;
    if (FirstName === myVar) {
      Message("FirstName is required", "error");
      return false;
    } else if (FirstName.length < 3) {
      Message("FirstName should be greater 3 characters", "error");
      return false;
    }
    if (LastName === myVar) {
      Message("LastName is required", "error");
      return false;
    } else if (LastName.length < 3) {
      Message("LastName should be greater 3 characters", "error");
      return false;
    } else if (Email === myVar) {
      Message("Email is required", "error");
      return false;
    } 
     else if (!emailRegex.test(Email) & Email.length > 0) {
      Message("Email is not defined", "error");
      return false;
    } 
    
    
    
    else if (Password === myVar) {
      Message("Password is required", "error");
      return false;
    } else if (Password.length <= 5) {
      Message("Password should be greater 6 characters", "error");
      return false;
    } else if (Password !== ConfirmPassword) {
      Message("Password and confirm passsword should be same", "error");
      return false;
    }
    return true;
  };

  const navigate = useNavigate();
  const valueContext = useContext(ShopContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (HandleValidation()) {
      setLoading(true);
      try {
       const {data} = await API.post(`/USER/AJOUTER`, { form })
          setLoading(false);
          valueContext.setUser(data);
          return navigate("/notverified");
      } catch (error) {
        setLoading(false);
        console.log(error);
        return Message(error.response.data.message, "error");
      } finally {
        return setLoading(false);
      }
    } else {
      return setLoading(false);
    }
  };


  return (
    <div className="home">
      <div className="container-1">
        Welcome <br />
        <p className="title-1">
          To our E-commerce MultiShop <br /> website
        </p>{" "}
        <Link to="/">
          <Button variant="outlined">Show Site</Button>
        </Link>
      </div>
      <div className="container-2">
        <div className="registerMain">
          <SnackbarProvider autoHideDuration={2500} />
          <p className="p">Sign Up</p>
          {/* <div className="SocialMedia">
          <Button onClick={googleConnect} sx={{m:'5px' , color:'white'}} variant="outlined" startIcon={<GoogleIcon />}> Google</Button>
          <Button  onClick={getUser}  sx={{m:'5px' , color:'white'}} variant="outlined" startIcon={<FacebookIcon />}> Facebook</Button>
          <Button sx={{m:'5px' , color:'white'}} variant="outlined" startIcon={<GitHubIcon />}> Github</Button>
          </div> */}
          <form className="form" onSubmit={handleSubmit}>
            <label className="label">
              <AccountBoxRoundedIcon className="icones" />
              <input
                type="text"
                placeholder="First Name"
                name="FirstName"
                className="input"
                autoComplete="true"
                onChange={(e) => handleChange(e)}
              />
            </label>

            <label className="label">
              <AccountBoxRoundedIcon className="icones" />
              <input
                type="text"
                placeholder="Last Name"
                name="LastName"
                className="input"
                autoComplete="true"
                onChange={(e) => handleChange(e)}
              />
            </label>

            <label className="label">
              <PersonIcon className="icones" />
              <input
                type="email"
                placeholder="Email"
                name="Email"
                className="input"
                autoComplete="true"
                onChange={(e) => handleChange(e)}
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
                onChange={(e) => handleChange(e)}
              />
            </label>

            <label className="label">
              <PasswordIcon className="icones" />
              <input
                type={showPassword ? "text" : "password"}
                name="ConfirmPassword"
                placeholder="Confirm Password"
                className="input"
                autoComplete="true"
                onChange={(e) => handleChange(e)}
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
            {loading && <CircularProgress />}
            {!loading && 
            <button type="submit" className="button">
              valider
            </button>
            }
          </form>
         
        </div>

        <div className="box-multiples">
          <Link to="/login" className="registerLoginBtn">
            <p className="p">Sign In</p>
          </Link>

          <Link to="/forgetPassword" className="registerFrogetBtn">
            <p className="p">
              <span  className="attracive">
                Forget 
                </span>
                <span className="attracive">
               Password
                </span>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
