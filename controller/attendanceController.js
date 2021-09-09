const Attendance =require('../models/attendance');
const Students = require("../models/student");

module.exports.create_attendanceEntry = (req, res) => {
    const newAttendanceEntry= new Attendance(req.body);

    newAttendanceEntry
        .save()
            .then((data)=>{
                return res.status(200).json({
                    message: data
                })

            }).catch((err) => {
                return res.status(400).json({message: err.message || "something went wrong"})
            })
};

module.exports.get_allEntries= (req, res) => {
    Attendance.find().then((data) => {
        return res.status(200).json({data})
    })
    .catch((err) => {
        return res.status(400).json({
            message: err.message || "something went wrong while getting student data"
        })
    })
}

module.exports.get_EntrybyId =(req, res) => {
    Attendance.findById({ _id: req.params.id}).populate("presentStudent")
    .then((data) => {
        return res.status(200).json({data})
    })
    .catch((err) => {
        return res.status(400).json({message: err.message || "something went wrong"})
    })
}

module.exports.update_attendanceEntry = (req, res) => {
    Attendance.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
            Attendance.findOne({_id: req.params.id})
            .then((attendance) => {
                return res.status(200).json(attendance)
            })
            .catch((err) => {
                return res.status(400).json({message: err.message || "something went wrong while updating students information"})
            });

        })

}


module.exports.delete_attendanceEntry= (req, res) => {
    Students.findOneAndDelete({_id: req.params.id})
    .then(() => {
        return res.status(200).json({message: "students details successfully deleted"})
    })
}

module.exports.add_presentStudent = (req, res) => {
    const attendance = Attendance.findById({_id: req.params.id})
    attendance.presentStudent.push(req.body.studentId);
    attendance.save();
}

