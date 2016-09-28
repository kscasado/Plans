/*
  Routes: /api/yelp
          /api/users
          /api/groups
          /api/plans
*/
import express from 'express'
import yelpRouter from './yelp/index.js'
import userRouter from './User/index.js'
import groupRouter from './groups/index.js'
import planRouter from './plans/index.js'
const router = express.Router()
router.use('/yelp', yelpRouter)
router.use('/users', userRouter)
router.use('/groups',groupRouter)
router.use('/plans', planRouter)
export default router
