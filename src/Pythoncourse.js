import React, { Component } from 'react'
import Navbar from './Navbar'
import python from './python2.jpg';
import python1 from './python1.jpg';
import './App.css';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export class Pythoncourse extends Component {
    render() {
        return (
            <div>   
                <div class="row" style={{height:"100%",width:"100%"}}>
                <div class="col-12"> <Navbar/></div>
                
                <div class="col-10"  >
                    
                    <div class="card-deck" style={{backgroundColor:'hsl(266, 51%, 5%)',width:'1550px', height:'350px',paddingBottom:'1%',paddingTop:'2%',paddingRight:'2%',paddingLeft:'2%'}}>
                       
                           <div>
                            <img  src={python} class="float-left" style={{width:'580px', height:'230px',paddingRight:'5%',paddingLeft:'8.5%'}}/>
                            <div class="card-body" >
                                <b><h5 class="float-right"  style={{color:'orangered'}} class="card-title">Python</h5></b>
                                <p style={{color:'white'}} >
               <b> Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games</b><br/></p>
                       <b>•7Lessons•5Hours</b><br/>
                      <span style={{color:'#be5a0e'}}>4.5</span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                      <span class="fa fa-star-half-full" style={{color:"orange"}}></span><br/>
                     <Link to="/Content"><button class="btn btn-success btn-rounded " type="button" >Take Course</button></Link>
                            </div>
                        </div>
                        <div style={{color:'white',textAlign:'center',paddingLeft:'10%',paddingRight:'4%'}}>
                      
                        </div>
                    </div>
                </div>

                <div class="col-10" style={{alignContent:'center'}}>
                    <div class="card-deck" style={{backgroundColor:'white',width:'1550px', height:'380px',paddingBottom:'1%',paddingRight:'0.5%',paddingLeft:'2%'}}>
                       
                        <div class="card-body" >
                                <div class="float-right">
                                    <br/>
                                    <img  src={python1}  alt="100x100"  style={{width:'580px', height:'310px',paddingRight:'4%',paddingLeft:'5%'}}/> 
                                </div>
                                    <b><h2 class="float-left"  style={{color:'orangered'}} class="card-title"> What you'll learn </h2></b>
                                    <ul class="list-group">
                                        <li class="list-group-item"> Have a fundamental understanding of the Python programming language.</li>
                                        <li class="list-group-item">Acquire the pre-requisite Python skills to move into specific branches - Machine Learning, Data Science, etc..</li>        
                                        <li class="list-group-item">Have the skills and understanding of Python to confidently apply for Python programming jobs.</li>
                                        <li class="list-group-item">Add the Python Object-Oriented Programming (OOP) skills to your résumé.</li>
                                        <li class="list-group-item">Understand how to create your own Python programs.</li>
                                    </ul>
                            </div>

                        </div>
                        
                        
                    </div>

                    <div class="card-body" >
                                <div style={{textAlign:'center'}}>
                                  <b><h2 style={{color:'orangered'}} class="card-title"> Requirements </h2></b>
                                    <ul >
                                        <li class><b>You’ve either already got it or it’s FREE. Here’s the checklist:</b></li>
                                        <li class="list-group-item"> A computer - Windows, Mac, and Linux are all supported. Setup and installation instructions are included for each platform.</li>        
                                        <li class="list-group-item">Your enthusiasm to learn this go-to programming language. It’s a valuable lifetime skill which you can’t un-learn!</li>
                                        <li class="list-group-item">Everything else needed to start programming in Python is already included in the course</li>
                             
                                    </ul>
                                </div>
                    </div>
                <div class="col-11" style={{paddingLeft:'10%',paddingTop:'2%'}}>
                <h6><p>
                By the end of the course you’ll be able to apply in confidence for Python programming jobs.
                And yes, this applies even if you have never programmed before. With the right skills which 
                you will learn in this course, you can become employable and valuable in the eyes of future employers.
                </p></h6>
                </div>
                
                <div class="col-12"> <Footer/></div>
                </div>
                    

                 
            </div>
        )
    }
}

export default Pythoncourse