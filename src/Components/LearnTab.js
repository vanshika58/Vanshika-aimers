import { useState } from "react";
import "./App.css";

import Carousel, { consts } from 'react-elastic-carousel';
import Rate from "./Rate";
import BasicRating from "./Rate";


function LearnTab() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container" >
      <div className="bloc-tabs" >
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Overview
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Study Material
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Certificate
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Review
        </button>
      </div>

      <div className="content-tabs p-3" >
        <div 
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2 className="p-3">Overview</h2>
        
          <p className="p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
    
          <div className="p-3" style={ {height:'70%'}}> 
          <Carousel   >
    <div class="row">
    <div class="col"> <div class="card" >
  <div class="card-body">
  <img style={{height:'60%'}} class="card-img-top" src="UI-UX2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
    <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img style={{height:'60%'}} class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>

</div>
<div class="row" style={{width:'100%',height:'80%'}}>
<div class="col"> <div class="card" >
  <div class="card-body">
  <img style={{height:'60%'}}  class="card-img-top" src="n2.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img style={{height:'60%'}} class="card-img-top" src="n4.jpeg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>

</div>
<div class="row" style={{width:'100%',height:'80%'}}>
<div class="col"> <div class="card" >
  <div class="card-body">
  <img style={{height:'60%'}} class="card-img-top" src="UI-UX3.jpg" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
   <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
  <div class="col"> <div class="card" >
  <div class="card-body">
  <img style={{height:'60%'}} class="card-img-top" src="UI-UX1.png" alt="Card image cap"/>
    <h5 class="card-title">The fundamental of UI/UX design</h5>
    <p style={{color:'gray'}}>John Doe . 3 weeks</p>
  <pre>  <img src='star.png' style={{height:'30px',width:'30px', fontWeight:'bolder'}}/> 4.8                  2,000</pre>
  </div>
</div></div>
 
</div>
  </Carousel>
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2 className="p-3">Certificate</h2>
         
          <img style={{height:'60%' ,width:'50%'}} class="card-img-top" src="certificate.jpg" alt="Card image cap"/>
          
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <h2 className="p-3">How would you ratye this course</h2>
         
           <BasicRating/>
        <h2>Remark</h2>
        <div style={{width:'100%'}}><input type="text" /></div>
        </div>
      </div>
    </div>
  );
}

export default LearnTab;