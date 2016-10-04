/*
  *GET /api/groups/:userid -> returns groups containing the user

*/

import express from 'express'
import controller from './groups.controller.js'
const router = express.Router()
router.param('groupid', controller.groupParam)
router.get('/:userid', controller.getGroupsContainingUser)
router.post('/:groupid/addPlanOption', controller.addPlanOption)
router.post('/:groupid/addMember', controller.addMemberToGroup)
router.post('/:groupid/addPlan', controller.addPlanToGroup)
export default router
