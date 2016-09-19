/*
  Routes: /api/yelp
          /api/users
          /api/groups
*/
import express from 'express'
import yelpRouter from './yelp/index.js'
import userRouter from './user'
import groupRouter from './groups'
const router = express.Router()
router.use('/yelp', yelpRouter)
router.use('/users', userRouter)
router.use('/groups',groupRouter)
export default router
