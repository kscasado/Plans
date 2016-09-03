import authRouter from './auth'
import apiRouter from './api'
export default app => {
  app.use('/auth', authRouter)
  app.use('/api', apiRouter)
}
