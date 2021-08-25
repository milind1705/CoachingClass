const mongoose = require('mongoose');

const classSchema = mongoose.Schema({
    class: {
        type: Number,
        required: true
    },

    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Student",
        unique: true
    }
})

module.exports = mongoose.model("Class", classSchema);