import { Box } from "@mui/system";
import VerifiedIcon from "@mui/icons-material/Verified";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const NotFound = () => {
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <VerifiedIcon
              sx={{ color: "orange", marginRight: "20px", fontSize: "40px" }}
            />
            <Typography sx={{ color: "orange", fontSize: "40px" }}>
              404 Page Not Found
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
                  Go To Home
                </Button>
              </Link>
            </Box>
          </Link>
        </Box>
  </Box>
  )
}

export default NotFound