import mongoose from 'mongoose'

var PlanSchema = new mongoose.Schema({
  date: Date,
  time: Date,
  group: {type: mongoose.Schema.Types.ObjectId, ref: 'Groups'},
  options: [{type: mongoose.Schema.Types.ObjectId, ref:'PlanOption', default: 'nooptions'}],
  winner:String
})
/*
PlanSchema.methods.findWinner = () => {
  //find which option has the most votes


}
*/

module.exports = mongoose.model('Plan', PlanSchema)
