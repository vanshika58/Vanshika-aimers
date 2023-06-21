import React , {useState}from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Calendar } from '@fullcalendar/core'
import events from "./events";
import { MDBInputGroup, MDBInput, MDBIcon, MDBAlert, MDBBtn } from 'mdb-react-ui-kit';
import { Link, NavLink } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const LearnContinue = () => {
  let firstDaty = 1;
  
  const [showSearchAlert, setShowSearchAlert] = useState(false);
  return (
    <>  <div class="row">
    <div class="col-4 col-md-3"><div
      style={{ display: "flex", height: "100vh", overflow: "scroll initial", width:'100%'}}
    >
      <CDBSidebar textColor="black" backgroundColor="white">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Logo
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <Link  to="/overview" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{ color: "black" }} icon="columns">
                {" "}
                <dt>Overview</dt>
              </CDBSidebarMenuItem>
            </Link>
            <Link to="/messagegroup">
              <CDBSidebarMenuItem style={{ color: "black" }} icon="comments">
                <dt>Message</dt>
              </CDBSidebarMenuItem>
            </Link>
            <NavLink   to="/learnmain" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{ color: "black" }} icon="book-reader">
                <dt>Learn</dt>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink   to="/assignmentmain" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{ color: "black" }} icon="boxes">
                <dt>Assignment</dt>
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink   to="/testquiz" activeClassName="activeClicked">
              <CDBSidebarMenuItem
                style={{ color: "black" }}
                icon="exclamation-circle"
              >
                <dt>Test/quiz</dt>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink   to="/Batches" activeClassName="activeClicked">
              <CDBSidebarMenuItem
                style={{ color: "black" }}
                icon="user-friends"
              >
                <dt>Batches</dt>
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink   to="/Callender" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{ color: "black" }} icon="calendar">
                <dt>Callendar</dt>
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar></div></div>
      <div class="col-18 col-md-9">   <div className="p-5 ">
      <MDBRow><MDBCol size='9'><MDBInputGroup >
        <MDBInput />
        <MDBBtn onClick={() => setShowSearchAlert(true)} rippleColor='dark'>
          <MDBIcon icon='search' />
        </MDBBtn>
      </MDBInputGroup></MDBCol>
       <MDBCol style={{marginLeft:"15%"}}>  <MDBIcon style={{padding:'3%'}} icon='bell-slash' />
       <MDBIcon style={{padding:'3%'}} icon='comments' />
       <img style={{height:'40px',width:'40px',padding:'3%'}} src="Elips.png"/></MDBCol>
      </MDBRow>
    </div>  <div style={{ display: "flex", flexDirection: "row" , padding:'%'}}>
        <div style={{ width: "100%"}}>
         <Link to="/learnmain">  Back</Link>
          
          <div class="row">
            <h1 className="p-3">Continue Learning</h1>
  <div class="column" style={{width: '30%', marginTop:'2%'}}>
    <div class="card">
    <Row>
        <Col><img src="LearnUI.png" /></Col>
        <Col style={{marginTop:'5%'}}>    <Link  to="/learncourse" style={{color:'black',fontWeight:'bold'}}>fundamental of UI-UX design</Link>
           <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width:"25%", ariaValuenow:"25", ariaValuemin:"0", ariavaluemax:"100"}}></div>
</div>
<p className="mt-2" >40% complete</p>
     </Col>
      </Row>
    </div>
  </div>
  <div class="column" style={{width: '30%', marginTop:'2%'}}>
    <div class="card">
    <Row>
        <Col><img src="LearnUI.png" /></Col>
        <Col style={{marginTop:'5%'}}>    <Link to="/learncourse" style={{color:'black',fontWeight:'bold'}}>fundamental of UI-UX design</Link>
           <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width:"25%", ariaValuenow:"25", ariaValuemin:"0", ariavaluemax:"100"}}></div>
</div><p className="mt-2">40% complete</p>   </Col>
      </Row>
    </div>
  </div>
  <div class="column" style={{width: '30%', marginTop:'2%'}}>
    <div class="card">
    <Row>
        <Col><img src="LearnUI.png" /></Col>
        <Col style={{marginTop:'5%'}}>    <Link to="/learncourse" style={{color:'black',fontWeight:'bold'}}>fundamental of UI-UX design</Link>
           <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width:"25%", ariaValuenow:"25", ariaValuemin:"0", ariavaluemax:"100"}}></div>
</div>
<p className="mt-2">40% complete</p></Col>
      </Row>
    </div>
  </div>
  <div class="column" style={{width: '30%', marginTop:'2%'}}>
    <div class="card">
    <Row>
        <Col><img src="LearnUI.png" /></Col>
        <Col style={{marginTop:'5%'}}>    <Link to="/learncourse" style={{color:'black',fontWeight:'bold'}}>fundamental of UI-UX design</Link>
           <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width:"25%", ariaValuenow:"25", ariaValuemin:"0", ariavaluemax:"100"}}></div>
</div><p style={{marginTop:'2%'}} >40% complete</p>   </Col>
      </Row>
    </div>
  </div>
   
</div>
      
        </div>
       
          
         

      </div>
    </div></div> 
   
    
    </>
  );
};

export default LearnContinue;