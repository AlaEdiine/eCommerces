const jwt = require("jsonwebtoken");
require("dotenv").config();

/************
**
 Create Json Web Token
**
*************/

module.exports.GenerateToken = (result) => {
  return jwt.sign(
    { id: result._id, isAdmin: result.isAdmin, email: result.Email },
    process.env.SECRET_KEY_JWT,
    { expiresIn: "16H" }
  );
};
