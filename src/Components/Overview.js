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

const Overview = () => {
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
    </div>
       
    <div className="pl-0" style={{ display: "flex", flexDirection: "row" ,width:"100%"}}>
        <div  style={{ width: "70%", padding: "3%" ,paddingLeft:'0%' }}>
         
          
          <div class="row">
  <div class="column"style={{width:'33%',padding:'3%'}}  >
    <div class="card" style={{padding:'3%'}} >
      <h3 style={{color:'gray'}}>Ongoing Courses</h3>
      <h2 style={{fontWeight:'bolder'}}>0 Courses</h2>
    </div>
  </div>
  <div class="column" style={{width:'33%',padding:'3%'}}>
    <div class="card"style={{padding:'3%'}} >
      <h3 style={{color:'gray'}}>Completed Courses</h3>
      <h2 style={{fontWeight:'bolder'}}>0 Courses</h2></div>
  </div>
  <div class="column"style={{width:'33%',padding:'3%'}}>
    <div class="card" style={{padding:'3%'}}>
    <h3 style={{color:'gray'}}>Certificates</h3>
      <h2 style={{fontWeight:'bolder'}}>0 Certificates</h2>
    </div>
  </div>
   
</div>  <div style={{borderColor:'black' ,padding:'3%', width:'100%' }}>
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
      /></div>
        </div>
        {/* <p>Continue learning</p> */}
        <div  style={{ width: "30%" }}>
          <div>
          <h2>
           Continue learning        
          </h2> <br></br>
          <div className="card m-4" style={{padding:'3%'}}>the fundamental of ui ux design
          <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width:"25%", ariaValuenow:"25", ariaValuemin:"0", ariavaluemax:"100"}}></div>
</div>
       <p >40% Complete</p>       
    </div>
          <div className="card m-4" style={{padding:'3%'}}>the fundamental of ui ux design
          <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width:"25%", ariaValuenow:"25", ariaValuemin:"0", ariavaluemax:"100"}}></div>
</div>
       <p >40% Complete</p>       
          </div>
        </div>
        <div className="m-5">
          <h2>
           Assignment       
          </h2> <br></br>
          <div className="card m-4" style={{padding:'3%'}}>Post graduate certificate program in managment
       <pre className="m-2">John Doe             1 day left</pre>       
    </div>
          <div className="card m-4"  style={{padding:'3%'}}>Post graduate certificate program in managment

       <pre className="m-2">John Doe            1 day left</pre>       
          </div>
        </div>
        </div>
      </div>
   
    </div>
  
</div>
   
    </>
  );
};

export default Overview;

