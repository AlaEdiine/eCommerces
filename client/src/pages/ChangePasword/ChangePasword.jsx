import { SnackbarProvider } from "notistack";
import * as React from "react";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import LinearProgress from "@mui/joy/LinearProgress";
import Typography from "@mui/joy/Typography";
import Key from "@mui/icons-material/Key";
import API from "../../api/axios";
import { useState } from "react";
import Message from "../../component/Snackbar/Message";
import { useNavigate } from "react-router";

const ChangePasword = () => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState("");
  const [valueTwo, setValueTwo] = React.useState("");
  const minLength = 12;
  const [currentPassword, setCurrentPassword] = useState("");
  const [load, setLoad] = useState(false);

  const HandleValidation = () => {
    if (currentPassword === "") {
      Message("Current Password is required", "error");
      return false;
    }
    else if (value === "") {
      Message("New Password is required", "error");
      return false;
    } else if (value.length <= 5) {
      Message("New password should be greater 6 characters", "error");
      return false;
    }else if (value !== valueTwo) {
      Message("New Password and confirm passsword should be same", "error");
      return false;
    }
    return true;
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if(HandleValidation()){
      try {
        setLoad(true);
        const response = await API.post("/SETTING/CHANGE_PASSWORD", {
          currentPassword,
          value,
        });
        console.log(response);
        setLoad(false);
        setValue("") 
        setValueTwo("")
        setCurrentPassword("")
        return Message("Password updated with success" , "success")
      } catch (err) {
        console.log(err)
        if(err.response.status === 401){
         return navigate("/login");
        }
        console.log(err.response.data.message);
        console.log(err.response.status);
        return Message(err.response.data.message , "error")
      } finally {
        setLoad(false);
      }
    } else {
      return setLoad(false);
    }
  };
  return (
    <div>
      <SnackbarProvider autoHideDuration={3500} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} maxSnack={3} />
      {/* Navbar End */}
      {/* Breadcrumb Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <a className="breadcrumb-item text-dark" href>
                Setting
              </a>
              <span className="breadcrumb-item active">Change Password</span>
            </nav>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}
      {/* Contact Start */}
      <div className="container">
        <FormControl className="FormControl">
          <FormLabel>Current Password</FormLabel>
          <Input
            className="inputFormlabel"
            type="password"
            name="currentPassword"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />{" "}
          <br />
          <FormLabel>New Password</FormLabel>
          <Stack
            spacing={0.5}
            sx={{
              "--hue": Math.min(value.length * 10, 120),
            }}
          >
            <Input
              sx={{ padding: "10px" }}
              name="newPassword"
              type="password"
              placeholder="Type in here…"
              startDecorator={<Key />}
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <LinearProgress
              determinate
              size="sm"
              value={Math.min((value.length * 100) / minLength, 100)}
              sx={{
                bgcolor: "background.level3",
                color: "hsl(var(--hue) 80% 40%)",
              }}
            />
            <Typography
              level="body-xs"
              sx={{ alignSelf: "flex-end", color: "hsl(var(--hue) 80% 30%)" }}
            >
              {value.length < 3 && "Very weak"}
              {value.length >= 3 && value.length < 6 && "Weak"}
              {value.length >= 6 && value.length < 10 && "Strong"}
              {value.length >= 10 && "Very strong"}
            </Typography>
          </Stack>
          <FormLabel>Confirm Password</FormLabel>
          <Stack
            spacing={0.5}
            sx={{
              "--hue": Math.min(valueTwo.length * 10, 120),
            }}
          >
            <Input
              sx={{ padding: "10px" }}
              name="confirmPassword"
              type="password"
              placeholder="Type in here…"
              startDecorator={<Key />}
              value={valueTwo}
              onChange={(event) => setValueTwo(event.target.value)}
            />
            <LinearProgress
              determinate
              size="sm"
              value={Math.min((valueTwo.length * 100) / minLength, 100)}
              sx={{
                bgcolor: "background.level3",
                color: "hsl(var(--hue) 80% 40%)",
              }}
            />
            <Typography
              level="body-xs"
              sx={{ alignSelf: "flex-end", color: "hsl(var(--hue) 80% 30%)" }}
            >
              {valueTwo.length < 3 && "Very weak"}
              {valueTwo.length >= 3 && valueTwo.length < 6 && "Weak"}
              {valueTwo.length >= 6 && valueTwo.length < 10 && "Strong"}
              {valueTwo.length >= 10 && "Very strong"}
            </Typography>
          </Stack>
          <br />
          {load && <Button loading>Default</Button>}
          <Button size="lg" color="success" onClick={HandleSubmit}>
            Success
          </Button>
        </FormControl>
      </div>

      {/* Contact End */}
    </div>
  );
};

export default ChangePasword;
