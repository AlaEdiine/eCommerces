import { Box, Typography } from '@mui/material'
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';

const Cancel = () => {
  return (
    <Box    sx={{
      mx: "15px",
      py:"40px",
      display: "flex",
      width: "98%",
      bgcolor: "red",
      alignItems: "center",
      justifyContent: "center",
    }}>
        <DoNotDisturbIcon
                sx={{ color: "white", marginRight: "20px", fontSize: "25px" }}
              />
      <Typography sx={{ color: "white", fontSize: "25px" }}>
      Rejected Paiement
              </Typography>
              </Box>
//comment
  )
}

export default Cancel