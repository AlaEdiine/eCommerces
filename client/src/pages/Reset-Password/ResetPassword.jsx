import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material';
import { Box } from '@mui/system';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useEffect, useState } from 'react';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import API from '@/api/axios';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Message from '../../component/Snackbar/Message';

const ResetPassword = () => {

    /**------------------
   * shifting Hooks
   --------------------*/
  const { userId , tokens} = useParams()
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [checkLink , setCheckLink] = useState(null)
    const [load, setLoad] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const navigate = useNavigate()


       /**
       * @Link
       * /AUTH/RESETPASSWORD/:userId/:tokens
      */
    useEffect(()=>{
        const getCheckLink = async() => {
          setLoad(true)
          try{
        const {data} = await API.get(`/AUTH/RESETPASSWORD/${userId}/${tokens}`)
              console.log(data);
              setLoad(false)
              setCheckLink(true)
          } catch (err){
            console.log(err.response.data.message);
            console.log(err.response.status);
            setLoad(false)
            setCheckLink(false)
          }
        }
        getCheckLink()
      },[userId,tokens])

    /**------------------
   * Form validation
   --------------------*/

      const HandleValidation = () => {
if (password === null) {
          Message("Password is required", "error");
          return false;
        } else if (password.length <= 5) {
          Message("Password should be greater 6 characters", "error");
          return false;
        } else if (password !== confirmPassword) {
          Message("Password and confirm passsword should be same", "error");
          return false;
        }
        return true;
      };
  /**-------------------
   * Submit Form
   * @link
   * /AUTH/RESETPASSWORD
   ---------------------*/
   const HandleSubmit = async (e) => {
    e.preventDefault();
    if (HandleValidation()) {
      try {
        setLoad(true);
        const { data } = await API.post("/AUTH/RESETPASSWORD", {
          password,
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
    <form onSubmit={HandleSubmit}>
    <Box sx={{height: '100vh' , display : 'flex', flexDirection:'column', bgcolor: 'white' , alignItems: 'center' , justifyContent: 'center' }}>
         {load && <b>Loading ...</b>} <br />
         {checkLink &&
         <>
        <Typography sx={{ m: 3, width: '350px',  color:'green' ,fontSize:'24px' , display : 'flex', alignItems: 'center' , justifyContent: 'center' , fontWeight: 700}} >Welcome to, <br /> Reset Your Password Account</Typography>
    <FormControl sx={{ m: 1, width: '350px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl sx={{ m: 2, width: '350px' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
         <Button type='submit' sx={{ m: 1, width: '350px' , p:1,  color:'#FFF' , bgcolor:'blue', fontSize:'15px' }}  variant="contained"> Submit</Button>
         </>
          }
          {checkLink === false &&
         <>
          <Box sx={{ display : 'flex' , flexDirection: 'column'}}>
       <Box  sx={{ display : 'flex' , alignItems: 'center'}}>
         <VerifiedIcon sx={{ color: "red" , marginRight: "20px" , fontSize:'40px'}} />
         <Typography sx={{ color: "red" , fontSize: '40px'}} >
             Invalid Link
         </Typography>
     </Box>
     <Link to="/login" >
     <Box sx={{ display : 'flex', marginTop: "40px" , alignItems: 'center' , justifyContent: 'center'}}>
         <Link to='/'>
          <Button  variant="outlined" sx={{ color: 'white'}}> Home Page</Button>
         </Link>
         </Box>
         </Link>
         </Box>
         </>
}


    </Box>
    </form>


  )
}

export default ResetPassword