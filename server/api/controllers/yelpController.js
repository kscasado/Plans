import yelpController from '../yelpService.js'
const yelpHandler = { }

yelpHandler.handleGet = function (req, res, next) {
  console.log(req.query.location)
  yelpController.request_yelp({location: req.query.location,term: req.query.searchTerm}, function (error, response, body) {
    if (error) {
      res.end(error)
    }
    res.json(JSON.parse(body).businesses)
  })
}
export default yelpHandler
