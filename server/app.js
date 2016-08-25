import express from 'express'
import db from 'mongoose'
import routes from './api/routes.js'
import config from '../config/config.json'
import yelpController from './api/yelpService.js'
import path from 'path'
import webpack from 'webpack'
import webpackMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackconfig from '../webpack.config.js'

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

app.get('/api/searchYelp', function (req, res) {
  yelpController.request_yelp({location: 'Pasadena'}, function (error, response, body) {
    if (error) {
      res.end(error)
    }
    res.json(response.body)
  })
})
app.use(middleware)
app.use(webpackHotMiddleware(compiler))
app.get('*', function response (req, res) {
  res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')))
  res.end()
})
const port = 3000
app.listen(port, () => console.log(`Running on port ${port}`))
