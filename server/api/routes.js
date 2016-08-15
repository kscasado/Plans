import mongoose from 'mongoose'
import passport from 'passport'
import jwt from 'express-jwt'
var User = mongoose.model('User')

module.exports = function(app){
  var auth = jwt({secret: 'SECRET' , userProperty: 'payload'})
  
}
