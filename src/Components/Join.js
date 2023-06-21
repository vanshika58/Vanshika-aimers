import React from 'react';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function Join() {

  return (
    <MDBContainer fluid className="p-3 my-5 h-custom" style={{width:'80%' ,height:'70%'}}>

      <MDBRow>

        <MDBCol col='10' md='6'>
          <img src="Signin.png" style={{width:'90%' ,height:'80%'}} class="img-fluid"  alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'  >
            <h1 style={{size:'xx-large' , fontWeight:'bolder' }}>Join Us</h1>
           
          <p className="small fw-bold  pt-1 mb-2 ">Set a new password to register with us</p>
           <label wrapperClass='mt-5' style={{fontWeight:'bold'}}>Mobile.No</label>
          <MDBInput wrapperClass='mb-2'  id='formControlLg' placeholder='915-----94' type='number' size="lg"/>
          <label style={{fontWeight:'bold'}}>Set password</label>
          <MDBInput wrapperClass='mb-4' id='formControlLg' placeholder='A-Z,a-z,0-9 and @*#' type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
         
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5 btn-primary" style={{width:'100%'}} size='lg'>  <a style={{color:'white'}} href='./Signin.js'>Proceed</a></MDBBtn>
            
          </div>
           
        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default Join;