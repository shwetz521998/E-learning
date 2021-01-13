const { request, response } = require('express')
const express=require('express');
const { Mongoose } = require('mongoose');
const router=express.Router()
const signUpTemplateCopy=require('../Models/signupmodels')

router.post('/signup',(request,response)=>{
   const signedUpuser=new signUpTemplateCopy({
       fullname:request.body.fullname,
       email:request.body.email,
       course:request.body.course,
       number:request.body.number,
       password:request.body.password,
       confirmpassword:request.body.confirmpassword
   })        
   signedUpuser.save().then(data=>{
    response.json(data)
}).catch(error=>{
    response.json(error)
})
})
module.exports=router

