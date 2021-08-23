require('dotenv').config();
//import dependancies
const express = require('express');
const mongoose = require('mongoose');
const port = process.env.port || 3001
const app = express();

//export files
const teacherRouter = require('./routes/teacher');

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//connection with database
mongoose.connect(process.env.MONGO_URL, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
});

mongoose.connection.once('open', ()=>{
    console.log("concted with database")
})
//router
app.get('/', (req, res) => {
    res.send('welcome to Integration Academy of Science')
});

app.use('/teacher', teacherRouter);



app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})