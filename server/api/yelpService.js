import config from '../../config/config.json'
import oauthSignature from 'oauth-signature'
var n = require('nonce')()

import request from 'request'
import qs from 'querystring'
import _ from 'lodash'
/* Function for yelp call
 * ------------------------
 * set_parameters: object with params to search
 * callback: callback(error, response, body)
 */
const yelpController = { }

yelpController.request_yelp = function (setParameters, callback) {
  /* The type of request */
  var httpMethod = 'GET'

  /* The url we are using for the request */
  var url = 'http://api.yelp.com/v2/search'

  /* We can setup default parameters here */
  var defaultParameters = {
    location: 'sf',
    term: 'yelp',
    limit: '1'
  }

  /* We set the require parameters here */
  var requiredParameters = {
    oauth_consumer_key: config.yelp.key,
    oauth_token: config.yelp.token,
    oauth_nonce: n(),
    oauth_timestamp: n().toString().substr(0, 10),
    oauth_signature_method: 'HMAC-SHA1',
    oauth_version: '1.0'
  }
  /* We combine all the parameters in order of importance */
  var parameters = _.assign(defaultParameters, setParameters, requiredParameters)

  /* We set our secrets here */
  var consumerSecret = config.yelp.secret
  var tokenSecret = config.yelp.tokenSecret

  /* Then we call Yelp's Oauth 1.0a server, and it returns a signature */
  /* Note: This signature is only good for 300 seconds after the oauth_timestamp */
  var signature = oauthSignature.generate(httpMethod, url, parameters,
    consumerSecret, tokenSecret, {encodeSignature: false})

  /* We add the signature to the list of paramters */
  parameters.oauth_signature = signature

  /* Then we turn the paramters object, to a query string */
  var paramURL = qs.stringify(parameters)

  /* Add the query string to the url */
  var apiURL = url + '?' + paramURL
  
  /* Then we use request to send make the API Request */
  request(apiURL, function (error, response, body) {
    return (callback(error, response, body))
  })
}
export default yelpController
