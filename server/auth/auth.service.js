import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from '../../config/config.json'
import User from '../models/users.js'
import compose from 'composable-middleware'
const EXPIRE = 60 * 60 * 5 // 5 HOURS
const SECRET = config.secret
const validateJwt = expressJwt({secret: SECRET})
/*
  *Include access_token query param in req.header for validateJwt

*/
export const accessTokenHeader = (req, res, next) => {
  if (req.query && req.query.hasOwnProperty('access_token')) {
    req.headers.authorization = 'Bearer ${req.query.access_token}'
  }
}

/*
** sends req.user to the User instance
** gotten from DB and uses the validateJwt
*/
const populateReqUser = (req, res, next) => {
  User.findOne({_id: req.user._id}, (err, user) => {
    if (err) {
      return res.status(401).end()
    }
    req.user = user
    return next()
  })
}
/*
* Returns middleware function to validate tokens and attach
* request to user
*/
export const isAuthenticated = () => compose()
  .use(compose().use(accessTokenHeader).user(validateJwt))
  .use(populateReqUser)
// Sign Token
export const signToken = id => jwt.sign({_id: id}, SECRET, {expiresIn: EXPIRE})
// Sets toekn to the res.cookie
export const setTokenCookie = (req, res) => {
  console.log('signed token:' + req.user._id)
  if (!req.user) {
    return res.status(404).send('It looks like you aren\'t logged in, please try again.')
  }
  res.cookie('token', signToken(req.user._id))
  return res.redirect('/')
}
