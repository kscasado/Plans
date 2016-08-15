import mongoose from 'mongoose'
import Plan from 'plans.js'
var GroupSchema = new mongoose.Schema({
  groupname: { type: String, unique: true },
  members: [String],
  plans: [Plan]
})
