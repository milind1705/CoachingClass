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
        required:true,
        unique:true
    },
    password:{
        type: String,
        required:true,
    }
})
module.exports = mongoose.models('Students', studentSchema);