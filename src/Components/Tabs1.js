import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Carousel, { consts } from 'react-elastic-carousel';


function Tabs1() {
  return (
    <Tabs
      defaultActiveKey="home"
      id="fill-tab-example"
      className="mb-3"
 fill>
      <Tab eventKey="home" tabClassName=" rounded-pill" title="All Courses">
      <Carousel style={{marginBottom:'5%'}} >
    <div class="row" style={{width:'100%'}}>
    <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
    <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
<div class="row" style={{width:'100%'}}>
<div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="n2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="n4.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="n2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="n4.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
<div class="row" style={{width:'100%'}}>
<div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
  </Carousel>
      </Tab>
      <Tab eventKey="Design" tabClassName=" rounded-pill" title="Design">
      <Carousel style={{marginBottom:'5%'}} >
    <div class="row" style={{width:'100%'}}>
    <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
<div class="row" style={{width:'100%'}}>
<div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
<div class="row" style={{width:'100%'}}>
<div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
  </Carousel>
      </Tab>
      
      <Tab eventKey="Computer.Science" tabClassName=" rounded-pill" title="Computer.science">
      <Carousel style={{marginBottom:'5%'}} >
    <div class="row" style={{width:'100%'}}>
    <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
<div class="row" style={{width:'100%'}}>
<div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
<div class="row" style={{width:'100%'}}>
<div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
  </Carousel>
      </Tab>
      <Tab eventKey="Finance" tabClassName=" rounded-pill" title="Finance" >
      <Carousel style={{marginBottom:'5%'}} >
    <div class="row" style={{width:'100%'}}>
    <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
<div class="row" style={{width:'100%'}}>
<div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
<div class="row" style={{width:'100%'}}>
<div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
  </Carousel>
      </Tab>
      <Tab eventKey="Art" tabClassName=" rounded-pill" title="Art">
      <Carousel style={{marginBottom:'5%'}} >
    <div class="row" style={{width:'100%'}}>
    <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
<div class="row" style={{width:'100%'}}>
<div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
<div class="row" style={{width:'100%'}}>
<div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
  </Carousel>
      </Tab>
      <Tab eventKey="Buisness" tabClassName=" rounded-pill"title="Buisness">
      <Carousel style={{marginBottom:'5%'}} >
    <div class="row" style={{width:'100%'}}>
    <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
<div class="row" style={{width:'100%'}}>
<div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
<div class="row" style={{width:'100%'}}>
<div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
  </Carousel>
      </Tab>
      <Tab eventKey="Marketing" tabClassName=" rounded-pill" title="Marketing">
      <Carousel style={{marginBottom:'5%'}} >
    <div class="row" style={{width:'100%'}}>
    <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
<div class="row" style={{width:'100%'}}>
<div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
<div class="row" style={{width:'100%'}}>
<div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
  </Carousel>
      </Tab>
      <Tab eventKey="Coding" tabClassName=" rounded-pill" title="Coding">
      <Carousel style={{marginBottom:'5%'}} >
    <div class="row" style={{width:'100%'}}>
    <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
<div class="row" style={{width:'100%'}}>
<div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
<div class="row" style={{width:'100%'}}>
<div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
</div>
  </Carousel>
      </Tab>
    </Tabs>
  );
}

export default Tabs1;