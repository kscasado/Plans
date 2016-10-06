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

  var query = Plan.findOne({'_id': id})
  query.exec((err, plan) => {
    if (err) {
      res.send(err)
    } else if (!plan) {
      res.send(new Error('can\'t find plan'))
    } else {
      console.log('planparam:'+ plan)
      console.log('planparam id:' + plan.toObject()._id)
      console.log('planparam group'+ plan.group)
      console.log('planparam options' + plan.options)
      req.plan = plan
      console.log('req.plan' + req.plan)
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
controller.addPlanOption = (req, res) => {
  var business = req.body.business
  console.log('req.plan'+req.plan._id)
  var newPlanOption = new PlanOption()
  newPlanOption.address = business.location.address
  newPlanOption.city = business.location.city
  newPlanOption.imageURL = business.image_url
  newPlanOption.url = business.url
  newPlanOption.title = business.name
  newPlanOption.plan = req.plan._id
  console.log('newPlan:'+ newPlanOption)
  newPlanOption.save((err, PlanOption) => {
    console.log('passed save:'+PlanOption)
    if (err) {
      return next(new Error('can\'t save Plan Option'))
    }
    req.plan.options.push(PlanOption)
    req.plan.save((err, plan) => {
      if (err) { return res.send(err) }
      if (!plan) { return new Error('unable to save group') }
      res.json(PlanOption)
    })
  })
}

export default controller
