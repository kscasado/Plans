import mongoose from 'mongoose'
import group from './groups.js'
var PlanSchema = new mongoose.Schema({
  date: Date,
  group: {type: mongoose.Schema.Types.ObjectId, ref: 'Group'},
  options: [String],
  votes: [Number],
  winner:String
})

mongoose.model('Plan', PlanSchema)
