require("dotenv").config();
const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors'); 
const mongoose  = require("mongoose");
const User = require('./models/User');
const Post = require('./models/Post')
const multer = require('multer'); 
const uploadMiddlewar = multer({dest: 'uploads/'})
const fs = require('fs')
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
     const UserDoc= await User.create({username, password})
  res.json(UserDoc);
  } catch(e) {
res. status(400).json(e)
  }
  


//  res.json({requestData: {username,password}});

}); 


app.post('/post', uploadMiddlewar.single('file'), async(req,res) => {
  const {originalname,path} = req.file;
  
const parts = originalname.split('.');
  const ext = parts[parts.length - 1];

//   const newPath = path+'.'+ext;
   fs.renameSync(path, path+'.'+ext);
  res.json({ext});

//   const {title, summary, content} = req.body

//   const postDoc = await Post.create({
// title,
// summary,
// content,
// cover: newPath,
//   })
  
// res.json({files:req.file});
})






const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});

