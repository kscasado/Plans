import authRouter from './auth'
import userRouter from './api/user'
import yelpRouter from './yelp'
export default app => {
  app.use('/auth', authRouter)
  app.use('/api/users', userRouter)
  app.user('/api/yelp', yelpRouter)
}
