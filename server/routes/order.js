const router = require("express").Router();
const { ADD_ORDER , UPDATE_PRODUIT ,  DELETE_PRODUIT , GET_PRODUIT ,  GET_ALL_ORDER } = require("../authcontrollers/order");
const { verifyTokenAdmin, verifyToken } = require("../utils/verifyToken");

// ADD ORDER
router.post('/ADD', ADD_ORDER)

// UPDATE PRODUIT
router.put('/UPDATE/:id', UPDATE_PRODUIT)

// DELETE PRODUIT
router.delete('/DELETE/:id', DELETE_PRODUIT)

// GET PRODUIT
router.get('/GET/:id', GET_PRODUIT)

// GET ALL PRODUIT
router.get('/GET_ALL', verifyTokenAdmin, GET_ALL_ORDER)


module.exports = router