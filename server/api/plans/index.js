/*
  *GET /api/plans/:userid -> returns groups containing the user
  *GET /api/plans/:planID -> returns all information about the plan
  *POST /api/plans/:planID/addPlanOption -> adds a plan option
*/

import express from 'express'
import controller from './plan.controller.js'
const router = express.Router()
router.param('planID', controller.planParam)
router.get('/:userid', controller.getUsersPlans)
router.get('/:planID/getPlan', controller.getPlan)
router.post('/:planID/addPlanOption', controller.addPlanOption)
export default router
