import React, { Component } from 'react';
import python from './Images/pythoncard.png';
import java from './Images/javacard.jpg';
import ai from './Images/aicard.jpg';

export class Card1 extends Component {
    render() {
        return (
            <div>
               <div class="card-deck">
                  <div class="card">
                  <a href="/AllCourses"><img  src={python} class="float-right" style={{width:'100%', height:'100%',paddingRight:'10%',paddingLeft:'50px',paddingTop:"10px"}}/></a>
                    <div class="card-body" >
                    <b><h5 style={{color:'red',textAlign:"center"}} class="card-title">Introduction To Python</h5></b>
                      <p class="card-text" style={{color:"black"}}>
                      Python is an interpreted, high-level and general-purpose programming language.<br/><br/>
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
                  <a href="/AllCourses"><img  src={java} class="float-right" style={{width:'100%', height:'100%',paddingRight:'10%',paddingLeft:'50px',paddingTop:"10px"}}/></a>
                    <div class="card-body">
                      <b><h5 style={{color:'red',textAlign:"center"}} class="card-title">Java in Depth</h5></b>
                      <p class="card-text" style={{color:"black"}}>
                      Java is a class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.<br/><br/>
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
                  <a href="/AllCourses"><img  src={ai} class="float-right" style={{width:'100%', height:'100%',paddingRight:'10%',paddingLeft:'50px',paddingTop:"10px"}}/></a>
                    <div class="card-body">
                      <h5 style={{color:'red',textAlign:"center"}} class="card-title">Artificial Intelligence A-Z</h5>
                      <p class="card-text" style={{color:"black"}}>
                      Artificial intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems.<br/><br/>
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

export default Card1