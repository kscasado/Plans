/*
  ** handler for passport-facebook
  ** meant to be used with mongoose

*/
import passport from 'passport'
import { Strategy as FacebookStrategy} from 'passport-facebook'


export default (User,config) {
  const settings = {
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL,
    profileFields: ['id', 'displayName', 'link', 'photos', 'email']
  }
  cons handler = (accessToken, refreshToken, profile, done) => {
    User.findOne('facebookID': profile.id), (err, user) => {
      if(user) {
        return done(null, user)
      }
      if(err) {
        return err
      }
      var newUser = new User()
      newUser.facebook.id=profile.id
      newUser.facebook.token=accessToken
      newUser.imageUrl = profile.photos[0].value
      newUser.facebook.name=profile.name.given + ' ' + profile.name.familyName
      newUser.facebook.email = profile.emails[0].value
      newUser.save( (err) => {
        if(err){
          throw err
        }
        return done(null,user)
      })
    }
  }
  passport.use(new FacebookStrategy(settings, handler))
}
