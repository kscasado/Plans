import mongoose from 'mongoose'

var PlanOptionSchema = new mongoose.Schema({
  title: String,
  address: String,
  city: String,
  url: String,
  imageURL: String,
  plan:{type: mongoose.Schema.Types.ObjectId, ref: 'Plan'},
  votes: {type: Number, default: 0}

})

PlanOptionSchema.methods.vote = function(cb){
  console.log('planOption model' + this)
  this.votes +=1
  console.log(this.votes)
  this.save(cb)
}
module.exports = mongoose.model('PlanOption', PlanOptionSchema)
