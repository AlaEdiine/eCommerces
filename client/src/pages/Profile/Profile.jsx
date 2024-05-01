import "./Profile.css";
import { SnackbarProvider } from "notistack";
import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { ShopContext } from "../../ShopContext/Shopcontext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import useFetch from "../../Hooks/useFetch";

const Profile = () => {
  const valueContext = useContext(ShopContext);
  const [showHistoryConnection, setshowHistoryConnection] = useState(false);

  const { DATA, load } = useFetch("/ORDER/GET_ALL");

  return (
    <div className="main">
      <SnackbarProvider autoHideDuration={2500} />
      <form className="form-profile">
        {/* Breadcrumb Start */}
        <div className="container-fluid">
          <div className="row px-xl-5">
            <div className="col-12">
              <nav className="breadcrumb bg-light mb-30">
                <a className="breadcrumb-item text-dark" href>
                  Account
                </a>
                <span className="breadcrumb-item active">Profile</span>
              </nav>
            </div>
          </div>
        </div>
        {/* Breadcrumb End */}

        {/* Profile Start */}
        <div className="container-form">
          <div className="block-image-bio">
            <Box
              sx={{
                width: "100%",
                position: "relative",
                overflow: { xs: "none", sm: "initial" },
              }}
            >
              <Card
                orientation="horizontal"
                sx={{
                  width: "100%",
                  flexWrap: "wrap",
                  [`& > *`]: {
                    "--stack-point": "500px",
                    minWidth:
                      "clamp(0px, (calc(var(--stack-point) - 2 * var(--Card-padding) - 2 * var(--variant-borderWidth, 0px)) + 1px - 100%) * 999, 100%)",
                  },
                  // make the card resizable for demo
                  overflow: "auto",
                  resize: "horizontal",
                }}
              >
                <AspectRatio
                  flex
                  ratio="1"
                  maxHeight={182}
                  sx={{ minWidth: 182 }}
                >
                  <img
                    src={
                      valueContext.user
                        ? `https://ecommerces-ncev.onrender.com/images/${valueContext.user?.Photo}`
                        : "https://ecommerces-ncev.onrender.com/images/user.jpeg"
                    }
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>

                <CardContent>
                  <Typography fontSize="xl" fontWeight="lg">
                    {valueContext.user?.FirstName} {valueContext.user?.LastName}
                  </Typography>
                  <Typography
                    level="body-sm"
                    fontWeight="lg"
                    textColor="text.tertiary"
                  >
                    Senior Journalist
                  </Typography>
                  <Sheet
                    sx={{
                      bgcolor: "background.level1",
                      borderRadius: "sm",
                      p: 1.5,
                      my: 1.5,
                      display: "flex",
                      gap: 2,
                      "& > div": { flex: 1 },
                    }}
                  >
                    <div
                      className="btnConnected"
                      onClick={() =>
                        setshowHistoryConnection(!showHistoryConnection)
                      }
                    >
                      <Typography level="body-xs" fontWeight="lg">
                        Connected
                      </Typography>
                      <Typography fontWeight="lg">
                        {valueContext.user?.ConnectionHistory?.length}
                      </Typography>
                    </div>
                    <div>
                      <Typography level="body-xs" fontWeight="lg">
                        Followers
                      </Typography>
                      <Typography fontWeight="lg">980</Typography>
                    </div>
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/order"
                      className="btnConnected"
                    >
                      <Typography level="body-xs" fontWeight="lg">
                        Order Recommended
                      </Typography>
                      <Typography fontWeight="lg">{DATA?.length}</Typography>
                    </Link>
                  </Sheet>
                  <Box
                    sx={{
                      display: "flex",
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Link to="/edit-profile" style={{ width: "100%" }}>
                      <Button
                        variant="solid"
                        color="primary"
                        sx={{ width: "100%" }}
                      >
                        Edit
                      </Button>
                    </Link>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </div>
          <div className="block-info">
            {showHistoryConnection ? (
              <Box
                sx={{
                  width: "100%",
                  height: "400px",
                  overflow: "scroll",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {valueContext.user.ConnectionHistory.map((elem, index) => (
                  <List key={index} sx={{ width: "100%" }} className="list">
                    <ListItem sx={{ width: "100%" }}>
                      <ListItemAvatar>
                        <Avatar
                          alt="Remy Sharp"
                          src={`http://localhost:3001/images/${valueContext.user?.Photo}`}
                          size="lg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        sx={{ fontWeight: "800", color: "black" }}
                        primary={
                          valueContext.user.FirstName +
                          " " +
                          valueContext.user.LastName
                        }
                        secondary={elem}
                      />
                    </ListItem>
                  </List>
                ))}
              </Box>
            ) : (
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input
                  className="inputFormlabel"
                  name="FirstName"
                  value={valueContext.user?.FirstName}
                  disabled
                />{" "}
                <br />
                <FormLabel>Last Name</FormLabel>
                <Input
                  className="inputFormlabel"
                  name="LastName"
                  value={valueContext.user?.LastName}
                  disabled
                />{" "}
                <br />
                <FormLabel>Email</FormLabel>
                <Input
                  className="inputFormlabel"
                  placeholder="Your email"
                  name="Email"
                  value={valueContext.user?.Email}
                  disabled
                />{" "}
                <br />
                <FormLabel>Number Phone</FormLabel>
                <Input
                  className="inputFormlabel"
                  value={valueContext.user?.Mobile}
                  disabled
                  placeholder="Ex 00216 9914 9926"
                  name="Mobile"
                />{" "}
                <br />
                <FormControl>
                  <FormLabel>Adress</FormLabel>
                  <div className="adresse-input-profile">
                    <Input
                      className="inputFormadresse"
                      placeholder="Your adress"
                      name="Address"
                      value={valueContext.user?.Address?.Rue}
                      disabled
                    />
                    <Input
                      className="inputFormadresse"
                      placeholder="City"
                      name="City"
                      value={valueContext.user?.Address?.City}
                      disabled
                    />
                    <Input
                      className="inputFormadresse"
                      placeholder="Zip Code"
                      name="ZIPcode"
                      value={valueContext.user?.Address?.ZIPcode}
                      disabled
                    />
                  </div>
                </FormControl>
                <br />
              </FormControl>
            )}
          </div>
        </div>
        {/* Profile End */}
      </form>
    </div>
  );
};

export default Profile;
