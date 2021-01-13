import React from "react";
import Navbar from './Navbar';
import Footer from './Footer';
import { Nav } from "react-bootstrap";
export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div>
        <Navbar/>
         <div class="bg-info contact4 overflow-hiddedn position-relative">
        
        <div class="row no-gutters">
          <div class="container">
            <div class="col-lg-6 contact-box mb-4 mb-md-0">
              <div class="">
                <h1 class="title font-weight-light text-white mt-2" style={{textAlign:"center"}}>Contact Us</h1>
                
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xnqolvyz"
        method="POST" class="mt-3"
      >
        <div class="row">
          <div class="col-lg-12">
          <div class="col-lg-12">
              <div class="form-group mt-2">
                <input class="form-control text-white" type="email" name="email" placeholder="email address"/>
              </div>
          </div>
          <div class="col-lg-12">
              <div class="form-group mt-2">
                <textarea class="form-control text-white" name="message" rows="3" placeholder="message"></textarea>
              </div>
          </div>
                                          
            {status === "SUCCESS" ? <p style={{color:"black"}}>Thanks for submitting your response</p> : <div class="col-lg-12 d-flex align-items-center mt-2">
                      <button type="submit" class="btn bg-white text-inverse px-3 py-2"><span> Submit</span></button>
                      <span class="ml-auto text-white align-self-center"><i class="icon-phone mr-2"></i>9909878398</span>
                    </div>
                  }
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </div>
        </div>
      </form>
      </div>
            </div>
          </div>
      <div class="col-lg-6 right-image p-r-0">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5980900687136!2d72.89197194942717!3d19.12527978699616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c80e4988253f%3A0xf8fe3fa4bb6547c!2sL%26T%20Infotech%20Limited%20-%20LTI!5e0!3m2!1sen!2sin!4v1609831321581!5m2!1sen!2sin"
       width="600" height="450" frameborder="0" style={{border:"0",height:"440px",width:"800px"}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        </div>
        </div>
        <Footer/>
        </div>
      
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}