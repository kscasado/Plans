/*
  *GET /api/users/:id -> returns user data
  *GET /api/users/me  -> return info for req.user


*/

import express from 'express'
import controller from './user.controller'
const router = express.Router()

router.get('/:id', controller.getUser)
router.get('/me', controller.me)
router.get('/:id/groups', controller.getGroups)
router.get('/:id/plans', controller.getPlans)
export default router
