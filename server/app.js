import express from 'express'
import db from 'mongoose'
import path from 'path'
import config from '../config/config.json'
import webpack from 'webpack'
import bodyParser from 'body-parser'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackconfig from '../webpack.config.js'
import compression from 'compression'
import authRouter from './auth'
import apiRouter from './api'
const isDeveloping = process.env.NODE_ENV !== 'production'
  console.log(isDeveloping)

  const compiler = webpack(webpackconfig)

  const middleware = webpackMiddleware(compiler, {
    publicPath: webpackconfig.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
    })
    const app = express()
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    app.use('/api', apiRouter)
    app.use('/auth', authRouter)
if(isDeveloping){
    //db.connect(config.db.url)
    db.connect('mongodb://localhost/plans')
    app.use(middleware)
    app.use(webpackHotMiddleware(compiler))
    app.get('*', function response (req, res) {
      res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../dist/index.html')))
      res.end()
    })
 }
else{
  db.connect(config.db.url)
  app.use(compression())
  app.use(express.static(path.join(__dirname, '../dist')))
  app.get('*', function response (req, res) {
        res.sendFile(path.join(__dirname, '../dist/index.html'))
      })
}

const port = 3000
app.listen(port, () => console.log(`Running on port ${port}`))
