import Group from '../../models/groups'
import Event from '../../models/events'
const groupController = { }

groupController.addGroup =function (members, name){
  group = new Group(members, name)
  Group.add(group)
}

groupController.addEvent = function (event, group){
  eventAdd = new Event(event)
}
