const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const mongoose = require('mongoose');


const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');
mongoose.connect("mongodb://localhost:27017/userDB",{
  useUnifiedTopology:true,
  useNewUrlParser:true
});
const userSchema = new mongoose.Schema({
  fname:String,
  lname:String,
  email:String,
  password:String,
  role:Number
});

const User = mongoose.model("User",userSchema);
// const newuser =new User({
//   fname:"Dev",
//   lname:"Batra",
//   email:"dev@gmail.com",
//   password:"devitika",
//   role:1
// });
newuser.save();
app.get("/",function(req,res){
    res.render("homepage.ejs");

});
app.get("/signin",function(req,res){
    res.render("signin.ejs");
});
app.get("/signup",function(req,res){
    res.render("signup.ejs");
});



app.listen(3000,function(){console.log("connected");})
