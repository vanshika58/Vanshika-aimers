import { useState } from "react";
import "./App.css";
import {  MDBIcon} from 'mdb-react-ui-kit';
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import Row from 'react-bootstrap/Row';
import { Link } from "react-router-dom";
function AssignmentTab() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
        Pending
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Submited
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
        Graded
        </button>
       
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
              <div class="row">
              <div className="column p-3 mt-3" style={{width: '30%'}}>
    <div class="card">
    <Row> <Link to="/assignmentdone" style={{color:"black" ,fontSize:'xx-larger',fontweight:'bplder'}} className="p-3">Fundamental of UI-UX design</Link>
        <MDBRow className="p-3"> <MDBCol md='8'>John Doe</MDBCol>
      <MDBCol md='4'><p>1 Day left</p>
        </MDBCol>
    </MDBRow>      </Row>
    </div>
  </div>
  <div className="column p-3 mt-3" style={{width: '30%'}}>
    <div class="card">
    <Row>
        <Link to="/assignmentdone" style={{color:"black" ,fontSize:'xx-larger',fontweight:'bplder'}}className="p-3">Fundamental of UI-UX design</Link>
 
      </Row><MDBRow className="p-3"><MDBCol md='8'>John Doe</MDBCol>
      <MDBCol md='4'> <p>1 Day left</p></MDBCol>
    </MDBRow>
    </div>
  </div>
  <div className="column p-3 mt-3" style={{width: '30%'}}>
    <div class="card">
    <Row>
    <Link to="/assignmentdone" style={{color:"black" ,fontSize:'xx-larger',fontweight:'bplder'}} className="p-3">Fundamental of UI-UX design</Link>
        <MDBRow className="p-3"><MDBCol md='8'>John Doe</MDBCol>
      <MDBCol md='4'> <p>1 Day left</p></MDBCol>
    </MDBRow>
      </Row>
    </div>
  </div>
  <div className="column p-3 mt-3" style={{width: '30%'}}>
    <div class="card">
    <Row>
    <Link to="/assignmentdone" style={{color:"black" ,fontSize:'xx-larger',fontweight:'bplder'}} className="p-3">Fundamental of UI-UX design</Link>
        <MDBRow className="p-3"><MDBCol md='8'>John Doe</MDBCol>
      <MDBCol md='4'> <p>1 Day left</p></MDBCol>
    </MDBRow>
      </Row>
    </div>
  </div>
   
</div>
         
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
    
          <div > 
          <div class="row">
              <div class="column" style={{width: '30%', padding:'2%'}}>
    <div class="card">
    <Row><Link to="/assignmentdone" style={{color:"black" ,fontSize:'xx-larger',fontweight:'bplder'}} className="p-3">UX design</Link>
        <MDBRow className="p-3"><MDBCol md='8'>15 May</MDBCol>
      <MDBCol md='4'><p> Completed</p></MDBCol>
    </MDBRow>
      </Row>
    </div>
  </div>

  <div class="column" style={{width: '30%', padding:'2%'}}>
    <div class="card">
    <Row>
    <Link to="/assignmentdone" style={{color:"black" ,fontSize:'xx-larger',fontweight:'bplder'}} className="p-3">UX design</Link>
        <MDBRow className="p-3"><MDBCol md='8'>15 May</MDBCol>
      <MDBCol md='4'><p> Completed</p></MDBCol>
    </MDBRow>
      </Row>
    </div>
  </div>
  <div class="column"  style={{width: '30%',  padding:'2%'}}>
    <div class="card">
    <Row>
    <Link to="/assignmentdone" style={{color:"black" ,fontSize:'xx-larger',fontweight:'bplder'}}  className="p-3">UX design</Link>
        <MDBRow className="p-3"><MDBCol md='8'>15 May</MDBCol>
      <MDBCol md='4'><p> Completed</p></MDBCol>
    </MDBRow>
      </Row>
    </div>
  </div>
  <div class="column" style={{width: '30%', padding:'2%'}}>
    <div class="card">
    <Row>
    <Link to="/assignmentdone" style={{color:"black" ,fontSize:'xx-larger',fontweight:'bplder'}} className="p-3">UX design</Link>
        <MDBRow className="p-3"><MDBCol md='8'>15 May</MDBCol>
      <MDBCol md='4'><p> Completed</p></MDBCol>
    </MDBRow>
      </Row>
    </div>
  </div>
   
</div>
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
                        <div class="row">
              <div className="column mt-4" style={{width: '30%'}}>
    <div class="card">
    <Row>
    <Link to="/assignmentdone" style={{color:"black" ,fontSize:'xx-larger',fontweight:'bplder'}}className="p-3">Fundamental of UI-UX design</Link>
        <h5> <MDBIcon icon='calendar' />  15 May</h5>
       <MDBRow className="p-3"><MDBCol md='8'>7 out of 15 marks</MDBCol>
      <MDBCol md='4'><p> Completed</p></MDBCol>
    </MDBRow>
      </Row>
    </div>
  </div>
  <div className="column mt-4" style={{width: '30%'}}>
    <div class="card">
    <Row>
    <Link to="/assignmentdone" style={{color:"black" ,fontSize:'xx-larger',fontweight:'bplder'}} className="p-3">Fundamental of UI-UX design</Link>
        <h5> <MDBIcon icon='calendar' />  15 May</h5>
       <MDBRow className="p-3"><MDBCol md='8'>7 out of 15 marks</MDBCol>
      <MDBCol md='4'><p> Completed</p></MDBCol>
    </MDBRow>
      </Row>
    </div>
  </div>
  <div className="column mt-4" style={{width: '30%'}}>
    <div class="card">
    <Row> <Link to="/assignmentdone" style={{color:"black" ,fontSize:'xx-larger',fontweight:'bplder'}} className="p-3">Fundamental of UI-UX design</Link>
        <h5> <MDBIcon icon='calendar' />  15 May</h5>
       <MDBRow className="p-3"><MDBCol md='8'>7 out of 15 marks</MDBCol>
      <MDBCol md='4'><p> Completed</p></MDBCol>
    </MDBRow>
      </Row>
    </div>
  </div>
  <div className="column mt-4" style={{width: '30%'}}>
    <div class="card" >
    <Row> <Link to="/assignmentdone" style={{color:"black" ,fontSize:'xx-larger',fontweight:'bplder'}} className="p-3">Fundamental of UI-UX design</Link>
        <h5> <MDBIcon icon='calendar' />  15 May</h5>
       <MDBRow className="p-3"><MDBCol md='8'>7 out of 15 marks</MDBCol>
      <MDBCol md='4'><p> Completed</p></MDBCol>
    </MDBRow>
      </Row>
    </div>
  </div>
   
</div>
          
        </div>
        
      </div>
    </div>
  );
}

export default AssignmentTab;