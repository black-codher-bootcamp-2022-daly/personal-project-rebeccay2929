// const express = require("express");
// const mongoose = require("mongoose");


require("dotenv").config();
const express = require('express');
const cors = require('cors');
const { default: RegisterPage } = require("../client/src/pages/RegisterPage");
const app = express();
const bodyParser = require("body-parser");

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());



// // IMPORT YOUR SCHEMAS HERE
// require("./models/Profiles"); //This is just an example. Don't forget to delete this

// const app = express();

// // This is where your API is making its initial connection to the database
// mongoose.Promise = global.Promise;
// mongoose.set("strictQuery", false);
// mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
//   useNewUrlParser: true,
// });


// // IMPORT YOUR API ROUTES HERE
// // Below is just an example. Don't forget to delete it. 
// // It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
// require("./routes/profilesRoutes")(app); 









// require("dotenv").config();
// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use(bodyParser.json());


// app.post('/register', (req,res) => {
//  res.json('test ok3');
// });

// app.post('register', async (req,res) => {
//        await RegisterPage().insertOne(req.body)
  
//   return res.status(201).send({
//         error: false,
//         register,
//       });
//     });
  

// app.post(`/api/profile`, async (req, res) => {
//     const profile = await profilesCollection().insertOne(req.body);

//     return res.status(201).send({
//       error: false,
//       profile,
//     });
//   });








const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});




// require("dotenv").config();

// const express = require("express");
// const MongoClient = require("mongodb").MongoClient;
// const bodyParser = require("body-parser");

// const PORT = process.env.PORT;
// const app = express();

// app.use(bodyParser.json());

// // Connect to the database
// MongoClient.connect(process.env.DATABASE_CONNECTION_STRING)
//   .then((client) => {
//     const db = client.db(process.env.MONGO_DB_NAME);
//     // IMPORT YOUR API ROUTES HERE
//     // Below is just an example. Don't forget to delete it.
//     // It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
//     require("./routes/profilesRoutes")(app, db);

//     app.listen(PORT, () => {
//       console.log(`API running on port ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.error("Error: ", err);
//   });