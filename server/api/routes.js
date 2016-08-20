//import mongoose from 'mongoose'
//import passport from 'passport'
//import jwt from 'express-jwt'
//var User = mongoose.model('User')
import express from 'express'
var router = express.Router()
import yelpServ from './yelpService.js'
module.exports = function(app){
  router.get('/api',function(req,res){
    console.log('here')
    console.log(yelpServ.yelpServices.searchYelp('food','Pasadena'))
    res.send('hi')
  })
}
