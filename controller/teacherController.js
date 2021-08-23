const Teachers = require('../models/teacher');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// registeration
module.exports.Signup = (req, res) => {
    const {name, email, mobile, password} = req.body;
    //check all fields are present or not
    if(!name || !email ||!mobile || !password){
        return res.status(400).json({message: "all fields are required"})
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
        const newTeacher = new Teachers({name: name, email:email, mobile:mobile, password: hash});

            newTeacher
                .save()
                .then((user) => {
                    return res.status(200).json({message: user})
                })
                .catch((err) => {
                    {
                        return res.status(400).json({message: err.message || "something went wrong while registration"})
                    }
    
                });
        });

        
    });   

};

module.exports.login = (req, res) => {
    const {email, password} = req.body;
//check all the fields
if(!email || !password){
    return res.status(400).json({
        message: "all fields are required"
    });
}
//check user is availbale or not
Teachers.findOne({email: email}).then((user) => {
    if(!user){
        res.status(400).json({message: "user is not avilable with this emailId"})
    }

    //password validation
    bcrypt.compare(password, user.password).then((isMatch) => {
        if(!isMatch){
            return res.status(400).json({message: "emailId and password does not match"})
        }
        //assign jwt
        jwt.sign({
            _id: user._id
        },
        process.env.JWT_KEY,
        {expiresIn:3600},
        (err, token) => {
            if(err) throw err;
            return res.status(200).json({
                token:token,
                user: {id: user.id, name: user.name, email:user.email}
            });
        }
        );
    
    });
});

}

module.exports.get_user = (req, res) =>{
    Teachers.find().then((data) => {
        return res.status(200).json(data)
    });
};