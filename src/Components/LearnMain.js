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
import Button from 'react-bootstrap/Button';
const  LearnMain = () => {
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
    <div style={{ display: "flex", flexDirection: "row" ,width:"100%"}}>
        <div style={{ width: "70%", padding: "3%" }}>
         
          
          <div class="row">
            <h1 className="pl-5">Live class</h1>
          <img src="LearnMain.png"  style={{height:'20%' , width:'90%' ,padding:'3%'}}/>
          <Row className="ml-4 p-4"> 
        <Col sm={8}> <h1>Post graduation certification program in general managment</h1>
               <p><MDBIcon icon='user' /> John Doe  <MDBIcon icon='clock' /> 15 hour  <MDBIcon icon='google' /> google meet</p>
        </Col>
        <Col className="p-5" sm={4}><Button size="lg" variant="outline-primary">Join Now</Button>{' '}</Col>
      </Row>
   
</div>
          
          <div style={{padding:'3%', width:'80%' , height:'20%'}}>
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
        <div className="p-3" style={{ width: "30%" }}>
          <div>
          <h2>
           Continue learning        
          </h2> <br></br>
          <div className="card p-3 mt-3"><Link className="mt-3" to="/learncontinue" style={{color:'black', fontWeight:'bold'}}>The fundamental of UI/UX design</Link>

          <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width:"25%", ariaValuenow:"25", ariaValuemin:"0", ariavaluemax:"100"}}></div>
</div>
<p className="mt-3" >40% complete</p>
      
    </div>
          <div className="card p-3 mt-3" ><Link className="mt-3" to="/learncontinue" style={{color:'black', fontWeight:'bold'}}>The fundamental of UI/UX design</Link>

          <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width:"25%", ariaValuenow:"25", ariaValuemin:"0", ariavaluemax:"100"}}></div>
</div><p className="mt-3" >40% complete</p>      
          </div>
        </div>
        <div className="card p-3 mt-3" > 
<Link className="mt-3" to="/learncontinue" style={{color:'black', fontWeight:'bold'}}>The fundamental of UI/UX design</Link>
          <div class="progress">
  <div class="progress-bar bg-success" role="progressbar" style={{width:"25%", ariaValuenow:"25", ariaValuemin:"0", ariavaluemax:"100"}}></div>
</div>
<p className="mt-3">40% complete</p>      
    </div>
        </div>
      </div> </div>  
    </div>
    </>
  );
};

export default LearnMain;