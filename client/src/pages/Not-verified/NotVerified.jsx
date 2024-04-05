import VerifiedIcon from '@mui/icons-material/Verified';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';


const NotVerified = () => {

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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <VerifiedIcon
            sx={{ color: "orange", marginRight: "20px", fontSize: "40px" }}
          />
          <Typography sx={{ color: "orange", fontSize: "40px" }}>
            We Sent To You An Email, <br /> Please Verify Your Email Address
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
              <Button variant="outlined"> Go To Login Page</Button>
            </Link>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}

export default NotVerified