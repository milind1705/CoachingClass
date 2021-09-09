const mongoose = require('mongoose');

const attendanceSchema = mongoose.Schema({
    date: {
        type: Date,
        default: Date.now()
    },

    presentStudent: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Student",
        unique: true
    }],
    topicTaught:{
        type: String,

    },
    teacher:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Teacher"

    }


})

module.exports = mongoose.model("Attendance", attendanceSchema);