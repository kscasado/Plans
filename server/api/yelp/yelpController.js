import yelpController from './yelpService.js'
const yelpHandler = { }

yelpHandler.handleGet = function (req, res, next) {
  //check to see if the user is including the latitude and longitude
  if (!req.query.isLatLong) {
    yelpController.request_yelp({location: req.query.location, term: req.query.term}, function (error, response, body) {
    if (error) {
      res.end(error)
    }
      res.json(JSON.parse(body).businesses)
    })
} else {
  yelpController.request_yelp({location: req.query.location,
      ll:(req.query.location.latitude, req.query.location.longitude)},
        (error, response, body) => {
    if (error) {
      res.end(error)
    }
      res.json(JSON.parse(body).businesses)
    })
  }
}
export default yelpHandler
