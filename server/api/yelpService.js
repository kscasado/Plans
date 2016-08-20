import config from '../../config/config.json'

import Yelp from 'yelp'

var yelp = new Yelp({
  consumer_key: config.yelp.key,
  consumer_secret: config.yelp.secret,
  token: config.yelp.token,
  token_secret: config.yelp.tokenSecret
})


  var searchYelp = function(location, Category){
    yelp.search({term: category, location: location })
      .then(function(data){
        console.log('search successful')
        console.log(data)
      })
      .catch(function (err) {
        console.log('search failure')
        console.error(err)
      })
  }
