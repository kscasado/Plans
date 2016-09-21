import mongoose from 'mongoose'

var PlanOptionSchema = new mongoose.Schema({
  address: String,
  city: String,
  url: String,
  imageURL: String,
  group: {type: mongoose.Schema.Types.ObjectId, ref: 'Groups'}

})

module.exports = mongoose.model('PlanOption', PlanOptionSchema)
