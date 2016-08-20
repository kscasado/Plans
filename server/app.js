import express from 'express'
 import db from 'mongoose'
import yelp from 'yelp'
import routes from './api/routes.js'
import yelpServ from './api/yelpService.js'
const app = express()
db.connect('mongodb://localhost/plans')
//require('./api/routes')(app)
// app.get('*', function (req, res) {
//   res.send('hello')
// })

// app.get('/api/handleYelpOauth',function(req,res) {
//   console.log(req.query);
//   res.end(JSON.stringify(req.query, null, 2))
// })
app.get('/api/searchYelp',function(req,res){
  console.log('here')
  console.log(yelpServ.searchYelp('food','Pasadena'))
  res.send('hi')
})

const port = 3000
app.listen(port, () => console.log(`Running on port ${port}`))
