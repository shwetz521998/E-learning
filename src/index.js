import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import AllCourses from './AllCourses';
import Profile from './Profile';
import Register from './Register';
import Contact from './Contact';
import Login from './Login';
import Footer from './Footer';
import Pythoncourse from './Pythoncourse';
import Content from './Content';
import Content2 from './Content2';
import Java from './Java';
const routing = (  
  <Router> 
  <body>    
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/AllCourses" component={AllCourses} />
        <Route path="/Profile" component={Profile} />
        <Route path="/Register" component={Register} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Login" component={Login} />
        <Route path="/Pythoncourse" component={Pythoncourse}/>
        <Route path="/Java" component={Java}/>
        <Route path="/Content" component={Content}/>
        <Route path="/Content2" component={Content2}/>
</Switch>
    
    
  </body>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()