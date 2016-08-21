import express from 'express'
import db from 'mongoose'
import routes from './api/routes.js'
import config from '../config/config.json'
import yelpController from './api/yelpService.js'
const app = express()

app.get('/api/searchYelp', function (req, res) {
  yelpController.request_yelp({location: 'Pasadena'}, function (error, response, body){
    // if (error) {
    //   res.end(error)
    // }
    // else {
    //   res.end(response)
    // }
    res.end(JSON.stringify(response))
  })
  res.end()
})

const port = 3000
app.listen(port, () => console.log(`Running on port ${port}`))
