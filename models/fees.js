const mongoose = require('mongoose');

const feesSchema = mongoose.Schema({
    nameOfStudent:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Students",
        required:true,
    },
    totalFees:{
        type: Number,
        required:true,
    },
    date:{
        type: Date,
        default: Date.now()
    },
    paidFees:{
        type: Number,
    },
    //totalFees - BalenceFee
    balenceFees:{
        type: Number,
        //required:true,
    }
}, {timestamps: true})
module.exports = mongoose.model('Fee', feesSchema);