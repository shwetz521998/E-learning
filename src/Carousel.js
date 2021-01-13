import React, { Component } from 'react'
import './App.css';
import python from './python2.jpg';
import java from './java2.jpg';
import cs from './cs.jpg';
import ai from './ai1.jpg';
import mern5 from './mern5.jpg';
import web1 from './web1.png';
import mongo from './Images/EthicalHacking.jpg';
import node from './nodeslide.png';
import cslide from './Images/CyberSecurity.jpg';
import n1 from './Images/ArtificialIntelligence.jpg';
export class Carousel extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" class="carousel slide carousel-fade " data-ride="carousel" data-interval='2000'>
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img  src={n1} style={{width:'100%', height:'100%'}}/>
                    </div>
                    <div class="carousel-item ">
                        <img  src={mongo} style={{width:'100%', height:'100%'}}/>
                    </div>
                    <div class="carousel-item ">
                    <img  src={cslide} style={{width:'100%', height:'100%'}}/>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Carousel