/*
  *GET /api/groups/:userid -> returns groups containing the user

*/

import express from 'express'
import controller from './group.controller'
const router = express.Router()
router.get('/:userid', controller.getGroupsContainingUser)

export default router
