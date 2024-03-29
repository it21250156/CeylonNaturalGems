const mongoose = require('mongoose')

const Schema = mongoose.Schema

const PaymentSchema = new Schema({

  user:{
    type: Schema.Types.ObjectId,
    ref:'user',
   required:true,
  },

  orderID:{
    type:[String],
    required: true,
  },

      amount: {
        type: Number,
        required: true
      },
      pmethod: {
        type: String,
        required: true
      },
      dmethod: {
        type: String,
        required: true
      },
      address: {
        type: String,
       required: false
      },
      district: {
        type: String,
        required: false
      },
      country: {
        type: String,
        required: false
      },
      phoneNo: {
        type: Number,
        required: true
      },
      dStatus:{
        type:String,
        default: "Pending"
      },
     
      
      // gemID:{
      //   type: Schema.Types.ObjectId,
      //   ref:'gem',
      //   required: true
      // },
      // quantity:{
      //   type: Number,
      //   required: true
      // }
}, {timestamps: true})

module.exports = mongoose.model('Payment' , PaymentSchema)
