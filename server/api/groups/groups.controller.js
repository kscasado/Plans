
import Group from '../../models/groups.js'
import User from '../../models/users.js'
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
      return next(new Error('can\'t find user'))
    }
    req.group = group
    return next()
  })
}

controller.getGroupsContainingUser = (req, res) => {
  Group.find({'members': req.params.userid})
      .populate('members')
      .populate('planOptions')
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

export default controller
