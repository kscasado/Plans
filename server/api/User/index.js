/*
  *GET /api/users/:id -> returns user data
  *GET /api/users/me  -> return info for req.user
  *GET /api/users/:id/groups -> return the list of groups the user is in
  *GET /api/users/:id/events -> return the list of events the user has
  *POST /api/users/:id/addEvent -> add the event to the users list
  *POST /api/users/:id/addGroup -> add a group to the users list
  *
*/

import express from 'express'
import controller from './user.controller'
const router = express.Router()
router.param('id', controller.userParam)
router.get('/:id', controller.getUser)
router.get('/me', controller.me)
router.get('/:id/groups', controller.getGroups)
router.get('/:id/plans', controller.getPlans)
router.post('/:id/addEvent', controller.addEvent)
router.post('/:id/addGroup', controller.addGroup)
export default router
