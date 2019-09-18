const mongoose = require('mongoose')

const PlaneSchema = new mongoose.Schema({

  _id: { type: Number, required: true },
  tailNumber: {
    type: String,
    required: true,
    default: 'N12345'
  },
  numSeats: {
    type: Number,
    required: false,
    default:4
  },
  fuelCapacity: {
    type: Number,
    required: false,
    default: 50
  }
})
module.exports = mongoose.model('Plane', PlaneSchema)
