import React, { Component } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
export class Content2 extends Component {
    constructor() {
        super();
        this.state = {
          sections: [
            'https://www.youtube.com/embed/watch?v=P8FmdbRxX34&list=PLzMcBGfZo4-mOYgu42wKsStsA_ClOMpr3&ab_channel=TechWithTim',
            'https://www.youtube.com/embed/watch?v=RPoquiZydYc&list=PLzMcBGfZo4-mOYgu42wKsStsA_ClOMpr3&index=1&ab_channel=TechWithTim',
            'https://www.youtube.com/embed/watch?v=ofKz3XGv6ZQ&list=PLzMcBGfZo4-mOYgu42wKsStsA_ClOMpr3&index=2&ab_channel=TechWithTim',
            'https://www.youtube.com/embed/watch?v=ZtcX0OXXRWk&list=PLzMcBGfZo4-mOYgu42wKsStsA_ClOMpr3&index=3&ab_channel=TechWithTim',
            'https://www.youtube.com/embed/watch?v=jcHk4ilAbPY&list=PLzMcBGfZo4-mOYgu42wKsStsA_ClOMpr3&index=4&ab_channel=TechWithTim',
            'https://www.youtube.com/embed/watch?v=ojYxKBoZ44c&list=PLzMcBGfZo4-mOYgu42wKsStsA_ClOMpr3&index=5&ab_channel=TechWithTim',
            'https://www.youtube.com/embed/watch?v=CFvTlTcZBTY&list=PLzMcBGfZo4-mOYgu42wKsStsA_ClOMpr3&index=6&ab_channel=TechWithTim',
            'https://docs.google.com/forms/d/e/1FAIpQLSe1-nX7Ke3hSidIlBdIvNvMwYxAj3NUeSc3WJ4FFVbm5UMBIQ/viewform'
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
                      <button id="video1" class="btn-sm"  style={{width:'100%',height:'100%'}}><a class="active">Lesson 1 : Introduction to Java</a></button>
                      <button id="video2" class="btn-sm" style={{width:'100%',height:'100%'}}><a class="active">Lesson 2 : Variables & Data Types </a></button>
                      <button id="video3" class="btn-sm" style={{width:'100%',height:'100%'}}><a class="active">Lesson 3 :  Basic Operators </a></button>
                      <button id="video4" class="btn-sm" style={{width:'100%',height:'100%'}}><a class="active">Lesson 4 : Input and Scanners </a></button>
                      <button id="video5" class="btn-sm" style={{width:'100%',height:'100%'}}><a class="active">Lesson 5 :Conditions and Booleans </a></button>
                      <button id="video6" class="btn-sm" style={{width:'100%',height:'100%'}}><a class="active">Lesson 6 : If/Else/Else If </a></button>
                      <button id="video7" class="btn-sm" style={{width:'100%',height:'100%'}}><a class="active">Lesson 7 :  Nested Statements </a></button>
                      <button id="video8" class="btn-sm" style={{width:'100%',height:'100%'}}><a class="active" href="https://docs.google.com/forms/d/e/1FAIpQLSe1-nX7Ke3hSidIlBdIvNvMwYxAj3NUeSc3WJ4FFVbm5UMBIQ/viewform">Take Assessment : Quiz</a></button>
                    </div>
                  </div>
                  <div class="float-left" style={{paddingLeft:'4%',paddingTop:"10px"}} >
                          <iframe width="750" height="450" src={sections[position]} 
                          frameBorder='0' allow='autoplay; encrypted-media' allowFullScreen title='video'/>
                        <div>
                          <div style={{paddingRight:'40%'}} class="float-right"><button class="btn-sm btn-outline-primary" onClick={() => this.updatePosition()}><b>NEXT</b></button></div>
                          <div style={{paddingLeft:'40%'}} class="float-left"><button class="btn-sm btn-outline-danger" onClick={() => this.previous()}><b>PREVIOUS</b></button></div>
                        </div>
                        <div style={{paddingTop:'5%',textAlign:'center',fontFamily:'cursive',fontSize:'30px'}} ><a>Lesson {position+1} </a></div>
                        
                      </div>
                </div>
                
     <div><Footer/></div>
    
    </div>
        )
    }
    updatePosition() {
        
        const position = this.state.position + 1;
        if(position < 8){
        this.setState({ position: position });}
      }
    previous(){
      
      const position = this.state.position - 1;
      if(position > 1){
      this.setState({position:position});}
    }
}

export default Content2