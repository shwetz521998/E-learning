import React, { Component } from 'react'
import './App.css';
export class Footer extends Component {
    render() {
        return (
<footer class="footer">
<div class="container bottom_border">

<div class="row">
<div class=" col-sm-4 col-md  col-6 col">
<h5 class="headin5_amrc col_white_amrc pt2">All Courses</h5>
<ul class="footer_ul_amrc">
<li><a href="./AllCourses">Java</a></li>
<li><a href="./AllCourses">Artificial Intelligence</a></li>
<li><a href="./AllCOurses">MERN STACK</a></li>
<li><a href="./AllCourses">Python</a></li>
<li><a href="./AllCourses">Web Development</a></li>
<li><a href="./AllCOurses">Quiz</a></li>
</ul>
</div>

<div class=" col-sm-4 col-md col-sm-4  col-12 col">
<h5 class="headin5_amrc col_white_amrc pt2">Contact Us</h5>
<p>LearnAtEase is great enablers for students as they can find information about the syllabus, extra reference articles, coursework and even live tutorial videos and lectures</p>
<p><i class="fa fa-location-arrow"></i> 9878/25 sec 9 shraddha 35 </p>
<p><i class="fa fa-phone"></i>  +91-9909878398  </p>
<p><i class="fa fa fa-envelope"></i> LearnAtEase@example.com  </p>
</div>

<div class=" col-sm-4 col-md  col-6 col">
<h5 style={{paddingLeft:"50px"}} class="headin5_amrc col_white_amrc pt2">Login</h5>
<ul class="footer_ul_amrc">
<li style={{paddingLeft:"50px"}} ><a href="./Login">Sign-up</a></li>
<li style={{paddingLeft:"50px"}} ><a href="./Profile">Account</a></li>
<li style={{paddingLeft:"50px"}} ><a href="/">Log Out</a></li>
</ul>
</div>


<div class=" col-sm-4 col-md  col-12 col">
<h5 class="headin5_amrc col_white_amrc pt2">Course Details</h5>
<ul class="footer_ul2_amrc">
<li><a href="/Pythoncourse"><p>About Course</p></a></li>
<li><a href="/Pythoncourse"><p>Register for Course</p></a></li>
<li><a href="/Pythoncourse"><p>Prerequisites</p></a></li>
</ul>
</div>
</div>
</div>


<div class="container">
<ul class="foote_bottom_ul_amrc">
<li><a href="/">Home</a></li>
<li><a href="/">Profile</a></li>
<li><a href="/">All Courses</a></li>
<li><a href="/">Register</a></li>
<li><a href="/">Login</a></li>
<li><a href="/">Contact</a></li>
</ul>
<p class="text-center">Copyright @2021 | Designed With by <a href="/">LearnAtEase</a></p>

<ul class="social_footer_ul"><li><a href="https://www.facebook.com/shweta.atease"><i class="fab fa-facebook-f"></i></a></li>

<li><a href="https://twitter.com/?logout=1610212381837"><i class="fab fa-twitter"></i></a></li>

<li><a href="https://www.linkedin.com/home"><i class="fab fa-linkedin"></i></a></li>

<li><a href="https://www.instagram.com/lea.rnatease/"><i class="fab fa-instagram"></i></a></li>
</ul>
</div>

</footer>

            
        )
    }
}

export default Footer