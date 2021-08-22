const Teachers = require('../models/teacher');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// registeration
module.exports.Signup = (req, res) => {
    const {name, email, password} = req.body;
    //check all fields are present or not
    if(!name || !email || !password){
        return res.status(400).json({messge: "all fields are required"})
    };
    Teachers.findOne({email: email})
        .then((user) => {
            if(user){

               return res.status(400).json({message: "This emailId alredy registered with us"})
            }
        });

    //create hash password
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) =>{
            if (err) throw err;

            //save the teacher
        const newTeacher = new Teachers({name: name, email:email, password: hash});

            newTeacher
                .save()
                .then((user) => {
                    return res.status(200).json({message: user})
                })
                .catch((err) => {
                    {
                        return res.status(400).json({message: err.message || "something went wrong while registration"})
                    }
    
                })
        })

        
    })


        

}