import React, { Component } from 'react';
import './App.css';
import Navbar from'./Navbar';
import Footer from './Footer';
import axios from 'axios';

// import { response } from 'express';
 export class Register extends Component {
    constructor()
    {   super()
        this.state = {
            fullname:'',
            email:'',
            userid:'',
            course:'',
            number:'',
            password:'',
            confirmpassword:'',
        }
        this.changefullName = this.changefullName.bind(this)
        //this.changelastName = this.changelastName.bind(this)
        this.changeemail = this.changeemail.bind(this)
        this.changeuserid = this.changeemail.bind(this)
        this.changenumber = this.changenumber.bind(this)
        this.changecourse = this.changecourse.bind(this)
        this.changepassword = this.changepassword.bind(this)
        this.changeconfirmpassword = this.changeconfirmpassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        //this.handleChangeName = this.handleChangeName.bind(this)
        //this.handleChangeEmail = this.handleChangeEmail.bind(this)
        //this.handleChangeId = this.handleChangeId.bind(this)
        //this.handleChangeCourse = this.handleChangeCourse.bind(this)
        //this.handleChangeNumber = this.handleChangeNumber.bind(this)
        //this.handleChangePassword = this.handleChangePassword.bind(this)
        //this.handleChangeConfirmpassword = this.handleChangeConfirmpassword.bind(this)
    }

    changefullName(event)
    {
        let fullname=event.target.value
        let err='';
        
        if(fullname.length==0 || !fullname.match(/^[a-zA-Z]+$/)){
               err=<strong>Please enter valid Name</strong>;
      }
      this.setState({
        fullname:event.target.value
    })
        this.setState({errorMsg:err})
    }
    changeemail(event)
    {
      let email=event.target.value
      let err='';
        
         if(email.length==0  || !email.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)){
      err=<strong>Please enter valid Email Address</strong>;
         }
    this.setState({
        email:event.target.value
    })
      this.setState({errorMsg:err})
    }
    changecourse(event)
    {
      let course=event.target.value
      //let err='';
        
        this.setState({
        course:event.target.value
    })
      
    }

    changenumber(event)
    {
      let number=event.target.value
      let err='';
       

        if (!Number(number)) { 
          err = <strong>Your Contact must be a number</strong>; 
    } 
    else if(number.length!=10 || number.length==0)
    {
      err = <strong>Enter valid number</strong>; 
    }
    this.setState({
        number:event.target.value
    })
      this.setState({errorMsg:err})
    }
    changepassword(event)
    {
      let password=event.target.value
      let err='';
    if(password===''){
    err=<strong>Password cant be Empty</strong>;}
    else if(password.length<8)
    err=<strong>Password should contain atleast 8 characters</strong>
    this.setState({
        password:event.target.value
    })

    this.setState({errorMsg:err})
    }
   changeconfirmpassword(event)
    {  let confirmpassword=event.target.value
        let err='';
        
         if(confirmpassword!=this.state.password)
        {
            err=<strong>Password doesnt match</strong>;
        }
        this.setState({
            confirmpassword:event.target.value
        })
   
     this.setState({errorMsg:err})
    }




    onSubmit(event)
    {
        event.preventDefault()
        var Url="";
        if(this.state.fullname==='')
        alert('Name cant be empty')
        else if(this.state.email==='')
        alert('Email cant be empty')
        else if(this.state.number==='')
        alert('Contact cant be empty')
        else if(this.state.course==='')
        alert('Course cant be empty')
        else if(this.state.password==='')
        alert('Password cant be empty')
        else if(this.state.confirmpassword==='')
        alert('Enter confirm password')
        else{
        alert('Registration succesful');
        const registered = {
            fullname:this.state.fullname,
            email:this.state.email,
            number:this.state.number,
            course:this.state.course,
            password:this.state.password,
            confirmpassword:this.state.confirmpassword,
        }
        axios.post('http://localhost:4000/app/signup',registered)
        .then(response => console.log(response.data))
        alert('server connected');
        this.setState({
            fullname:'',
            email:'',
            number:'',
            course:'',
            password:'',
            confirmpassword:'',
        })
        }
    }
   
    render() {
        return (
       
        <div>
             <Navbar/>   
                     <div class="container">
            <br></br>
            <div class="card bg-white" style={{width:"500px",margin:"0 auto"}}>
            <article class="card-body mx-auto" style={{maxWidth:"400px"}}>
            <h4 class="card-title mt-3 text-center">Create Account</h4>
            <p class="text-center">Get started with your free account</p>
            <p class="divider-text">
                <br></br>
            </p>
            <form onSubmit={this.onSubmit}>
            <div class="form-group input-group">
            <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
                 </div>
                <input name="fullname" class="form-control" placeholder="Full name" type="text" value={this.state.fullname}
              onChange={this.changefullName} />
                 
                 </div>
                 <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                 </div>
                <input name="email" class="form-control" placeholder="Email address" type="text"  value={this.state.email}  onChange={ this.changeemail }/>
               
            </div>
           
            <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
                </div>
                
                <input name="number" class="form-control" placeholder="Phone number" value={this.state.number}  name="number" onChange={ this.changenumber }  />
                

            </div>
            <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-building"></i> </span>
                </div>
                <select class="form-control" name="course" onChange={this.changecourse} value={this.state.course} >
                    <option selected="">Select Course</option>
                    <option>Python</option>
                    <option>Java</option>
                    <option>Artificial Intelligence</option>
                    <option>Mongo DB</option>
                    <option>Nodejs</option>
                    <option>C Sharp</option>
                </select>
            </div> 
            <div class="form-group input-group">
            <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                </div>
                <input class="form-control" name="password" placeholder="Create password" type="password"  value={this.state.password} onChange={ this.changepassword } />
                </div>
                <div class="form-group input-group">
                <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                </div>
                <input class="form-control" name="confirmpassword" placeholder="Confirm password" type="password"  value={this.state.confirmpassword} onChange={ this.changeconfirmpassword }   />
                
            </div>                       
             
            <div class="form-group">
            <p style ={{color : 'red'}}>{this.state.errorMsg}</p>
                <button type="submit" class="btn btn-primary btn-block">Register</button>
            </div> 
            <p class="text-center">Have an account? <a href="./Login">Log In</a> </p>
            </form>
            </article>
            </div>
            </div>
            <Footer/>

        </div>
     
        )
    }
}

export default Register