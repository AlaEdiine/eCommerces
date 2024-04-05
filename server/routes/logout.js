const router = require("express").Router();

const { createError } = require("../Service/Error");

router.post('/cookie', (req, res , next) =>{
    try{
        res.clearCookie("Token").send("cookie cleared")
    }
      catch (err){
        return  next(err)
      }
})

module.exports = router;
