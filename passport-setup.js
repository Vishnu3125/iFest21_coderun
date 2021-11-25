const passport = require('passport');
const mongoose = require('mongoose');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "987779556626-l8iqqbtjh0oiogd323jfliceh9uo862t.apps.googleusercontent.com",
    clientSecret: "rbOvoVoBRji_UmTpI-YYD93k",
    callbackURL: "https://infinite-springs-51898.herokuapp.com/google/callback",
    passReqToCallback: true
  },
  function(request, accessToken, refreshToken, profile, done) {
    // console.log(profile.email)
    const newUser = {
      googleId: profile.id,
      firstname:profile.name.givenName,
      lastname:profile.name.familyName,
      email:profile.email
    }
    // console.log(newUser);
    return done(null, profile);
      }
));

// -----------------------------for Linkdin---------------------------------------
passport.use(new LinkedInStrategy({
  clientID: "86dceq0ay51t6j",
  clientSecret: "iM4oUqScur9In2zP",
  callbackURL: "https://infinite-springs-51898.herokuapp.com/linkedin/callback",
  // scope: ['r_emailaddress', 'r_liteprofile'],
}, function (accessToken, refreshToken, profile, done) {
  const newUser = {
    LinkedinId: profile.id,
    firstname:profile.name.givenName,
    lastname:profile.name.familyName,
  }
//   console.log(newUser);
  return done(null, profile);
}
));

// -----------------------------for Linkdin---------------------------------------
passport.use(new GithubStrategy({
  clientID: "be48a2bcda57ee2d6248",
  clientSecret: "6e9211669afe6df831c4418547ed75afc5e4b7b8",
  callbackURL: "https://infinite-springs-51898.herokuapp.com/github/callback",
}, function (accessToken, refreshToken, profile, done) {
  const newUser = {
    GithubId: profile.id,
    Name:profile.displayName,
    Username:profile.username,
  }
//   console.log(newUser);
  return done(null, profile);
}
));
