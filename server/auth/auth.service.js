import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from '../../config/config.json'
import { User } from '../models'

const EXPIRE = 60*60*5 //5 HOURS
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
  User.findOne({_id: req.user._id})
    .then(user)

}
