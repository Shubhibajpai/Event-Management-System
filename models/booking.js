const mongoose =require('mongoose')

const BookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      
      phone: {
        type: String,
        required: true,
      },
      
      halltype: {
        type: String,
        required: true,
      },
      hallcategory: {
        type: String,
        required: true,
      },
      eventdate: {
        type: Date,
        required: true,
      },
      persons: {
        type: Number,
        min: 1,
        max: 1000,
        required: true,
      },
      events: {
        type: String,
        enum: ['Wedding Decor','Award Ceremonies','Conference ','Product-launch'],
        required: true,
      },
      timing: {
        type: String,
        required: true,
      },
      payment: {
        type: Number,
        required: true,
      },
})
const BookingModel = mongoose.model("booking",BookingSchema)
module.exports = BookingModel