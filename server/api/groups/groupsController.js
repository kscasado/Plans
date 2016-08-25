import mongoose from 'mongoose'

var Group = mongoose.model('Group')
var Plan = mongoose.model('plan')


const groupController = { }

groupController.addGroup = function (members, name) {
  var group = new Group (members, name)
  Group.add(group)
}

groupController.addplan = function (plan, group) {
  var planAdd = new Plan(plan)
  // find group, add plan to the group
  Group.fondOne({groupname: group}, function (err, group) {
    if (err) {
      console.error(err)
    }
    else {
      Group.findByIdAndUpdate(group._id,
      {$addToSet: {'plans': planAdd}},
      {safe: true, upsert: true, new: true},
      function (err, model) {
        if (err) {
          console.error(err)
        }
        return 200
      })
    }
  })
}
