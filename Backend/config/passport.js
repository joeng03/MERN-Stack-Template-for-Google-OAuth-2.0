var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "282676443526-697jc75jatjrs2rknv7f6e2me5a1bls3.apps.googleusercontent.com",
      clientSecret: "ln6qLHxOZIh7lmlFt6CL65bE",
      callbackURL: "http://localhost:4000/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      var userData = {
        email: profile.emails[0].value,
        name: profile.displayName,
        token: accessToken,
      };
      done(null, userData);
    }
  )
);
