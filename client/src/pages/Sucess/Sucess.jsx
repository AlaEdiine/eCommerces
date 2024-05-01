import { Box, Typography } from '@mui/material'
import VerifiedIcon from "@mui/icons-material/Verified";
import React from 'react'

const Sucess = () => {
  return (
    <Box    sx={{
      mx: "15px",
      py:"40px",
      display: "flex",
      width: "98%",
      bgcolor: "green",
      alignItems: "center",
      justifyContent: "center",
    }}>
        <VerifiedIcon
                sx={{ color: "white", marginRight: "20px", fontSize: "25px" }}
              />
      <Typography sx={{ color: "white", fontSize: "25px" }}>
      Sucess Paiement
              </Typography>
              </Box>
  )
}

export default Sucess