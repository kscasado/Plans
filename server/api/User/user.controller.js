import User from '../../models/Users.js'
import Group from '../../models/groups.js'
import Plans from '../../models/plans.js'
const controller = {}

controller.userParam = (req,res,next,id) => {
  console.log(id)

  var query = User.findOne({'_id':id})
    query.exec((err, user) => {
      if(err){ return next(err)}
      if(!user){
        console.log('in userParam')
        return next(new Error('can\'t find user'))
      }
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
  var newEvent = new Plan(req.body)
  newEvent.save((err, plan) => {
    if(err){ return next(err)}
    req.user.events.push(plan)
    req.user.save((err, user) =>{
      if(err){ return next(err)}
      res.json(plan)
    })
  })
}
controller.addGroup = (req, res) => {
  var newGroup = new Group()
  console.log(req.body)
  newGroup.groupname = req.body.groupName
  newGroup.members = req.body.memberIDs
  console.log(newGroup.groupName)
  newGroup.save((err, group) => {
    console.log(group)
    req.user.groups.push(group)
    req.user.save((err, user) =>{
      if(err){ return next(err)}
      console.log('in here')
      console.log(group)
      res.json(group)
    })
  })
}

export default controller
