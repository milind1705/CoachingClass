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
        type: String,
        required:true,
    },
    sbjects:[{
        type: String,
        required:true,
    }],
    feesDetails:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Fee"
    },


})
module.exports = mongoose.models('Student', studentSchema);