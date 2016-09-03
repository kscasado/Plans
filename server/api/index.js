/*
  Routes: /api/yelp
          /api/users
*/
import express from 'express'
import yelpRouter from './yelp/index.js'
import userRouter from './user'
const router = express.Router()
router.use('/yelp', yelpRouter)
router.use('/users', userRouter)

export default router
