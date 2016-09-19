
import Group from '../../models/groups.js'

const controller = {}
controller.getGroupsContainingUser = (req, res) => {
  Group.find({'members': req.params.userid})
      .populate('members')//, ['facebook.name', 'facbook.imageUrl'])
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

export default controller
