import mongoose from 'mongoose'

var PlanSchema = new mongoose.Schema({
  date: {type: Date},
  time: {type: Date},
  group: {type: mongoose.Schema.Types.ObjectId, ref: 'Groups'},
  options: [{type: mongoose.Schema.Types.ObjectId, ref: 'PlanOption', default: 'nooptions'}],
  winner: {type: String}
})


module.exports = mongoose.model('Plan', PlanSchema)
