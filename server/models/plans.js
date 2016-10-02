import mongoose from 'mongoose'
import group from './groups.js'
var PlanSchema = new mongoose.Schema({
  date: Date,
  time: Date,
  group: {type: mongoose.Schema.Types.ObjectId, ref: 'Group'},
  options: [{type: mongoose.Schema.Types.ObjectId, ref:'PlanOption'}],
  winner:String
})
/*
PlanSchema.methods.findWinner = () => {
  //find which option has the most votes


}
*/

module.exports = mongoose.model('Plan', PlanSchema)
