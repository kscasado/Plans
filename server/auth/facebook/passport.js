import passport from 'passport'
var FacebookStrategy = require('passport-facebook').Strategy
import auth from '../../config/config.json'
import User from '../server/models/users.js'
import mongoose from 'mongoose'
module.exports = function(passport){
  passport.serializeUser(function(user, done) {
        done(null, user.id);
    })

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        })
    })
  passport.use(new FacebookStrategy({
    clientID: auth.facebookAuth.clientID,
    clientSecret: auth.facebookAuth.clientSecret,
    callbackURL: auth.facebookAuth.callbackURL,
    profileFields: ['id', 'name', 'displayName', 'picture.type(large)', 'hometown', 'profileUrl', 'email']
  },
  function(accessToken, refreshToken, profile, done) {
      process.nextTick(function(){
        User.findOne({'facebook.id': profile.id}, function(err,user){
          if(err){
            return done(err)
          }
          else if(user){
            return done(null, user)
          }
          else{
            console.log(JSON.stringify(profile))
            var newUser = new User()
            newUser.facebook.id=profile.id
            newUser.facebook.token=accessToken
            newUser.facebook.name=profile.name.given + ' ' + profile.name.familyName
            newUser.facebook.email = profile.emails[0].value
            newUser.save(function(err){
              if(err)
                throw err
              return done(null, newUser)
            })
          }
        })
      })
    }

  ))
}
