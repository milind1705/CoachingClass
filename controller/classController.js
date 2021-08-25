const Class = require('../models/class');

module.exports.create_class = (req, res) => {
    const newClass = new Class(req.body);

    newClass
        .save()
        .then((data) => {
            return res.status(200).json(data)
        })
            .catch((err) => {
                return res.status(400).json({
                    message: err.message || "somthing went wrong"
                })
            })
}

module.exports.get_class = (req, res) => {
Class.find().then((data) => {
    return res.status(200).json(data)
})
.catch((err) => {
    return res.status(400).json({
        message: err.message || "something went wrong"
    })
})
}

module.exports.get_classById = (req, res) => {
    
    Class.findById({_id: req.params.id}).then((data) => {
        return res.status(200).json(data)
    })
    .catch((err) => {
        return res.status(400).json({
            message: err.message || "something went wrong"
        })
    })
 }

 module.exports.update_class = (req, res) => {
     Class.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        Class.findOne({_id: req.params.id}).then((data) =>{
            return res.status(200).json(data)
        })
     })
     .catch((err) => {
         return res.status(400).json({
             message: err.message || "something went wrong"
         })
     })
 }

 module.exports.delete_class = (req, res) => {
    
    Class.findByIdAndDelete({_id: req.params.id}).then((data) => {
        return res.status(200).json({message: "class successfully deleted"})
    })
    .catch((err) => {
        return res.status(400).json({
            message: err.message || "something went wrong"
        })
    })
 }
