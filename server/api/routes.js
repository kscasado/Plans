import express from 'express'
var router = express.Router()
import yelpServ from './yelpService.js'
module.exports = function (app) {
  router.get('/api', function (req, res) {
    console.log('here')
    console.log(yelpServ.searchYelp('food', 'Pasadena'))
    res.send('hi')
  })
}
