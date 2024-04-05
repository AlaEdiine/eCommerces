import "./ForgetPassword.css";
import { useState } from "react";
import { SnackbarProvider } from "notistack";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Button } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CircularProgress from "@mui/material/CircularProgress";
import Message from "../../component//Snackbar/Message";
import API from '../../api/axios'


const ForgetPassword = () => {

  /**------------------
   * shifting Hooks
   --------------------*/
  const navigate = useNavigate();
  const [email, setEmail] = useState(null);
  const [load, setLoad] = useState(false);


  /**-------------------
   * Form validation
   ---------------------*/
  const HandleValidation = () => {
    if (email === null) {
      Message("Email is required", "error");
      return false;
    }
    return true;
  };


   /**-------------------
   * Submit Form
   * @link 
   * AUTH/PASSWORD/CREATELINK
   ---------------------*/
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (HandleValidation()) {
      try {
        setLoad(true);
        const { data } = await API.post("/AUTH/PASSWORD/CREATELINK", {
          email,
        });
        setLoad(false);
        navigate("/resetPassword/email");
      } catch (err) {
        console.log(err.message);
        console.log(err.response.status);
        return Message(err.response.data.message, "error");
      } finally {
        setLoad(false);
      }
    } else {
      return load(false);
    }
  };



   /**-------------------
   * JSX Code
   ---------------------*/
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
        <div className="forgetMain">
          <SnackbarProvider autoHideDuration={2500} />
          <p className="p">Forget Password</p>
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

            {load && <CircularProgress />}
            {!load && 
            <button type="submit" className="button">
              valider
            </button>
}
          </form>
        </div>

        <div className="box-multiples">
          <Link to="/login" className="forgetLoginBtn">
            <p className="p">Sign In</p>
          </Link>

          <Link Link to="/register" className="forgetResiterBtn">
            <p className="p">Sign Up</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
