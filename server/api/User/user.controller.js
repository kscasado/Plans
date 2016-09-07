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
controller.getGroups = (req, res) => {
  console.log('before the error')
  User.findOne({'_id': req.params.id}, 'groups', (err, user) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      console.log(user)
      console.log(user.groups.length)
      res.json(user.groups)
    }
  })
}
controller.getPlans = (req, res) => {
  User.findOne({'_id': req.params.id}, 'plans', (err, user) => {
    if (err) {
      res.send(err)
    } else {
      console.log(user)
      console.log(user.plans)
      res.json(user.plans)
    }
  })
}

export default controller
