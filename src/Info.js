import React, { Component } from 'react'
import h1 from './Images/LearnAtEase.jpg';
import './App.css';
import vm from './Images/VisionMission.jpg';
import skil from './skil.png';
import car from './car.jpg';
import deg from './deg.jpg';
import up from './up.png';
import cer from './cer.png';
import mas from './mas.jpg';
import star from './star.jpg';
export class Info extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid">
  <div class="row">
    <div class="col-sm-8">
      <h2 style={{textAlign:"center"}}>LearnAtEase</h2>
      <h4 style={{textAlign:"center"}}>We help you to build a life you deserve</h4><br></br>
      <p>LearnAtEase is great enablers for students as they can find information about the syllabus, 
        extra reference articles, coursework and even live tutorial videos and lectures.
        LearnAtEase has its root in distance learning and is part of the revolution brought by the new media: the Web. 
        Educators and trainers soon found the potentials to advance learning at the advent of the new Web technologies
        It is a very efficient way of delivering courses online. Due to its convenience and flexibility, the resources 
        are available from anywhere and at any time.</p>
    </div>
    <div class="col-sm-4">
      <img src={h1} style={{width:"100%",height:"100%",paddingTop:"0.5px",border:"1px solid black"}}/>
     </div>
  </div>
</div>
 
<div class="container-fluid bg-grey">
  <div class="row">
    <div class="col-sm-4">
    <img src={vm} style={{width:"100%",height:"100%",paddingTop:"1px",border:"1px solid black"}}/>
    </div>
    <div class="col-sm-8">
      <p style={{paddingTop:"40px"}}><strong>MISSION:</strong> Within the context of its own mission LearnAtEase adapts to changes in
technological progress, changes in teaching methodologies and meets the needs of the students
and expectations of its employees and the community, striving to promote website as
an institution offering global excellence in education to attract the best possible students</p>      
      <p><strong>VISION:</strong> LearnAtEase expands access to education options and pathways for students 
      through quality online, hybrid, and web-enhanced courses by embracing innovative and accessible modes
       of course development and delivery.LearnAtEase inspires community engagement and inclusive learning environments
        through the use of emerging technologies</p>
    </div>
  </div>
</div>
<div class="container-fluid text-center">
<img src={star} style={{width:"80px",height:"80px",paddingTop:"5px"}}/><br></br>
<h2 style={{color:"black",textAlign:"center"}}>Achieve your goals with LearnAtEase</h2>
  <br></br>
  <div class="row">
    <div class="col-sm-4">
      <img src={skil} style={{width:"80px",height:"80px",paddingTop:"5px"}}/>
      <h4 style={{color:"orangered"}}>Learn the latest skills</h4>
    </div>
    <div class="col-sm-4">
      <img src={car} style={{width:"80px",height:"80px",paddingTop:"5px"}}/>
      <h4 style={{color:"orangered"}}>Get ready for a career</h4>
    </div>
    <div class="col-sm-4">
      <img src={deg} style={{width:"80px",height:"80px",paddingTop:"5px"}}/>
      <h4 style={{color:"orangered"}}>Earn a Degree</h4>
    </div>
    </div>
    <br></br>
  <div class="row">
    <div class="col-sm-4">
      <img src={up} style={{width:"80px",height:"80px",paddingTop:"5px"}}/>
      <h4 style={{color:"orangered"}}>Upskill your Organisation</h4>
    </div>
    <div class="col-sm-4">
      <img src={cer} style={{width:"80px",height:"80px",paddingTop:"5px"}}/>
      <h4 style={{color:"orangered"}}>Get Certified</h4>
    </div>
    <div class="col-sm-4">
      <img src={mas} style={{width:"80px",height:"80px",paddingTop:"5px"}}/>
      <h4 style={{color:"orangered"}}>Master the Technology</h4>
    </div>
  </div>
</div>
</div>

        )
    }
}

export default Info
