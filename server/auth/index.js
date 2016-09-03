import express from 'express'
import facebookSetup from './facebook/passport'
import facebookRouter from './facebook'
import { User } from '../modes'

facebookSetup(User, config)

const router = express.Router()
router.user('/facebook', facebookRouter)

export default router
