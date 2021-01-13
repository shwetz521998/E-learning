import './App.css';
import { Card1 } from './Card1';
import Carousel from './Carousel';
import Featured from './Featured';
import Footer from './Footer';
import Navbar from './Navbar';
import { Card2 } from './Card2';
import Info from './Info';
function App() {
  return (
    <body>
  <div>
      <Navbar/>
      <div><Carousel/></div>
      <Info/>
      <div class="fcourses" style={{textAlign:'center', height:'150px',paddingBottom:'2%',paddingTop:'4%'}}>
        <b><h3  class="container-fluid bg-grey" style={{color:'black'}}>FEATURED COURSES </h3></b>
      </div>
      <br></br><br></br>
      <div  class="container-fluid bg-grey" style={{paddingBottom:'4%',paddingTop:'0%'}} ><Card2/></div>
      <div  class="container-fluid bg-grey" style={{paddingBottom:'4%',paddingTop:'0%'}} ><Card1/></div>
      <div><Footer/></div> 

  </div>
</body>
  );
}

export default App;