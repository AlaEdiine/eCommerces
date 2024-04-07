const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser"); // cookies
const { UUSER } = require("../Models/_user");
const { VERIFYUSER } = require("../Models/verifyUser");
const { createError } = require("../Service/Error");
const { GenerateToken } = require("../utils/GenerateToken");
const crypto = require("crypto");
const SendEmail = require("../utils/SendEmail");
require("dotenv").config();

//TODO:
/**----------------------------------------- 
 *  @desc register nouveau user
 *  @route /USER/AJOUTER
 *  @method POST
 *  @access public
 -------------------------------------------*/

module.exports.AJOUTER_USER = async (req, res, next) => {
  try {
    Data = req.body.form;
    // check User exist or not
    const result = await UUSER.findOne({ Email: Data.Email });
    if (result) return next(createError(401, "This Email is Exist"));

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    HashPassword = await bcrypt.hash(Data.Password, salt);
    const dataForm = { ...Data, Password: HashPassword};

    // Save in DB
    const newuser = new UUSER(dataForm);
    await newuser.save();

    // Create token validation user and save it to DB
    const verifyUser = new VERIFYUSER({
      userId: newuser._id,
      tokens: crypto.randomBytes(32).toString("hex"),
      description : "Verify Account"
    });
    await verifyUser.save();

    // Making the link
    const link = `http://localhost:3000/user/${newuser._id}/verify/${verifyUser.tokens}`;

    // Putting the link into an html template
    const htmlTemplate = `<div>
      <p>Click in the link below to verify your email </p>
      <a href="${link}">Verify</a>
    </div>`;

    // Sending email in the user
    await SendEmail(newuser.Email, "Verify your email", htmlTemplate);

    // Response to the client
    res
      .status(201)
      .json({
        message: "We sent to you an email, please verify your email address",
      });

    const token = GenerateToken(newuser);

    return res
      // .cookie("Token", token, { httpOnly: true, secure: true })
      .status(200)
      .json(newuser);
  } catch (err) {
    return next(err);
  }
};


//TODO: UPDATE USER PHOTO
module.exports.UPDATE_USER_PHOTO = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No File Provided" });
    }
    const result = await UUSER.findByIdAndUpdate(
      req.params.id,
      { Photo :req.file.filename },
      { new: true }
    ).select("-Password");
    if (!result) return next(createError(401, "User not found"));
    return res.status(200).send(result);
  } catch (err) {
    return next(err);  
  }
};


//TODO: UPDATE USER
module.exports.UPDATE_USER = async (req, res, next) => {
  console.log(req.body);
  const form = {
    FirstName : req.body.FirstName,
    LastName : req.body.LastName,
    Mobile : req.body.Mobile,
    Address: {
        Rue : req.body.Rue,
        City : req.body.City,
        ZIPcode : req.body.ZIPcode,
    }
  }
  try {
    const result = await UUSER.findByIdAndUpdate(
      req.params.id,
      { $set: form },
      { new: true }
    ).select("-Password");
    if (!result) return next(createError(401, "User not found"));
    return res.status(200).send(result);
  } catch (err) {
    return next(err);
  }
};

//TODO: UPDATE USER
module.exports.DELETE_USER = async (req, res, next) => {
  try {
    console.log(req.params);
    const result = await USER.findByIdAndDelete({ _id: req.params.id });
    if (!result) return next(createError(401, "Error Search"));
    return res.status(200).send("Succes deleted ouvrier");
  } catch (err) {
    return next(err);
  }
};

//TODO: GET USER
module.exports.GET_USER = async (req, res, next) => {
  const token = req.headers ;
  try {
    // const result = await UUSER.findById({ _id: req.infoUser.id }).select(
      const result = await UUSER.findById({ _id: "65ff8176e3e9e84934effc9b" }).select(
        "-Password"
        );
        if (!result) return next(createError(401, "user not found"));
        // return res.status(200).send(result);
        jwt.verify(token, process.env.SECRET_KEY_JWT, (err, userData) => {
          return res.status(200).json(userData , token);
        });
        } catch (err) {
          return next(err);
        }
};

//TODO: GET USER BY ID
module.exports.GET_USER_BY_ID = async (req, res, next) => {
  console.log(req.infoUser);
  try {
    const result = await UUSER.findById({ _id: req.infoUser.id });
    if (!result) return next(createError(401, "Error Search"));
    console.log(result);
    return res.status(200).send(result);
  } catch (err) {
    return next(err);
  }
};

//TODO: GET ALL USER
module.exports.GET_ALL_USER = async (req, res, next) => {
  try {
    console.log(req.params);
    const result = await USER.find();
    if (!result) return next(createError(401, "Error Search"));
    return res.status(200).send(result);
  } catch (err) {
    return next(err);
  }
};
//TODO: GET ALL USER
module.exports.TEST = async (req, res, next) => {
  try {
    const token = "fgRYTYdfge-rd`[{#";
    return res.status(200).json(token);
  } catch (err) {
    return next(err);
  }
};
