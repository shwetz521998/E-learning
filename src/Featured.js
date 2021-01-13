import React, { Component } from 'react'
import python from './python2.jpg';
import java from './java2.jpg';
import ml from './ml.jpg';
import ai from './ai1.jpg';
import ad from './ad.gif';
import mern from './mern3.jpg';
import web1 from './web1.png';
export class Featured extends Component {
    render() {
        return (
            <div>
                <div style={{textAlign:'center'}}>
                <img  src={python} class="float-left" style={{width:'320px', height:'150px',paddingRight:'1.5%',paddingLeft:'3%'}}/>
                <img  src={web1} class="float-right" style={{width:'320px', height:'150px',paddingRight:'2.5%',paddingLeft:'2.5%'}}/>
                <img  src={mern} class="float-left" style={{width:'320px', height:'150px',paddingRight:'2.5%',paddingLeft:'1..5%'}}/>
                <img  src={ad} class="float-left" style={{width:'320px', height:'150px',paddingRight:'1.5%',paddingLeft:'3.5%'}}/>
                
                </div>
            </div>
        )
    }
}

export default Featured