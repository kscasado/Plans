import mongoose from 'mongoose'
import group from 'Groups'
var PlanSchema = new mongoose.Schema({
  date: Date,
  group: group,
  options: [String],
  votes: [Number]
})

mongoose.model('Plan', PlanSchema)
