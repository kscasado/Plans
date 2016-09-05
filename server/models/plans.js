import mongoose from 'mongoose'
import group from 'Groups'
var PlanSchema = new mongoose.Schema({
  date: Date,
  group: {type: mongoose.Schema.Types.ObjectId, ref: 'Group'},
  options: [String],
  votes: [Number]
})

mongoose.model('Plan', PlanSchema)
