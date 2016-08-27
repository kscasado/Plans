import express from 'express'
var router = express.Router()
import yelpServ from './yelpService.js'
module.exports = function (app) {
  router.get('/api', function (req, res) {
    res.send(yelpServ.searchYelp('food', 'CA').total)
  })
}
