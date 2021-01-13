import React, { Component } from 'react';
import aws from './Images/aws.jpg';
import mernstack from './Images/mernstack.jpg';
import webd from './Images/webd.jpg';

export class Card2 extends Component {
    render() {
        return (
            <div>
               <div class="card-deck">
                  <div class="card">
                  <a href="/AllCourses"><img  src={aws} class="float-right" style={{width:'100%', height:'100%',paddingRight:'10%',paddingLeft:'50px',paddingTop:"10px"}}/></a>
                    <div class="card-body" >
                      <b><h5 style={{color:'red',textAlign:"center"}} class="card-title">
                        AWS Certified Developer-Associate 2021</h5></b>
                      <p class="card-text" style={{color:"black"}}>
                      Amazon Web Services offers reliable, scalable, and inexpensive cloud computing services. Free to join, pay only for what you use.<br/><br/>
                      •7Lessons•5Hours<br/>
                      <span style={{color:'#be5a0e'}}>4.5</span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                      <span class="fa fa-star-half-full" style={{color:"orange"}}></span> 
                      </p>
                    </div>
                  </div>
                  <div class="card">
                  <a href="/AllCourses"><img  src={mernstack} class="float-right" style={{width:'100%', height:'100%',paddingRight:'10%',paddingLeft:'50px',paddingTop:"10px"}}/></a>
                    <div class="card-body">
                      <b><h5 style={{color:'red',textAlign:"center"}} class="card-title">MERN STACK</h5></b>
                      <p class="card-text" style={{color:"black"}}>
                      MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.<br/><br/>
                      •7Lessons•5Hours<br/>
                      <span style={{color:'#be5a0e'}}>4.5</span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                      <span class="fa fa-star-half-full" style={{color:"orange"}}></span> 
                    </p>
                    </div>
                  </div>
                  <div class="card">
                  <a href="/AllCourses"><img  src={webd} class="float-right" style={{width:'100%', height:'100%',paddingRight:'10%',paddingLeft:'50px',paddingTop:"10px"}}/></a>
                    <div class="card-body">
                      <h5 style={{color:'red',textAlign:"center"}} class="card-title">
                      The Web Developer Bootcamp 2021</h5>
                      <p class="card-text" style={{color:"black"}}>
                      Web development is the work involved in developing a Web site for the Internet or an intranet. <br/><br/>
                      •7Lessons•5Hours<br/>
                      <span style={{color:'#be5a0e'}}>4.5</span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                     <span class="fa fa-star checked"></span>
                      <span class="fa fa-star-half-full" style={{color:"orange"}}></span> 
                      </p>
                    </div>
                  </div>
              </div>
            </div>
        )
    }
}

export default Card2