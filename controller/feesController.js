const Fees = require('../models/fees');
const Student = require('../models/student');

module.exports.get_fees_byID = (req, res) =>{
    Fees.findById({_id: req.params.id}).then((data) => {
        return res.status(200).json(data)
    })
    .catch((err) => {
        return res.status(400).json({message: err.message || "something went wrong"})
    })
}

module.exports.create_entry =async (req, res) =>{
   const newEntry = new Fees(req.body)
   const student =await Student.findOne({_id:req.params.studentId});
    newEntry
    .save()
    .then((data) => {
        return res.status(200).json(data)
    })  .catch((err) => {
        return res.status(400).json({message: err.message || "something went wrong"})
    })

    
    student.feesDetails.push(newEntry._id)
    await student.save()
    console.log(student);
}

module.exports.updateFees = (req, res) => {
    Fees.findByIdAndUpdate({_id: req.params.id}, req.body).then(() =>{
        Fees.findOne({_id: req.params.id}).then((data) => {
            return res.status(200).json(data)
        })
        .catch((err) => {
            return res.status(400).json({message: err.message || "something went wrong"})
        })
    })
}

module.exports.deleteEntry = (req, res) => {
    Fees.findByIdAndDelete({_id: req.params.id}).then(() =>{
        return res.status(200).json("the student fees details are deleted successfully")
    })
}

