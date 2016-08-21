import Yelp from 'yelpv3'
import config from '../../config/config.json'
const yelpService = { }

yelpService.init = function () {
  var yelp = new Yelp({
    app_id: config.yelp.v3ID,
    app_secret: config.yelp.v3Secret
  })
  return yelp
}
yelpService.search = function (yelp, loc, Term, Limit) {
  yelp.search({term: Term, location: loc, limit: Limit})
  .then(function (data) {
    console.log('in data')
    console.log(data)
  })
  .catch(function (err) {
    console.log('in err')
    console.error(err)
  })
}

export default yelpService
