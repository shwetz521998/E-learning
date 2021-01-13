import React, { Component } from 'react'
import Navbar from'./Navbar';
import Footer from './Footer';
import axios from 'axios';
export class Login extends Component {
  constructor() 
  {
    super();
    this.state = {
      email:'',
      password:'',
    };
    this.changeemail = this.changeemail.bind(this)
    this.changepassword = this.changepassword.bind(this)
    this.onSubmit=this.onSubmit.bind(this)
        
  }
  
  changeemail(event)
  {
    let email=event.target.value
    let err='';
      
       if(email.length==0  || !email.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/))
       {
          err=<strong>Please enter valid Email Address</strong>;
       }
      this.setState({
      email:event.target.value
      })
    this.setState({errorMsg:err})
  }
  
  changepassword(event)
  {
    let password=event.target.value
    let err='';
    if(password==='')
    {
      err=<strong>Password cant be Empty</strong>;
    }
    else if(password.length<8)
    err=<strong>Password should contain atleast 8 characters</strong>
    this.setState({
      password:event.target.value
    })

    this.setState({errorMsg:err})
  }
  onSubmit(event)
  {
    event.preventDefault()
    var Url="";
    if(this.state.email==='')
      alert('Email cant be empty')
      else if(this.state.password==='')
      alert('Password cant be empty')
      else{
        alert('Login succesful');

      axios.post('http://localhost:4000/app/login',{
        params:{
          email:this.state.email
        }
      })
      .then(function(response){
        console.log(response);
      })
      .catch(function(error){
        console.log(error);
      });

        this.setState({
        email:'',
        password:'',
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
                    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
                 </div>
                <input name="email" class="form-control" placeholder="Email address" type="text"  value={this.state.email}  onChange={ this.changeemail }/>
               
            </div>
            <div class="form-group input-group">
            <div class="input-group-prepend">
                    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
                </div>
                <input class="form-control" name="password" placeholder="Create password" type="password"  value={this.state.password} onChange={ this.changepassword } />
                </div>
                <div class="form-group">
            <p style ={{color : 'red'}}>{this.state.errorMsg}</p>
                <button type="submit" class="btn btn-primary btn-block"  >Login</button>
            </div> 
            <p class="text-center">Don't have an account? <a href="./Register">Register</a> </p>
            </form>
            </article>
            </div>
            </div>
            <Footer/>

        </div>
     
    )
    }
}

export default Login
