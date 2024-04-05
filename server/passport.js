const GoogleStrategy = require("passport-google-oauth20").Strategy;    
const passport = require("passport");
const { UUSER } = require("./Models/_user");

passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:3001/auth/google/callback",
        scope: ["profile" , "email"],
      },
     async function (accessToken, refreshToken, profile, callback) {
        const userResult =  await UUSER.findOne({ googleId : profile.id })
          if (userResult) {
            return callback(null , userResult)
          }
          else{
            const newUser = await UUSER.create({
              googleId : profile.id,
              FirstName: profile.name.givenName,
              LastName: profile.name.familyName,
              Photo: profile.photos[0].value,
              Email: profile.emails[0].value,
              isAccountVerified: true,
              secret : accessToken
            });
            // newUser.save();
           return callback(null , newUser)
          }
        }))



passport.serializeUser((userResult, done) => {
  done(null, userResult);
});

passport.deserializeUser( async (userResult, done) => {
  const result =  await UUSER.findOne({ googleId: userResult.id })
    done(null, userResult);
  });