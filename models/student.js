const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    name:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    mobile:{
        type: Number,
        required:true
    },
   class:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required:true,
    },
    sbjects:[{
        type: String,
        required:true,
    }],
    feesDetails: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Fee"
    }],


}, {timestamps: true})
module.exports = mongoose.model('Student', studentSchema);