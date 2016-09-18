import mongoose from 'mongoose'

import Group from '../../models/groups.js'

const controller = {}
controller.getGroupsContainingUser = (req, res) => {
  Group.find({ members: req.params.userid}, (err,groups) =>{
    if(err){
      console.log(err)
      return res.send(err)
    }
    else if(!groups){
      return res.send(new Error('No groups with User'))
    }
    else{
      return res.json(groups)
    }
  })
}

export default controller
