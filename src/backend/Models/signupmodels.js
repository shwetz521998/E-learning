const mongoose=require('mongoose');

const signUpTemplate=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },

   
     email:{
        type:String,
        required:true
    },

    number:{
        type:String,
        required:true
    },

     course:{
        type:String,
        required:true
    },
     password:{
        type:String,
        required:true
    },
    confirmpassword:{
        type:String,
        required:true
    },

    date:{
  type:Date,
  default:Date.now      
    }
})

module.exports=mongoose.model('mytable',signUpTemplate)