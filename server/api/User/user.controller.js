import User from '../../models/Users.js'
const controller = {}

controller.getUser = (req, res) => {
  User.findOne({'_id': req.params.id}, (err, user) => {
    if (err) {
      res.send(err)
    } else {
      res.json(user)
    }
  })
}
controller.me = (req, res) => {
  res.json(req.user)
}

export default controller
