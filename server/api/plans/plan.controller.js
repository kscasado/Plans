import PlanOption from '../../models/PlanOption.js'

const controller = {}

controller.getUsersPlans = (req, res) => {
  //  find the plans that are for groups that the user is apart of
  PlanOption.find({})
    .populate('group', null, {members: { $in: [req.params.userid] }})
    .exec((err, plans) => {
      if (err) {
        return res.send(err)
      }
      else if (!plans) {
        res.send(new Error('No plans for User'))
      } else {
        return res.json(plans)
      }
    })
}
export default controller
