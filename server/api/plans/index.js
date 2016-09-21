/*
  *GET /api/plans/:userid -> returns groups containing the user

*/

import express from 'express'
import controller from './plan.controller'
const router = express.Router()
router.get('/:userid', controller.getUsersPlans)

export default router
