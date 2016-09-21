import mongoose from 'mongoose'

var GroupSchema = new mongoose.Schema({
  groupname: { type: String},
  members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  planOptions: [{type: mongoose.Schema.Types.ObjectId, ref: 'PlanOption'}]
})

module.exports = mongoose.model('Groups', GroupSchema)
