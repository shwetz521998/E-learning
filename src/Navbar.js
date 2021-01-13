import React, { Component } from 'react'
import  './Navbar.css';
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" style={{color:'white'}} href="#">LearnAtEase</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                        <Link to="/">
                        <button  class="btn btn-dark" type="button"  aria-haspopup="true" aria-expanded="false" style={{fontSize:"20px"}} >
                           Home
                        </button></Link>
                        </li>
                        <li>
                        <div class="dropdown">
                            <Link to="/AllCOurses">
                        <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontSize:"20px"}}>
                            Courses
                        </button></Link>
                        <div style={{backgroundColor:'white'}} class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="/AllCourses">AWS</a>
                            <a class="dropdown-item" href="/AllCourses">Artificial Intelligence</a>
                            <a class="dropdown-item" href="/AllCourses">Cyber Security</a>
                            <a class="dropdown-item" href="/AllCourses">Ethical Hacking</a>
                            <a class="dropdown-item" href="/AllCourses">Java</a>
                            <a class="dropdown-item" href="/AllCourses">Machine Learning</a>
                            <a class="dropdown-item" href="/AllCourses">MERN STACK</a>
                            <a class="dropdown-item" href="/AllCourses">Python</a>
                            <a class="dropdown-item" href="/AllCourses">Web Development</a>
                        </div>
                        </div>
                        </li>
                        <li class="nav-item">
                        <Link to="/Register">
                        <button class="btn btn-dark" type="button" aria-haspopup="true" aria-expanded="false" style={{fontSize:"20px"}}>
                             Register
                        </button>
                        </Link>
                        </li>
                        <li class="nav-item">
                        <Link to="/Contact">
                        <button class="btn btn-dark" type="button"  aria-haspopup="true" aria-expanded="false" style={{fontSize:"20px"}}>
                            Contact
                        </button></Link>
                        </li>
                        <li>
                        <div class="dropdown">
                        <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontSize:"20px"}}>
                            Login
                        </button>
                        <div style={{backgroundColor:'white'}} class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="./Login">Sign up</a>
                            <a class="dropdown-item" href="./Profile">My Profile</a>
                            <a class="dropdown-item" href="/">Log Out</a>
                        </div>
                        </div>
                        </li>
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-primary" type="submit">Search</button>
                    </form>
                    </div>
                </div>
                </nav>
                                
            </div>
        )
    }
}

export default Navbar