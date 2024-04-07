const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const { UUSER } = require("../Models/_user");
const { VERIFYUSER } = require("../Models/verifyUser");
const { createError } = require("../Service/Error");
const { GenerateToken } = require("../utils/GenerateToken");
const crypto = require("crypto");
const SendEmail = require("../utils/SendEmail");

//TODO:
/**----------------------------------------- 
 *  @desc login user
 *  @route /AUTH/LOGIN
 *  @method POST
 *  @access public
 -------------------------------------------*/
module.exports.LOGIN = async (req, res, next) => {
  try {
    let { email, password } = req.body;

    // Cheking User
    const result = await UUSER.findOne({ Email: email });
    if (!result) return next(createError(401, "Email Is Not Exist"));

    // Bcrypt && Compare password
    const Result_Password = result.Password;
    const validPassword = await bcrypt.compare(password, Result_Password);

    // Check Password
    if (!validPassword) {
      return next(createError(401, "Wrong Email or Password"));
    }

    // Verify account if not verified
    if (!result.isAccountVerified) {
      return next(
        createError(
          423,
          "We sent to you an email, please verify your email address"
        )
      );
    }
    const Day = new Date();

    const infoUser = await UUSER.findByIdAndUpdate(
      result._id,
      { $push: { ConnectionHistory: Day.toUTCString() } },
      { new: true }
    )
      .select("-Password")
      .select("-Email");

    const token = GenerateToken(result);
    return res.status(200).json({infoUser ,token})
    // .cookie("Token", token, { httpOnly: true, maxAge: 1000 * 60 * 15, sameSite: "strict" , secure: true})
    // .cookie("Token", token)
  } catch (err) {
    return next(err);
  }
};

//TODO:
/**----------------------------------------- 
 *  @desc verify user account
 *  @route /AUTH/:userId/VERIFY/:tokens
 *  @method GET
 *  @access public
 -------------------------------------------*/
module.exports.verifyUserAccountCtrl = async (req, res, next) => {
  try {
    const user = await UUSER.findById(req.params.userId).select("-Password");
    console.log(user);
    // Check user exist or not
    if (!user) {
      return next(createError(400, "Invalid link"));
    }
    // Check user and tokens correct or not
    const verifyUser = await VERIFYUSER.findOne({
      userId: user._id,
      tokens: req.params.tokens,
    });

    if (!verifyUser) {
      return next(createError(400, "Invalid link"));
    }

    // Change stattus isAccountVerified To True
    user.isAccountVerified = true;
    await user.save();
    // Remove
    await verifyUser.remove();

    res.status(200).json({ message: "Your account verified" });
  } catch (err) {
    return next(err);
  }
};

//TODO:
/**----------------------------------------- 
 *  @desc create link reset password and send to email
 *  @route /AUTH/PASSWORD/CREATELINK
 *  @method POST
 *  @access public
 -------------------------------------------*/
module.exports.CreateLinkresetPasswordCtrl = async (req, res, next) => {
  try {
    const user = await UUSER.findOne({ Email: req.body.email });

    // Check user exist or not
    if (!user) {
      return next(createError(404, "User does not exist !"));
    }

    // Check user verified account
    if (!user.isAccountVerified) {
      return next(createError(404, "Your account is not verified !"));
    }

    // Create token validation user and save it to DB
    const verifyUser = new VERIFYUSER({
      userId: user._id,
      tokens: crypto.randomBytes(32).toString("hex"),
      description: "Reset Password",
    });
    await verifyUser.save();

    // Making the link
    const link = `http://localhost:3000/resetPassword/${user._id}/${verifyUser.tokens}`;

    // Putting the link into an html template
    const htmlTemplate = `<a href="${link}">Reset Password</a>`;

    // Sending email in the user
    await SendEmail(user.Email, "Reset Password", htmlTemplate);

    // Response to the client
    res.status(200).json({
      message:
        "Password reset link sent to your email, please check your inbox",
    });
  } catch (err) {
    return next(err);
  }
};

//TODO:
/**----------------------------------------- 
 *  @desc verify link forget password
 *  @route /AUTH/RESETPASSWORD/:userId/:tokens
 *  @method GET
 *  @access public
 -------------------------------------------*/
module.exports.getResetPasswordCtrl = async (req, res, next) => {
  try {
    const user = await UUSER.findById(req.params.userId);

    // Check user exist or not
    if (!user) {
      return next(createError(400, "Invalid link"));
    }

    // Check user and tokens correct or not
    const verifyUser = await VERIFYUSER.findOne({
      userId: user._id,
      tokens: req.params.tokens,
    });

    if (!verifyUser) {
      return next(createError(400, "Invalid link"));
    }

    await verifyUser.remove();

    res.status(200).json({ message: "Valid URL" });
  } catch (err) {
    return next(err);
  }
};

//TODO:
/**----------------------------------------- 
 *  @desc new password
 *  @route /AUTH/RESETPASSWORD/NEWPASSWORD
 *  @method POST
 *  @access public
 -------------------------------------------*/
module.exports.newPasswordCtrl = async (req, res, next) => {
  try {
    const user = await UUSER.findById(req.params.userId);

    // Check user exist or not
    if (!user) {
      return next(createError(400, "Invalid link"));
    }

    res.status(200).json({ message: "Valid URL" });
  } catch (err) {
    return next(err);
  }
};
