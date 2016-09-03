import express from 'express'
import yelpRouter from './yelp/index.js'
const router = express.Router()
router.use('/yelp', yelpRouter)

export default router
