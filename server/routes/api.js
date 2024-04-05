const router = require("express").Router();
const { payment } = require("../authcontrollers/api");
const { verifyToken } = require("../utils/verifyToken");
// payment
router.post('/sessionCheckout', verifyToken , payment)

module.exports = router
