const router = require("express").Router();
const passport = require("passport");


router.get('/success' , (req , res) => {
    if(req.user){
        console.log('user is' +req.user);
        res.status(200).json(req.user)
    }else {
        res.status(401).json({ message : "not authorized"})
    }
})

router.get('/google',
  passport.authenticate('google', { scope:
      [ 'profile' ] }
));

router.get( '/google/callback',
    passport.authenticate( 'google', {
        successRedirect: 'http://localhost:3000/register',
        failureRedirect: 'http://localhost:3000/login'
}));



module.exports = router;