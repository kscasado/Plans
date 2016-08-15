import express from 'express'
import db from 'mongoose'
const app = express()
db.connect('mongodb://localhost/plans')

app.get('*', function (req, res) {
  res.send('hello')
})

const port = 3000
app.listen(port, () => console.log(`Running on port ${port}`))
