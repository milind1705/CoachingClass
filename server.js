require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const port = process.env.port || 3001
const app = express();

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

app.get('/', (req, res) => {
    res.send('welcome to Integration Academy of Science')
});



app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})