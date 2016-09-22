import express from 'express'
import facebookSetup from './facebook/passport'
import facebookRouter from './facebook'
import User from '../models/users.js'
import config from '../../config/config.json'
facebookSetup(User, config)

const router = express.Router()

router.use('/facebook', facebookRouter)

export default router
