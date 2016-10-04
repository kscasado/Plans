import PlanOption from '../../models/PlanOption.js'
import Plan from '../../models/plans.js'
const controller = {}

controller.getUsersPlans = (req, res) => {
  //  find the plans that are for groups that the user is apart of
  PlanOption.find({})
    .populate('group', null, {members: { $in: [req.params.userid] }})
    .exec((err, plans) => {
      if (err) {
        return res.send(err)
      } else if (!plans) {
        res.send(new Error('No plans for User'))
      } else {
        return res.json(plans)
      }
    })
}
controller.planParam = (req, res, next, id) => {
  Plan.find({'_id': id}, (err, plan) => {
    if (err) {
      res.send(err)
    } else if (!plan) {
      res.send(new Error('can\'t find plan'))
    } else {
      req.plan = plan
      return next()
    }
  })
 }
controller.getPlan = (req, res) => {
  Plan.findOne({'_id': req.params.planID})
    .populate('group')
    .exec((err, plan) => {
    if (err) {
      res.send(err)
    } else if (!plan) {
      res.send(new Error('can\'t find plan'))
    } else {
      res.json(plan)
    }
  })
}

export default controller
