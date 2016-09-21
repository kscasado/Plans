import User from '../../models/Users.js'
import Group from '../../models/groups.js'
import Plans from '../../models/plans.js'
import PlanOption from '../../models/PlanOption.js'
const controller = {}
//This is used to pass on information about the
//user to the request
controller.userParam = (req,res,next,id) => {
    var query = User.findOne({'_id':id})
    query.exec((err, user) => {
      if(err){ return next(err)}
      if(!user){
        return next(new Error('can\'t find user'))
      }
      req.user = user
      return next()
    })
}
//Used to pass on information about the group
//to the reques
controller.groupParam = (req,res,next,id) => {
  var query = Group.findOne({'_id':id})
  query.exec((err,group) => {
    if(err){ return next(err)}
    if(!user){
      return next(new Error('can\'t find user'))
    }
    req.group = group
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
//get all the information about the user
controller.me = (req, res) => {
  res.json(req.user)
}
controller.getGroups = (req, res) => {

  User.findOne({'_id': req.user._id})
    .populate('groups')
    .populate('groups.members')
    .exec((err, user) => {
    if (err) {
      console.log(err)
      res.send(err)
    } else {
      res.json(user.groups)
    }
  })
}
controller.getPlans = (req, res) => {
  User.findOne({'_id': req.params.id}, 'planOptions', (err, user) => {
    if (err) {
      res.send(err)
    } else {
      res.json(user.plans)
    }
  })
}
//Add a new Plan Option and add references to user and gorup

controller.addPlanOption = (req, res) => {
  console.log(req.body)
  var newPlan = new Plan()
  var business = req.body.business
  var newPlanOption = new PlanOption();
  newPlanOption.address = business.location.address
  newPlanOption.city = business.location.city
  newPlanOption.imageUrl = business.imageUrl
  newPlanOption.url = business.url
  newPlanOption.group = req.group._id
  newPlanOption.save((err,plaOption) => {
    if(err){
      return next (new Error('can\'t find user'))
    }
    req.user.planOptions.push(planOption)
    req.group.planOptions.push(planOption)
    res.json(planOption)
  })
}
controller.addGroup = (req, res) => {
  var newGroup = new Group()

  newGroup.groupname = req.body.groupName
  newGroup.members = req.body.memberIDs
  newGroup.save((err, group) => {
    req.user.groups.push(group)
    req.user.save((err, user) =>{
      if(err){ return next(err)}

      res.json(group)
    })
  })
}

export default controller
