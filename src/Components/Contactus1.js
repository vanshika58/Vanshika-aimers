import React, { Component } from "react";
import PropTypes from "prop-types";

export class Contactus1 extends Component {
  static propTypes = {};
 
  render() {
    const style1= {height : '50px'};
    const style2={width:'50px'};
   
    return (
      <>
        <section class="mb-4 mt-4">
          <div class="container " style={{alignContent:'center' , marginLeft:'10%'}}>
            <h2 class="h1-responsive font-weight-bold text-center my-4" style={{marginRight:'40%'}}>
              Contact us
            </h2>
            <p class="text-center w-responsive  mb-5" style={{marginRight:'35%'}}>
              Do you have any questions? Please do not hesitate to contact us
              directly. Our team will come back to you within a matter of hours
              to help you.
            </p>

            <div class="row" style={{alignContent:'center'}}>
              <div class="col-sm-8">
                <div class="col">
                  <label for="Name">Name</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your name"
                    name="namer"
                  />
                </div>
                <div class="col" style={{padding:'1%'}}>
                  <label for="email">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="email"
                    name="email"
                  />
                </div>
                <div class="col">
                  <label for="Message">Your Message</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter your Message"
                    name="Message"
                  />
                </div>
                <button class="btn btn-primary btn-block btl-lg btn-dark mt-5 p-3 " onClick={()=>alert('You are request as sended to our srver')}> Send</button>
              </div>
              <div class="col-sm-4">
                <img style={{...style1,...style2}} src="/call.png" alt="" />
                <p>9994-----78</p>
                <img
                  style={{...style1,...style2}}
                  src=" /location.png"
                  alt=""
                />
                <p>bhopal, India</p>
                <img style={{...style1,...style2}} src=" /mail.png" alt="" />
                <p>STudy12--@gmail.com</p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Contactus1;
