const express = require("express");
const cors = require('cors')
const app = express();
const mongoose = require("mongoose");
const mongoURL = "mongodb+srv://uditpatel:Kp300978@uditpatel.rmycp.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
const cookieParser = require('cookie-parser')

mongoose.connect(process.env.MONGODB_URL || mongoURL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})




app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));
 
if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));
}  

app.listen(PORT,()=>{
    console.log("ready to take requests");
});