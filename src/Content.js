import React, { Component } from 'react'
import {Link} from 'react-dom'
import Navbar from './Navbar';
import Footer from './Footer';


export class Content extends Component {
    constructor() {
        super();
        this.state = {
          sections: [      // Array that contains the video link of the course content
            'https://www.youtube.com/embed/watch?v=OFrLs22MDAw&list=PLzMcBGfZo4-mFu00qxl0a67RhjjZj3jXm&ab_channel=TechWithTim',
            'https://www.youtube.com/embed/watch?v=QQrcd_62VWM&list=PLzMcBGfZo4-mFu00qxl0a67RhjjZj3jXm&index=1&ab_channel=TechWithTim',
            'https://www.youtube.com/embed/watch?v=2EngAQX_kCg&list=PLzMcBGfZo4-mFu00qxl0a67RhjjZj3jXm&index=2&ab_channel=TechWithTim',
            'https://www.youtube.com/embed/watch?v=vA4r_MPRNsg&list=PLzMcBGfZo4-mFu00qxl0a67RhjjZj3jXm&index=3&ab_channel=TechWithTim',
            'https://www.youtube.com/embed/watch?v=vKeoXxVaga4&list=PLzMcBGfZo4-mFu00qxl0a67RhjjZj3jXm&index=4&ab_channel=TechWithTim',
            'https://www.youtube.com/embed/watch?v=U_nugSKtbSk&list=PLzMcBGfZo4-mFu00qxl0a67RhjjZj3jXm&index=5&ab_channel=TechWithTim',
            'https://www.youtube.com/embed/watch?v=1uCH3zqbv2s&list=PLzMcBGfZo4-mFu00qxl0a67RhjjZj3jXm&index=6&ab_channel=TechWithTim',
            'https://docs.google.com/forms/d/e/1FAIpQLScsyzSWlnFYyoEegTHaLrEOgpx8ihmn3D3aDwP4xcCvVTvTqQ/viewform'
          ],
          position: 0
        };
        
      }
    render() {
        const sections = this.state.sections
        const position = this.state.position
        return (
            
            <div>
   
                <Navbar/>
                <div style={{paddingBottom:'50%'}}>
                <div class="float-right" style={{paddingTop:"10px"}}>
                    <div class="sidebar">
                      <button id="video1" class="btn-sm" style={{width:'100%',height:'100%'}}><a class="active">Lesson 1 : Variables and Data Types</a></button>
                      <button id="video2" class="btn-sm" style={{width:'100%',height:'100%'}}><a class="active">Lesson 2 : Basic Operators and Input </a></button>
                      <button id="video3" class="btn-sm" style={{width:'100%',height:'100%'}}><a class="active">Lesson 3 : Conditions </a></button>
                      <button id="video4" class="btn-sm" style={{width:'100%',height:'100%'}}><a class="active">Lesson 4 : Conditional Code </a></button>
                      <button id="video5" class="btn-sm" style={{width:'100%',height:'100%'}}><a class="active">Lesson 5 : IF/ELIF/ELSE </a></button>
                      <button id="video6" class="btn-sm" style={{width:'100%',height:'100%'}}><a class="active">Lesson 6 : Chained Conditionals and Nested Statements </a></button>
                      <button id="video7" class="btn-sm"  style={{width:'100%',height:'100%'}}><a class="active">Lesson 7 : For Loops</a></button>
                      <button  class="btn-sm" style={{width:'100%',height:'100%'}}><a  class="active"  href="https://docs.google.com/forms/d/e/1FAIpQLScsyzSWlnFYyoEegTHaLrEOgpx8ihmn3D3aDwP4xcCvVTvTqQ/viewform">Take Assessment : Quiz</a></button>
                    </div>
                  </div>
                  <div class="float-left" style={{paddingLeft:'4%',width:"750", height:"450",paddingTop:"10px"}} >
                          <iframe width="750" height="450" src={sections[position]} 
                          frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen title='video'/>
                        <div>
                          <div style={{paddingRight:'40%',paddingTop:"10px"}} class="float-right"><button class="btn-sm btn-outline-primary" onClick={() => this.updatePosition()}><b>NEXT</b></button></div>
                          <div style={{paddingLeft:'40%',paddingTop:"10px"}} class="float-left"><button class="btn-sm btn-outline-danger" onClick={() => this.previous()}><b>PREVIOUS</b></button></div>
                        </div>
                        <div style={{paddingTop:'5%',textAlign:'center',fontFamily:'cursive',fontSize:'30px'}} ><a>Lesson {position+1} </a></div>
                        
                      </div>
                </div>
                
     <div><Footer/></div>
    
    </div>
        )
    }
    updatePosition() {  // using to change the position of the video
        
        const position = this.state.position + 1;
        if(position <= 7){
        this.setState({ position: position });}
      }
    previous(){
      
      const position = this.state.position - 1;
      if(position >= 0){
      this.setState({position:position});}
    }
}

export default Content
