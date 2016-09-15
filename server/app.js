import express from 'express'
import db from 'mongoose'
import path from 'path'
import webpack from 'webpack'
import bodyParser from 'body-parser'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackconfig from '../webpack.config.js'

import authRouter from './auth'
import apiRouter from './api'
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
db.connect('mongodb://localhost/plans')
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api', apiRouter)
app.use('/auth', authRouter)
app.use(middleware)
app.use(webpackHotMiddleware(compiler))
app.get('*', function response (req, res) {
  res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../dist/index.html')))
  res.end()
})

const port = 3000
app.listen(port, () => console.log(`Running on port ${port}`))
