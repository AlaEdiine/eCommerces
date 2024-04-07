const jwt = require("jsonwebtoken");
const { createError } = require("../Service/Error");

/************
**
 Verifiy Token
**
*************/

// module.exports.verifyToken = (req, res, next) => {
//   const { authorization } = req.headers;
//    if (!authorization){
//     return next(createError(401, "Unauthorized Token"));
//   }
//     const token = authorization.split(' ')[1]
//     console.log(token);
//   try {
//     if (token) {
//       jwt.verify(token, process.env.SECRET_KEY_JWT, (err, userData) => {
//         if (err) return next(createError(403, "Token is not valid !"));
//         req.infoUser = userData;
//         next();
//       });
//     }
//   } catch (err) {
//     return next(err);
//   }
// };

module.exports.verifyToken = (req, res, next) => {
  const token = req.headers.auth ;
  try {
    if (token === "undefined" || !token) {
      return next(createError(401, "Unthorized Token"));
    }
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY_JWT, (err, userData) => {
        if (err) return next(createError(403, "Token is not valid !"));
        req.infoUser = userData;
        next();
      });
    }
  } catch (err) {
    return next(err);
  }
};

/************
**
 Verifiy Token and Admin
**
*************/

module.exports.verifyTokenAdmin = (req, res, next) => {
  this.verifyToken(req, res, () => {
    if (req.infoUser.isAdmin === true) {
      next();
    } else {
      return next(createError(403, "Not Allowed, Only Admin !"));
    }
  });
};
