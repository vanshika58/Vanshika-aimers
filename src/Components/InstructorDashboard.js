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
const InstructorDashboard = () => {
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
        <div  style={{ width: "100%", padding: "3%" }}>
         
          
          <div class="row">
  <div class="column"style={{width:'25%',padding:'3%'}}  >
    <div class="card" >
    <div className="d-flex flex-row">
           <MDBIcon className="p-4" fas icon="school" />
 <div className="pt-1">
 
 <p className="small text-muted">Ongoing courses</p>
 <Link to="messagegroup" className="fw-bold mb-5" style={{color:'black'}}>12 courses</Link>
 </div></div>
    </div>
  </div>
  <div class="column"style={{width:'25%',padding:'3%'}}  >
    <div class="card" >
    <div className="d-flex flex-row">
           <MDBIcon className="p-4" fas icon="user-graduate" />
 <div className="pt-1">

 <p className="small text-muted">Student Enrolment</p>
 <Link to="messagegroup" className="fw-bold mb-5" style={{color:'black'}}>110 Enrolments</Link>
 </div></div>
    </div>
  </div>
  <div class="column"style={{width:'25%',padding:'3%'}}  >
    <div class="card" >
    <div className="d-flex flex-row">
           <MDBIcon className="p-4" fas icon="check-circle" />
 <div className="pt-1">

 <p className="small text-muted">Completed Courses</p>
 <Link to="messagegroup" className="fw-bold mb-5" style={{color:'black'}}>110 courses</Link>
 </div></div>
    </div>
  </div>
  <div class="column"style={{width:'25%',padding:'3%'}}  >
    <div class="card" >
    <div className="d-flex flex-row">
           <MDBIcon className="p-4" fas icon="user-friends" />
 <div className="pt-1">

 <p className="small text-muted">Batches</p>
 <Link to="messagegroup" className="fw-bold mb-5" style={{color:'black'}}>5 Batches</Link>
 </div></div>
    </div>
  </div>
   
</div>
{/* <p>FOR PART 2</p> */}
<div>
<Row>  
    <Col className=" p-5">
     
    <Row>   <Col className=" p-5"> <h3>Course Payment</h3> </Col>   <Col className=" p-5"><Link>View pending payment</Link></Col>  </Row> 
    <div class="text-center"> <img src="Daughnut.png" class="img-fluid" alt="" /></div>
    <Row>
       <Col className=" p-5"> <Row><Col sm={4}> <MDBIcon style={{backgroundColor:'blue', height:'30px', width:'30px'}} className="p-4" fas icon="square" /></Col> <Col sm={8}>Completed payment</Col> </Row> </Col>
       <Col className=" p-5"> <Row><Col sm={4}> <MDBIcon style={{backgroundColor:'skyblue', height:'30px', width:'30px'}} className="p-4" fas icon="square" /></Col> <Col sm={8}>pending payment</Col> </Row> </Col>
        </Row> 
 </Col>  
    <Col className=" p-5 ml-5" >
    <Row>   <Col className=" p-5"> <h3>Continue Learning</h3> </Col>   <Col className=" p-5"><Link>View All</Link></Col>  </Row> 
    <div className="card p-5"><h4>post graduation certification program </h4><p>May 5th - June 5th </p></div>
    <div className="card p-5"><h4>post graduation certification program </h4><p>May 5th - June 5th </p></div>
    </Col>  
  </Row>  
</div>
          
          <div style={{borderColor:'black' ,padding:'3%', width:'100%' }}>
           {/* <p>for callender</?p> */}
             <FullCalendar
        defaultView="dayGridMonth"
        firstDay={firstDaty}
        locale="es"
        header={{
          left: "prev,next",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        themeSystem="Simplex"
        plugins={[dayGridPlugin]}
        events={events}
      /></div>     </div>   </div> </div> </div>
    </>
  );
};

export default InstructorDashboard;
