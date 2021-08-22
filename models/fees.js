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
    feesPaid:{
        type: Number,
    },
    //totalFees - BalenceFee
    balenceFees:{
        type: Number,
        default: totalFees,
        required:true,
    }
})
module.exports = mongoose.models('Fee', feesSchema);