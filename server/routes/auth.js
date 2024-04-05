const router = require("express").Router();
const passport = require("passport")
const {
  LOGIN,
  verifyUserAccountCtrl,
  CreateLinkresetPasswordCtrl,
  getResetPasswordCtrl,
  newPasswordCtrl,
} = require("../authcontrollers/auth");

// AUTH/LOGIN
router.post("/Login", LOGIN);

// AUTH/:userId/VERIFY/:tokens
router.get("/:userId/VERIFY/:tokens", verifyUserAccountCtrl);

// AUTH/PASSWORD/CREATELINK
router.post("/PASSWORD/CREATELINK", CreateLinkresetPasswordCtrl);

// AUTH/RESETPASSWORD
router.get("/RESETPASSWORD/:userId/:tokens", getResetPasswordCtrl);

// AUTH/RESETPASSWORD/NEWPASSWORD
router.get("/RESETPASSWORD/NEWPASSWORD", newPasswordCtrl);


module.exports = router;
