import yelpController from './yelpService.js'
const yelpHandler = { }

yelpHandler.handleGet = function (req, res, next) {
  if(!req.query.isLatLong){
    yelpController.request_yelp({location: req.query.location,term: req.query.term}, function (error, response, body) {
    if (error) {

      res.end(error)
    }
    res.json(JSON.parse(body).businesses)
  })
}
else{
  yelpController.request_yelp({location: req.query.location,
      ll:(req.query.location.latitude, req.query.location.longitude)}, function (error, response, body) {
    if (error) {

      res.end(error)
    }
    res.json(JSON.parse(body).businesses)
  })
}
}
export default yelpHandler
