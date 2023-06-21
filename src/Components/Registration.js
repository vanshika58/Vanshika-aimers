import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Registration extends Component {
  static propTypes = {

  }

  render() {
    return (
      <>
        <div class="container" style={{width:' 60%'}}>
        <h1 style={{marginLeft: '42%'}}>Registration</h1>
        <form action="/action_page.php">
          <div class="form-group">
            <label for="text">Name</label>
            <input type="text" class="form-control" id="name" placeholder="Enter name" name="name" required/> 
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" class="form-control" id="email" placeholder="Enter your email" name="email" required/>
          </div>
          <div class="form-group">
            <label for="Branch">Branch</label>
            <input  type="text" class="form-control" id="text" placeholder="Enter your branch" name="Branch" required/>
          </div>
          <div class="form-group">
            <label for="email">DOB</label>
            <input  type="date" class="form-control" id="DOB" placeholder="Enter date of birth" name="DOB" required/>
          </div>
          <div class="form-group">
            <label for="pwd">Year</label>
            <input type="number" class="form-control" id="year" placeholder="enter year of study" name="year" required/>
          </div>
          <div class="form-group">
            <label for="pwd">Resume</label>
            <input type="file" class="form-control" id="file" placeholder="Enter your resume" name="file" required/>
          </div>
          <div class="form-group">
            <label for="pwd">contact</label>
            <input type="contact number" class="form-control" id="contact" placeholder="Enter your phone.no" name="contact" required/>
          </div>
          <div class="form-group">
            <label for="pwd">addres</label>
            <input type="addres" class="form-control" id="addres" placeholder="Enter your Addres" name="addres" required/>
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" required/>
          </div>
         
          <div class="checkbox">
            <label><input type="checkbox" name="remember" required/> Remember me</label>
          </div>
          <button onclick="myFunction()" type="submit" class="btn btn-primary btn-dark btn-lg btn-block" onClick={()=>alert('You are sucessfully Registered')}>Submit</button>
        </form>
      </div>
      </>
    )
  }
}

export default Registration
