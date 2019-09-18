const mongoose = require('mongoose')

const FlightSchema = new mongoose.Schema({

  _id: { type: Number, required: true },
  name: {
    type: String,
    required: true,
    default: 'Lexie'
  },
  startingPoint: {
    type: String,
    required: true,
    default: 'KEVU'
  },
  endingPoint: {
    type: String,
    required: true,
    default: 'KCPS'
  },
  startingTime: {
    type:Date,
    required: true
  },
  durationHours: {
    type: Number,
    required: true,
    default: 1
  },
  numPassengers: {
    type:Number,
    required:true,
    default:4  
  },
  pilotId:{
    type:Number,
    required:true,
  },
  planeId:{
    type:Number,
    required:true,
  }
})
module.exports = mongoose.model('Flight', FlightSchema)
