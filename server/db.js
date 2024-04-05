const mongoose    = require('mongoose')
require("dotenv").config();
// const url = 'mongodb://localhost:27017/newdata'
const url = process.env.MONGO_URL

mongoose.connect(url , 
  {
    useNewUrlParser: true,
     useUnifiedTopology: true
  
    }).then(con =>{
  
   if (con){
    console.log('Succed MongoDB Atals Connected in 0.005 ms')
   }
   else {
    console.log("Error connected MongoDB")
   }
    
    })


