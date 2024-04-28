import VerifiedIcon from "@mui/icons-material/Verified";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from '../../api/axios'

const VerifyEmail = () => {
  const { userId, tokens } = useParams();
  const [isEmailVerified, setisEmailVerified] = useState(null);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      setLoad(true);
      try {
        const { data } = await API.get(`/AUTH/${userId}/VERIFY/${tokens}`);
        console.log(data);
        setisEmailVerified(true);
        setLoad(false);
      } catch (err) {
        console.log(err.response.data.message);
        console.log(err.response.status);
        setLoad(false);
        setisEmailVerified(false);
      }
    };
    getUser();
  }, [userId, tokens]);

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        bgcolor: "black",
        alignItems: "center",
        justifyContent: "center",
      }}
    > 
      {load && <b>Loading ...</b>} <br />
      {isEmailVerified && (
        <>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <VerifiedIcon
                sx={{ color: "green", marginRight: "20px", fontSize: "40px" }}
              />
              <Typography sx={{ color: "green", fontSize: "40px" }}>
                Your email address has been successfully verified
              </Typography>
            </Box>
            <Link to="/login">
              <Box
                sx={{
                  display: "flex",
                  marginTop: "40px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link to="/login">
                  <Button variant="outlined" sx={{ color: "white" }}>
                    {" "}
                    Go To Login
                  </Button>
                </Link>
              </Box>
            </Link>
          </Box>
        </>
      )}
      {isEmailVerified === false && (
        <>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <VerifiedIcon
                sx={{ color: "red", marginRight: "20px", fontSize: "40px" }}
              />
              <Typography sx={{ color: "red", fontSize: "40px" }}>
                Invalid Link
              </Typography>
            </Box>
            <Link to="/login">
              <Box
                sx={{
                  display: "flex",
                  marginTop: "40px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link to="/">
                  <Button variant="outlined" sx={{ color: "white" }}>
                    {" "}
                    Home Page
                  </Button>
                </Link>
              </Box>
            </Link>
          </Box>
        </>
      )}
    </Box>
  );
};

export default VerifyEmail;
