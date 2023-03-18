

require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const jwt = require ('jsonwebtoken')
const cors= require('cors'); 
const mongoose  = require("mongoose");
const User = require('./models/User');
app.use(cors()); 

app.use(express.json());
app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_CONNECTION_STRING);
 


// app.post('/register', (req,res) => {
//  res.json('test ok3');
// });



app.post('/register', async (req,res) => {
  const {username,password} = req.body;
  try{
     const userDoc= await User.create({username, password})
  res.json(userDoc);
  } catch(e) {
res.status(400).json(e)
  }
  
app.post ('/login', async (req, res) => {
  const {username, password} =req.body
  const userDoc = await User.findOne({username})
  const passOk = ({password})
  if(passOk) {
jwt.sign({username,id:userDoc._id}, (err,token) =>{
  if (err) throw err;
  res.json(token);

});
  
  } else {
    res.status(400).json('Incorrect credentials')
  }
})

//  res.json({requestData: {username,password}});

}); 





const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});



