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
import { Row } from "react-bootstrap";
import {Col} from "react-bootstrap";

const CourseOption = () => {
  let firstDaty = 1;
  
  const [showSearchAlert, setShowSearchAlert] = useState(false);
  return (
    <> 
        <div class="row">
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
            <Link  to="/instructordashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{ color: "black" }} icon="columns">
                {" "}
                <dt>Dashboard</dt>
              </CDBSidebarMenuItem>
            </Link>
            <Link to="/messagegroup">
              <CDBSidebarMenuItem style={{ color: "black" }} icon="comments">
                <dt>Message</dt>
              </CDBSidebarMenuItem>
            </Link>
            <NavLink   to="/courses" activeClassName="activeClicked">
              <CDBSidebarMenuItem style={{ color: "black" }} icon="book-reader">
                <dt>Courses</dt>
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
    </div>
   
    <div style={{ display: "flex", flexDirection: "row" ,width:"100%"}}>
    <Link  to="/courses">  Back</Link>
          
          <div class="row">
            <h1 className="p-3">Continue Learning</h1>
  <div class="column" style={{width: '30%', marginTop:'2%'}}>
    <div class="card">
    <Row>
        <Col  ><img  src="LearnUI.png" /></Col>
        <Col style={{marginTop:'5%'}}>    <Link to="/coursecontinue" style={{color:'black',fontWeight:'bold'}}>fundamental of UI-UX design</Link> 
         <Row className="p-5" ><Col >Price:</Col><Col><h4>2,000</h4></Col></Row>
         </Col>
      </Row>
    </div>
  </div>
  <div class="column" style={{width: '30%', marginTop:'2%'}}>
    <div class="card">
    <Row>
        <Col><img src="LearnUI.png" /></Col>
        <Col style={{marginTop:'5%'}}>    <Link to="/coursecontinue" style={{color:'black',fontWeight:'bold'}}>fundamental of UI-UX design</Link> 
         <Row className="p-5" ><Col>Price:</Col><Col><h4>2,000</h4></Col></Row>
         </Col>
      </Row>
    </div>
  </div>
  <div class="column" style={{width: '30%', marginTop:'2%'}}>
    <div class="card">
    <Row>
        <Col><img src="LearnUI.png" /></Col>
        <Col style={{marginTop:'5%'}}>    <Link to="/coursecontinue" style={{color:'black',fontWeight:'bold'}}>fundamental of UI-UX design</Link> 
         <Row className="p-5" ><Col>Price:</Col><Col><h4>2,000</h4></Col></Row>
         </Col>
      </Row>
    </div>
  </div>
  <div class="column" style={{width: '30%', marginTop:'2%'}}>
    <div class="card">
    <Row>
        <Col><img src="LearnUI.png" /></Col>
        <Col style={{marginTop:'5%'}}>    <Link to="/coursecontinue" style={{color:'black',fontWeight:'bold'}}>fundamental of UI-UX design</Link> 
         <Row className="p-5" ><Col>Price:</Col><Col><h4>2,000</h4></Col></Row>
         </Col>
      </Row>
    </div>
  </div>

  <div class="column" style={{width: '30%', marginTop:'2%'}}>
    <div class="card">
  
        <div style={{textAlign:'center'}} className="p-5">
        <Link to="/addcourse1">+ ADD Course</Link>
          
        
    </div>
  </div>
   
</div>
    </div> </div> </div></div> 
    </>
  );
};

export default CourseOption;