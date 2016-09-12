import User from '../../models/Users.js'
import Groups from '../../models/Groups.js'
import Plans from '../../models/plans.js'
const controller = {}

controller.userParam = (req,res,next,id) => {
  var query = User.findById(id)
  query.exec((err, user){
    if(err){ return next(err)}
    if(!user){return next(new Error('can\'t find user'))}
    req.user = user
    return next()
  })
}
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
  User.findOne({'_id': req.user._id}, 'groups', (err, user) => {
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
controller.addEvent = (req, res) => {
  plan.findOne(({'_id':req.params.id}))
}
controller.addGroup = (req, res) => {

}

export default controller
