import PlanOption from '../../models/PlanOption.js'

const controller = {}

controller.getUsersPlans = (req, res) => {
  PlanOption.find({})
    .populate('groups',null, {members: { $in: [req.params.userid]}})
    .exec((err,plans) => {
      if(err){
        return res.send(err)
      }
      else if(!plans) {
        res.send(new Error('No plans for User'))
      } else{
        console.log(plans)
        return res.json(plans)
      }
      console.log(plans)
    })

}
export default controller
