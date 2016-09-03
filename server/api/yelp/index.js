/*
  Routes: /api/yelp/search

*/

import express from 'express'
import yelpHandler from './yelpController.js'
const router = express.Router()
router.get('/search', yelpHandler.handleGet)

export default router
