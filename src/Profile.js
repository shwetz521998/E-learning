import React, { Component } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import prof from './prof.png';
import axios from 'axios'; 
export class Profile extends Component {
    state = { 

        // Initially, no file is selected 
        selectedFile: null
        }; 
        
        // On file select (from the pop up) 
        onFileChange = event => { 
        
        // Update the state 
        this.setState({ selectedFile: event.target.files[0] }); 
        
        }; 
        
        // On file upload (click the upload button) 
        onFileUpload = () => { 
        
        // Create an object of formData 
        const formData = new FormData(); 
        
        // Update the formData object 
        formData.append( 
            "myFile", 
            this.state.selectedFile, 
            this.state.selectedFile.name 
        ); 
        
        // Details of the uploaded file 
        console.log(this.state.selectedFile); 
        
        // Request made to the backend api 
        // Send formData object 
        axios.post("api/uploadfile", formData); 
        }; 
        
        // File content to be displayed after 
        // file upload is complete 
        fileData = () => { 
        
        if (this.state.selectedFile) { 
            
            return ( 
            <div> 
                <h2>File Details:</h2> 
                <p>File Name: {this.state.selectedFile.name}</p> 
                <p>File Type: {this.state.selectedFile.type}</p> 
                <p> 
                Last Modified:{" "} 
                {this.state.selectedFile.lastModifiedDate.toDateString()} 
                </p> 
            </div> 
            ); 
        } else { 
            return ( 
            <div> 
                <br /> 
            </div> 
            ); 
        } 
        }; 
        
    render() {
        return (
            <div>
                <Navbar/>
                <div class="container emp-profile">
            <form method="post">
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-img">
                            <img src={prof}/>
                            <div> 
				<input type="file" onChange={this.onFileChange} />
			</div>
          {this.fileData()}
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="profile-head">
                                    <h5>
                                        Shraddha Shinde
                                    </h5>
                                    <p class="proile-rating">Courses Completed : <span>4/5</span></p>
                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About Me</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4">
                        <div class="profile-work">
                            <a href='/'>Log Out</a>
                            <h6>Courses</h6>
                            <a href="">AWS</a><br/>
                            <a href="">JAVA</a><br/>
                            <a href="">Python</a><br/>
                            <a href="">Web Development</a><br/>
                            <a href="">MERN STACK</a><br/>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="tab-content profile-tab" id="myTabContent">
                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>User Id</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>shraddha</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Name</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>Shraddha Shinde</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Email</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>shraddhashinde634@gmail.com</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <label>Phone</label>
                                            </div>
                                            <div class="col-md-6">
                                                <p>9089786756</p>
                                            </div>
                                        </div>
                            </div>
                            </div>
                    </div>
                </div>
            </form>           
        </div>
                <Footer/>
            </div>
        )
    }
}

export default Profile