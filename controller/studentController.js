const student = require("../models/student");
const Students = require("../models/student");

module.exports.create_student = (req, res) => {
    const newStudent = new Students(req.body);

    newStudent
        .save()
            .then((data)=>{
                return res.status(400).json({
                    message: data
                })

            }).catch((err) => {
                return res.status(400).json({message: err.message || "something went wrong"})
            })
};

module.exports.get_allStudents = (req, res) => {
    Students.find().then((data) => {
        return res.status(200).json({data})
    })
    .catch((err) => {
        return res.status(400).json({
            message: err.message || "something went wrong while getting student data"
        })
    })
}

module.exports.get_studentById =(req, res) => {
    Students.findById({ _id: req.params.id}).populate("feesDetails")
    .then((data) => {
        return res.status(200).json({data})
    })
    .catch((err) => {
        return res.status(400).json({message: err.message || "something went wrong"})
    })
}

module.exports.update_details = (req, res) => {
    Students.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
            Students.findOne({_id: req.params.id})
            .then((student) => {
                return res.status(200).json(student)
            })
            .catch((err) => {
                return res.status(400).json({message: err.message || "something went wrong while updating students information"})
            });

        })

}


module.exports.delete_student = (req, res) => {
    Students.findOneAndDelete({_id: req.params.id})
    .then(() => {
        return res.status(200).json({message: "students details successfully deleted"})
    })
}