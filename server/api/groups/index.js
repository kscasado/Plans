/*
  *GET /api/groups/:userid -> returns groups containing the user

*/

import express from 'express'
import controller from './groups.controller'
const router = express.Router()
router.param('groupid', controller.groupParam)
router.get('/:userid', controller.getGroupsContainingUser)
router.post('/:groupid/addMember', controller.addMemberToGroup)
export default router
