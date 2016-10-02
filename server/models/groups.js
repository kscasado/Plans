import mongoose from 'mongoose'

var GroupSchema = new mongoose.Schema({
  groupname: { type: String},
  members: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
  plans: [{type: mongoose.Schema.Types.ObjectId, ref: 'Plan'}]
})

module.exports = mongoose.model('Groups', GroupSchema)
