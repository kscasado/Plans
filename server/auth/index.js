import express from 'express'
import facebookSetup from './facebook/passport'
import facebookRouter from './facebook/index.js'
import User from '../models/Users.js'
import config from '../../config/config.json'
facebookSetup(User, config)

const router = express.Router()
router.get('/hi', (req, res) => {
  console.log('hi')
})
router.use('/facebook', facebookRouter)

export default router
