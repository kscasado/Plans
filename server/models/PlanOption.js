import mongoose from 'mongoose'
import group from './groups.js'
var PlanOptionSchema = new mongoose.Schema({
  address: String,
  city: String,
  url: String,
  imageURL: String,
  group:{type: mongoose.Schema.Types.ObjectId, ref: 'group'},
  votes: {type: Number, default: 0}

})

mongoose.model('PlanOption', PlanOptionSchema)
