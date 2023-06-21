
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { MDBInputGroup, MDBInput, MDBIcon, MDBAlert, MDBBtn } from 'mdb-react-ui-kit';
import {
    
    MDBCard,
    MDBCardBody,
    MDBTypography,
    MDBTextArea,
    MDBCardHeader,
  } from "mdb-react-ui-kit";
  import { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

const MessageBatch = () => {
 
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
    <div style={{ display: "flex", flexDirection: "row" ,width:"90%"}}>
        <div style={{ width: "30%", margin: "3%" }}> 
         {/* <p>icon</p> */}
        <div class="row no-gutters">
        <div class="col-12 col-sm-6 col-md-8 "><h1 className="p-3"> Message</h1></div>
  <div class="col-6 col-md-4">
  <Link  style={{padding:'3%'}} className="fw-bold  " to="/messagelist"><MDBIcon className="p-4" fas icon="paper-plane" /></Link>
  
  <Link  style={{padding:'3%'}} className="fw-bold " to="/messagebatch"><MDBIcon className="p-4" fas icon="user-friends" /></Link>
              </div>
         </div>
          {/* <p>search</p> */}
         <MDBInputGroup >
        <MDBInput  />
        <MDBBtn onClick={() => setShowSearchAlert(true)} rippleColor='dark'>
          <MDBIcon icon='search' />
        </MDBBtn>
      </MDBInputGroup>
        <h4 className="p-3">Select a batch to start converstion with student in batches</h4>
             <div className="card p-3 m-5" > <div className="cardbody">
                <h5>Post graduation certification program in general managment</h5>
                <a   style={{color:'gray' ,marginBottom:'5%'}} className="" href="#!">
                <MDBIcon fas icon="calendar" /> may 5th - june 5th
              </a> 
              <Row className=""><Col sm={8}><MDBIcon fas icon="user-friends" /> Batch 1B </Col> <Col sm={4}>   <Link >Running</Link></Col>   </Row>
                </div></div>
                <div className="card p-3 m-5" > <div className="cardbody">
                <h5>Post graduation certification program in general managment</h5>
                <a  style={{color:'gray' ,marginBottom:'5%'}} className="" href="#!">
                <MDBIcon fas icon="calendar" /> may 5th-hune 5th
              </a> 
              <Row className=""><Col sm={8}><MDBIcon fas icon="user-friends" /> Batch 1B </Col> <Col sm={4}>   <Link >Running</Link></Col>   </Row>
                            
                </div></div>
                     </div>
      
        <div style={{ width: "70%" }}> 
        <div><h1>John Doe</h1><p>Online</p></div>
        {/* <P>chat screen</P> */}
          <div style={{height:'70%',width:'80%',marginTop:'5%'}}>
          <MDBCardBody >
                <div className="d-flex flex-row justify-content-start">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />  
                  <div>
                    <p
                      className="small p-2 ms-3 mb-1 rounded-3"
                      style={{ backgroundColor: "#f5f6f7" }}
                    >
                      Hi
                    </p>
                    <p
                      className="small p-2 ms-3 mb-1 rounded-3"
                      style={{ backgroundColor: "#f5f6f7" }}
                    >
                      How are you ...???
                    </p>
                    <p
                      className="small p-2 ms-3 mb-1 rounded-3"
                      style={{ backgroundColor: "#f5f6f7" }}
                    >
                      What are you doing tomorrow? Can we come up a bar?
                    </p>
                    <p className="small ms-3 mb-3 rounded-3 text-muted">
                      23:58
                    </p>
                  </div>
                </div>

                <div className="divider d-flex align-items-center mb-4">
                  <p
                    className="text-center mx-3 mb-0"
                    style={{ color: "#a2aab7" }}
                  >
                    Today
                  </p>
                </div>

                <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                  <div>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                      Hiii, I'm good.
                    </p>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                      How are you doing?
                    </p>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                      Long time no see! Tomorrow office. will be free on sunday.
                    </p>
                    <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                      00:06
                    </p>
                  </div>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%"  }}
                  />
                </div>

                <div className="d-flex flex-row justify-content-start mb-4">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%"  }}
                  />
                  <div>
                    <p
                      className="small p-2 ms-3 mb-1 rounded-3"
                      style={{ backgroundColor: "#f5f6f7" }}
                    >
                      Okay
                    </p>
                    <p
                      className="small p-2 ms-3 mb-1 rounded-3"
                      style={{ backgroundColor: "#f5f6f7" }}
                    >
                      We will go on Sunday?
                    </p>
                    <p className="small ms-3 mb-3 rounded-3 text-muted">
                      00:07
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-end mb-4">
                  <div>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                      That's awesome!
                    </p>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                      I will meet you Sandon Square sharp at 10 AM
                    </p>
                    <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
                      Is that okay?
                    </p>
                    <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                      00:09
                    </p>
                  </div>
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                    alt="avatar 1"
                    style={{ width: "45px", height: "100%" }}
                  />
                </div>

              </MDBCardBody>
          </div>
          <div >
          <div class="row">
    <div class="col">
    <a className="ms-3 pl-5 text-muted"  href="#!">
                <MDBIcon className="pl-3"  fas icon="paperclip" />
              </a>
              <a  className="ms-3 p-3 text-muted" href="#!">
                <MDBIcon className="pl-3" fas icon="smile" />
              </a>
    </div>
    <div class="col-6">
      Message
    </div>
    <div class="col">
    <a  className="" href="#!">
                <MDBIcon fas icon="paper-plane" />
              </a>

    </div>
  </div>
          </div>
        </div>
      </div>
    </div></div>
   

    </>
  );
};

export default MessageBatch;