const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    minLength:2,
  } ,
  email: { 
    type: String, 
    unique: true,
    unique:true 
  },
  password:{
    type:String,
    required:true,
    minLength:6
  }
});
const User=mongoose.model("User",userSchema);

module.exports = User;