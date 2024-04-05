const router = require("express").Router();
const { CHANGE_PASSWORD } = require("../authcontrollers/setting");
const { verifyTokenAdmin, verifyToken } = require("../utils/verifyToken");


router.post('/CHANGE_PASSWORD'  , verifyToken , CHANGE_PASSWORD)

module.exports = router;