import React, { Component } from 'react';
import python from './Images/python2.jpg';
import java from './Images/java2.jpg';
import ai from './Images/ai1.jpg';
import aws from './Images/aws.jpg';
import cs from './Images/cs.jpg';
import eh from './Images/eth.jpg';
import wd from './Images/web.jpg';
import ml from './Images/ml.jpg';
import mern from './Images/mern3.jpg';
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';
import { Link } from 'react-router-dom';


export class AllCourses extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <b><h1 style={{color:'black',textAlign:'center',paddingTop:'2%'}}>Courses to get you  started</h1></b>
                
                <div class="card-deck" style={{paddingBottom:'2.5%',paddingTop:'6%',paddingRight:'2%',paddingLeft:'2%'}}>
                  
                  <div class="card">
                  <img  src={aws} class="float-right" style={{width:'400px', height:'180px',paddingRight:'5%',paddingLeft:'8.5%'}}/>
                    <div class="card-body">
                      <b><h5 style={{color:'orange'}} class="card-title">AWS</h5></b>
                      <p class="card-text">Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services. Free to join, pay only for what you use.<br/><br/>
                      •7Lessons•5Hours<br/>
                      <span style={{color:'#be5a0e'}}>4.5</span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                      <span class="fa fa-star-half-full" style={{color:"orange"}}></span> </p>
                       <div style={{paddingTop:'6%'}}>
                       <Link to="/Register"class="float-right"><button class="btn btn-success btn-rounded btn-sm" type="button">About Course</button></Link>
                       <Link to="/Pythoncourse"class="float-left"><button class="btn btn-success btn-rounded btn-sm"  type="button">Take Course</button></Link>
                    </div>
                    </div>
                  </div>
                  <div class="card">
                  <img  src={ai} class="float-right" style={{width:'400px', height:'180px',paddingRight:'5%',paddingLeft:'8.5%'}}/>
                    <div class="card-body">
                      <h5 style={{color:'blue'}} class="card-title">Artificial Intelligence</h5>
                      <p class="card-text">Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems.<br/><br/>
                      •7Lessons•5Hours<br/>
                      <span style={{color:'#be5a0e'}}>4.5</span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                      <span class="fa fa-star-half-full" style={{color:"orange"}}></span></p>
                      <div style={{paddingTop:'6%'}}>
                      <Link to="/Content"class="float-right"><button class="btn btn-success btn-rounded btn-sm" type="button">About Course</button></Link>
                       <Link to="/Pythoncourse"class="float-left"><button class="btn btn-success btn-rounded btn-sm"  type="button">Take Course</button></Link>
                    </div>
                    </div>
                  </div>
                  <div class="card">
                  <img  src={ml} class="float-right" style={{width:'400px', height:'180px',paddingRight:'5%',paddingLeft:'8.5%'}}/>
                    <div class="card-body" >
                      <h5 style={{color:'green'}} class="card-title">Machine Learning</h5>
                      <p class="card-text">The rise of machine learning is a clear factor in its popularity.<br></br><br></br><br></br>
                      •7Lessons•5Hours<br/>
                      <span style={{color:'#be5a0e'}}>4.5</span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                      <span class="fa fa-star-half-full" style={{color:"orange"}}></span> </p>
                      <div style={{paddingTop:'6%'}}>
                      <Link to="/Register"class="float-right"><button class="btn btn-success btn-rounded btn-sm" type="button">About Course</button></Link>
                       <Link to="/Pythoncourse"class="float-left"><button class="btn btn-success btn-rounded btn-sm"  type="button">Take Course</button></Link>
                    </div>
                    </div>
                  </div>
                  
              </div>
              <div class="card-deck" style={{paddingBottom:'2.5%',paddingTop:'2.5%',paddingRight:'2%',paddingRight:'2%',paddingLeft:'2%'}}>
                  <div class="card" >
                    
                  <img  src={cs} class="float-right" style={{width:'400px', height:'180px',paddingRight:'5%',paddingLeft:'8.5%'}}/>
                    <div class="card-body" >
                      <h5 style={{color:'orangered'}} class="card-title">Cyber Security</h5>
                      <p >Computer security, the protection of computer systems and information from harm, theft,
                    and unauthorized use.<br></br><br></br>
                    •7Lessons•5Hours<br/>
                      <span style={{color:'#be5a0e'}}>4.5</span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                      <span class="fa fa-star-half-full" style={{color:"orange"}}></span></p>
                      <div style={{paddingTop:'13%'}}>
                      <Link to="/Register"class="float-right"><button class="btn btn-success btn-rounded btn-sm" type="button">About Course</button></Link>
                       <Link to="/Pythoncourse"class="float-left"><button class="btn btn-success btn-rounded btn-sm"  type="button">Take Course</button></Link>
                    </div>
                    </div>
                  </div>
                  <div class="card">
                  <img  src={eh} class="float-right" style={{width:'400px', height:'180px',paddingRight:'5%',paddingLeft:'8.5%'}}/>
                    <div class="card-body">
                      <h5 style={{color:'blue'}} class="card-title">Ethical Hacking</h5>
                      <p class="card-text">In the dawn of international conflicts, terrorist organizations funding cybercriminals to 
                      breach security systems.<br></br><br></br>
                      •7Lessons•5Hours<br/>
                      <span style={{color:'#be5a0e'}}>4.5</span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                      <span class="fa fa-star-half-full" style={{color:"orange"}}></span></p>
                      <div style={{paddingTop:'13%'}}>
                      <Link to="/Register"class="float-right"><button class="btn btn-success btn-rounded btn-sm" type="button">About Course</button></Link>
                       <Link to="/Pythoncourse"class="float-left"><button class="btn btn-success btn-rounded btn-sm"  type="button">Take Course</button></Link>
                    </div>
                    </div>
                  </div>
                  <div class="card">
                  <img  src={wd} class="float-right" style={{width:'400px', height:'180px',paddingRight:'5%',paddingLeft:'8.5%'}}/>
                    <div class="card-body">
                      <h5 style={{color:'red'}} class="card-title">Web Development</h5>
                      <p class="card-text">Web development is the work involved in developing a Web site for the Internet or an intranet. <br/><br/><br></br>
                      •7Lessons•5Hours<br/>
                      <span style={{color:'#be5a0e'}}>4.5</span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                      <span class="fa fa-star-half-full" style={{color:"orange"}}></span></p>
                      <div style={{paddingTop:'7%'}}>
                      <Link to="/Register"class="float-right"><button class="btn btn-success btn-rounded btn-sm" type="button">About Course</button></Link>
                       <Link to="/Pythoncourse"class="float-left"><button class="btn btn-success btn-rounded btn-sm"  type="button">Take Course</button></Link>
                    </div>
                    </div>
                  </div>
                
              </div>
              <div class="card-deck" style={{paddingBottom:'5%',paddingTop:'2.5%',paddingRight:'2%',paddingLeft:'2%'}}>
                  <div class="card">
                    
                  <img  src={python} class="float-right" style={{width:'400px', height:'180px',paddingRight:'5%',paddingLeft:'8.5%'}}/>
                    <div class="card-body" >
                      <b><h5 style={{color:'orangered'}} class="card-title">Python</h5></b>
                      <p >Python is an interpreted, high-level and general-purpose programming language.<br/><br/>
                      •7Lessons•5Hours<br/>
                      <span style={{color:'#be5a0e'}}>4.5</span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                      <span class="fa fa-star-half-full" style={{color:"orange"}}></span> 
                      </p> 
                      <div style={{paddingTop:'13%'}}>
                           <Link to="/Pythoncourse"class="float-right"><button class="btn btn-success btn-rounded btn-sm" type="button">About Course</button></Link>
                           <Link to="/Content"class="float-left"><button class="btn btn-success btn-rounded btn-sm"  type="button">Take Course</button></Link>
                          </div>
                    </div>
                  </div>
                  <div class="card">
                  <img  src={java} class="float-right" style={{width:'400px', height:'180px',paddingRight:'5%',paddingLeft:'8.5%'}}/>
                    <div class="card-body">
                      <b><h5 style={{color:'blue'}} class="card-title">Java</h5></b>
                      <p class="card-text">Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.<br/><br/>
                      •7Lessons•5Hours<br/>
                      <span style={{color:'#be5a0e'}}>4.5</span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                      <span class="fa fa-star-half-full" style={{color:"orange"}}></span> 
                      </p>
                      <div style={{paddingTop:'6%'}}>
                       <Link to="/Java" class="float-right"><button class="btn btn-success btn-rounded btn-sm" type="button">About Course</button></Link>
                       <Link to="/Content2"class="float-left"><button class="btn btn-success btn-rounded btn-sm"  type="button">Take Course</button></Link>
                      </div>
                    </div>
                  </div>
                  <div class="card">
                  <img  src={mern} class="float-right" style={{width:'400px', height:'180px',paddingRight:'5%',paddingLeft:'8.5%'}}/>
                    <div class="card-body">
                      <h5 style={{color:'red'}} class="card-title">MERN STACK</h5>
                      <p class="card-text">MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.<br/><br/>
                      •7Lessons•5Hours<br/>
                      <span style={{color:'#be5a0e'}}>4.5</span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                      <span class="fa fa-star-half-full" style={{color:"orange"}}></span> 
                    </p>
                      <div style={{paddingTop:'13%'}}>
                      <Link to="/Register"class="float-right"><button class="btn btn-success btn-rounded btn-sm" type="button">About Course</button></Link>
                       <Link to="/Pythoncourse"class="float-left"><button class="btn btn-success btn-rounded btn-sm"  type="button">Take Course</button></Link>
                      </div>
                    </div>
                  </div>
              </div>
              <Footer/>
            </div>
        )
    }
}

export default AllCourses