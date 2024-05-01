const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const { UUSER } = require("../Models/_user");
const { createError } = require("../Service/Error");
const { GenerateToken } = require("../utils/GenerateToken");

// TODO: Change Password User
module.exports.CHANGE_PASSWORD = async (req, res, next) => {
  try {
    const { currentPassword, value } = req.body;

    // Cheking Current Paasword
    const result = await UUSER.findOne({ Email: req.infoUser.email });
    if (!result) return next(createError(401, "User Not Found"));

    //  // Bcrypt && Compare password
    const Result_Password = result.Password;
    const validPassword = await bcrypt.compare(
      currentPassword,
      Result_Password
    );

    // isTrue : Update Password
    if (validPassword) {
      // Hash Password
      const salt = await bcrypt.genSalt(10);
      HashPassword = await bcrypt.hash(value, salt);
      req.body = {
        Password: HashPassword,
      };
      await UUSER.updateMany(req.body);
      return res.status(200).json("Password updated with success");
    }

    // isFalse
    return next(createError(404, "Wrong Current Password"));
  } catch (err) {
    return next(err);
  }
};
