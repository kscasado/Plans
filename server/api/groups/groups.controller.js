
import Group from '../../models/groups.js'
import User from '../../models/users.js'
import Plan from '../../models/plans.js'
import PlanOption from '../../models/PlanOption.js'
const controller = {}
//Used to pass on information about the group
//to the reques
controller.groupParam = (req, res, next, id) => {

  var query = Group.findOne({'_id':id})
  query.exec((err, group) => {
    if(err) {
      return next(err)
    }
    if (!group) {
      return next(new Error('can\'t find group'))
    }

    req.group = group
    return next()
  })
}
controller.addPlanOption = (req, res, next) => {
  var business = req.body.business
  var newPlanOption = new PlanOption()
  newPlanOption.address = business.location.address
  newPlanOption.city = business.location.city
  newPlanOption.imageURL = business.image_url
  newPlanOption.url = business.url
  newPlanOption.group = req.group._id
  newPlanOption.title = business.name
  newPlanOption.save((err, PlanOption) => {
    if (err) {
      return next(new Error('can\'t save Plan Option'))
    }
    req.group.planOptions.push(PlanOption)
    req.group.save((err, group) => {
      if (err) { return next(err) }
      if (!group) { return new Error('unable to save group') }
      res.json(PlanOption)
    })
  })
}
controller.getGroupsContainingUser = (req, res) => {
  Group.find({'members': req.params.userid})
      .populate('members')
      .populate('plans')
      .exec((err, groups) => {
        if (err) {
          return res.send(err)
        } else if (!groups) {
          return res.send(new Error('No groups with User'))
        } else {
          return res.json(groups)
        }
      })
}
controller.addMemberToGroup = (req, res) => {
  User.findOne({'facebook.email': req.body.UserEmail})
  .exec((err, user) => {
    if(err){

      res.send(err)
    } else if(!user) {
      console.log('can\'t find user')

      res.status(400).json({
          message: 'user is not found with specified email'
      })

    } else {
      req.group.members.push(user._id)
      req.group.save((err, group) => {
        return res.json(group)
      })
    }
  })
}
controller.addPlanToGroup = (req, res) => {

  var newPlan = new Plan()
  console.log(req.body)
  newPlan.time = req.body.planTime
  newPlan.date = req.body.planDate

  newPlan.group = req.group._id
  console.log('newPlan'+ newPlan)
  newPlan.save((err, plan) => {
    if(err){
      console.log('err: '+ err)
      res.send(err)
    }
    req.group.plans.push(plan)
    req.group.save((err, group) => {
      if(err){
        res.send(err)
      }
      res.json(group)
    })
  })
}

export default controller
