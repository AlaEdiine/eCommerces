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
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Message from "@/component/Snackbar/Message"
import API from "@/api/axios";
import { useNavigate } from "react-router";
const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
const EditProfile = () => {
    const valueContext = useContext(ShopContext);
    const [showHistoryConnection , setshowHistoryConnection] = useState(false)
    const navigate = useNavigate()
    const [form, setform] = useState({
        FirstName : valueContext.user?.FirstName,
        LastName : valueContext.user?.LastName,
        Mobile : valueContext.user?.Mobile,
        Rue : valueContext.user?.Address?.Rue,
        City : valueContext.user?.Address?.City,
        ZIPcode : valueContext.user?.Address?.ZIPcode,
    });
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
      setform({ ...form, [e.target.name]: e.target.value });
    };

        // HandleChange des Images
        const handleFileInputChange = (e) => {
            setFile(e.target.files[0]);
          };

    // useEffect(()=> {
    //     window.scrollTo(0,280)
    //   })

      const HandleValidation = () => {
        const myVar = undefined;
        const { FirstName, LastName, Mobile, Rue, City, ZIPcode } = form;
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
        }  else if (Mobile === myVar) {
          Message("Mobile number is required", "error");
          return false;
        } else if (Mobile.length < 5) {
        Message("Mobile number should be greater 5 numbers", "error");
        return false;
      }  else if (Rue === myVar) {
        Message("Rue is required", "error");
        return false;
      }  else if (Rue.length <= 5) {
          Message("Rue should be greater 6 characters", "error");
          return false;
        }  else if (City === myVar) {
          Message("City is required", "error");
          return false;
        } else if (City.length <= 2) {
          Message("City should be greater 3 characters", "error");
          return false;
        }  else if (ZIPcode === myVar) {
        Message("ZIPcode is required", "error");
        return false;
      } else if (ZIPcode.length <= 2) {
        Message("ZIPcode should be greater 3 numbers", "error");
        return false;
      } 
        return true;
      };

      const uploadPhoto = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", file);
        if (file !== null) {
            setLoading(true);
            try {
             const {data} = await API.put(`/USER/UPDATE-PHOTO/${valueContext.user._id}`, formData )
                setFile(null)
                setLoading(false);
                valueContext.setUser(data);
                window.scrollTo(0,0)
                return navigate('/profile')
            } catch (error) {
              setLoading(false);
              console.log(error);
              return Message(error.response.data.message, "error");
            } finally {
              return setLoading(false);
            }
          } else {
            setLoading(false);
            return Message("Photo is required", "error");
          }
        
      }

    const handleSubmit = async (e) => {
      e.preventDefault();   
      if (HandleValidation()) {
        setLoading(true);
        try {
         const {data} = await API.put(`/USER/UPDATE/${valueContext.user._id}`, form)
            setFile(null)
            setLoading(false);
            valueContext.setUser(data);
            window.scrollTo(0,0)
            return navigate('/profile')
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
      <div className="main">
        <SnackbarProvider autoHideDuration={2500} />
        <form onSubmit={handleSubmit} className="form-profile">
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
                    src={file ? URL.createObjectURL(file) : `http://localhost:3001/images/${valueContext.user?.Photo}`}
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >

                <Button sx={{bgcolor:'#3b82f680', height:'40px'}} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
 <CloudUploadIcon sx={{marginRight:'5px'}} /> UPLOAD FILE
  <VisuallyHiddenInput type="file"  name="photo"
                          id="file"
                          onChange={handleFileInputChange} />
</Button>
                </Box>
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
                    <div>
                      <Typography level="body-xs" fontWeight="lg">
                        Connected
                      </Typography>
                      <Typography fontWeight="lg">{valueContext.user?.ConnectionHistory?.length}</Typography>
                    </div>
                    <div>
                      <Typography level="body-xs" fontWeight="lg">
                        Followers
                      </Typography>
                      <Typography fontWeight="lg">980</Typography>
                    </div>
                    <div>
                      <Typography level="body-xs" fontWeight="lg">
                        Order Recommended
                      </Typography>
                      <Typography fontWeight="lg">4</Typography>
                    </div>
                  </Sheet>
                  <Box
                    sx={{ display: "flex", gap: 1.5, "& > button": { flex: 1 } }}
                  >
                    <Button variant="outlined" color="neutral">
                      Edit
                    </Button>
                    <Button variant="solid" color="primary" onClick={uploadPhoto}>
                     Save Change Photo
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </div>
          <div className="block-info">
            <FormControl>
              <FormLabel>First Name</FormLabel>
              <Input className="inputFormlabel"
                 name="FirstName" placeholder={valueContext.user?.FirstName} autoFocus
                 onChange={(e) => handleChange(e)} /> <br />
              <FormLabel>Last Name</FormLabel>
              <Input className="inputFormlabel" 
                             name="LastName" placeholder={valueContext.user?.LastName}
                             onChange={(e) => handleChange(e)} /> <br />
              <FormLabel>Email</FormLabel>
              <Input className="inputFormlabel" placeholder="Your email"
                  name="Email" value={valueContext.user?.Email} disabled /> <br />
              <FormLabel>Number Phone</FormLabel>
              <Input
                className="inputFormlabel"
                placeholder={valueContext.user?.Mobile}
                // placeholder="Ex 00216 9914 9926"
                name="Mobile"
                type="number"
                onChange={(e) => handleChange(e)} /> <br /> 
              <FormControl>
                <FormLabel>Address :</FormLabel>
                <div className="adresse-input-profile">
                  <Input className="inputFormadresse"      
                        name="Rue" placeholder={valueContext.user?.Address?.Rue}
                onChange={(e) => handleChange(e)} />
                  <Input className="inputFormadresse"  
                            name="City"  placeholder={valueContext.user?.Address?.City}
                onChange={(e) => handleChange(e)} />
                  <Input className="inputFormadresse"    
                         name="ZIPcode" type="number"  placeholder={valueContext.user?.Address?.ZIPcode}
                onChange={(e) => handleChange(e)} />
                </div>
              </FormControl>
              <br /> <br />
              <Button type="submit" size="lg" color="success">
              {loading ?
              <Button loading variant="plain">
                Default
              </Button> 
              :
              'Save'
              }
              </Button>
            </FormControl>
          </div>
        </div>
        {/* Profile End */}
        </form>
      </div>
    );
  };

export default EditProfile