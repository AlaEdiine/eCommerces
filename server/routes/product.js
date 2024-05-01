const router = require("express").Router();
require("dotenv").config();
const { createError } = require("../Service/Error");
const { GET_ALL , UPDATE_PRODUCT, GET_PRODUCT, COUNT_BY_COLOR, COUNT_BY_PRICE, COUNT_BY_BRAND } = require("../authcontrollers/product");
const { verifyToken } = require("../utils/verifyToken");

// GET ALL PRODUCT
router.get('/GET/:id', GET_PRODUCT)

// GET ALL PRODUCT
router.get('/GET_ALL', GET_ALL)

// UPDATE PRODUCT
router.put('/UPDATE/:id', verifyToken, UPDATE_PRODUCT)

// COUNT_BY_COLOR PRODUCT
router.get('/BY_COLOR', COUNT_BY_COLOR)

// COUNT_BY_PRICE PRODUCT
router.get('/BY_PRICE', COUNT_BY_PRICE)

// COUNT_BY_BRAND PRODUCT
router.get('/BY_BRAND', COUNT_BY_BRAND)

module.exports = router