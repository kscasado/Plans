/*
  *GET /api/plans/:userid -> returns groups containing the user

*/

import express from 'express'
import controller from './plan.controller.js'
const router = express.Router()
router.param('planID', controller.planParam)
router.get('/users/:userid', controller.getUsersPlans)
router.get('/:planID', controller.getPlan)

export default router
