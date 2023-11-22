import React, { Component } from "react";
import axios from "axios";
import "./Register.css";

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      password: "",
      confirmPassword: "",
      age: "",
      gender: "",
      email: "",
      phone: "",
      emergencyContact: {
        fname: "",
        lname: "",
        relation: "",
        age: "",
        phone: "",
        address: "",
      },
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleEmergencyContactChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => ({
      emergencyContact: {
        ...prevState.emergencyContact,
        [name]: value,
      },
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      // Passwords don't match, show an error message or handle it as needed.
      alert("Passwords do not match");
      return;
    } else {
      alert("Registration successful!");
    }

    // Passwords match, proceed with registration.
    const newUser = {
      fname: this.state.fname,
      lname: this.state.lname,
      password: this.state.password,
      email: this.state.email,
      phone: this.state.phone,
      age: this.state.age,
      gender: this.state.gender,
      emergencyContact: { ...this.state.emergencyContact },
    };

    axios
      .post("http://localhost:8080/register", { newUser }) // Use the full URL with the correct port
      .then((response) => {
        // Handle the response from the server
        console.log(response.data);
      })
      .catch((error) => {
        // Handle any errors that occurred during the request
        console.error(error);
      });

    // Clear form fields
    this.setState({
      password: "",
      confirmPassword: "",
      fname: "",
      lname: "",
      age: "",
      gender: "",
      email: "",
      phone: "",
      emergencyContact: {
        fname: "",
        lname: "",
        relation: "",
        age: "",
        phone: "",
        address: "",
      },
    });
  };

  render() {
    return (
      
      <div className="body">
        <br/>
        <div className="registration-form">
          <h2>Register</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="user-details">
              <div className="form-group">
                <input
                className = "input"
                  type="text"
                  id="fname"
                  name="fname"
                  value={this.state.fname}
                  onChange={this.handleChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="fname">First Name</label>
              </div>
              <div className="form-group">
                <input
                className = "input"
                  type="text"
                  id="lname"
                  name="lname"
                  value={this.state.lname}
                  onChange={this.handleChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="lname">Last Name</label>
              </div>
              <div className="form-group">
                <input
                className = "input"
                  type="password"
                  id="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="password">Password</label>
              </div>
              <div className="form-group">
                <input
                className = "input"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={this.state.confirmPassword}
                  onChange={this.handleChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="confirmPassword">Confirm Password</label>
              </div>
              
              
              <div className="form-group">
                <input
                className = "input"
                  type="email"
                  id="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="email">Email</label>
              </div>
              <div className="form-group">
                <input
                className = "input"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="phone">Phone</label>
              </div>
              <div className="form-group">
                <input
                className = "input"
                  type="number"
                  id="age"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="age">Age</label>
              </div>
              {/* <div className="form-group">
                <input
                className = "input"
                  type="text"
                  id="gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.handleChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="gender">Gender</label>
              </div> */}
              <div className="form-group">
                <select
                  className="input"
                  id="gender"
                  name="gender"
                  value={this.state.gender}
                  onChange={this.handleChange}
                  required
                >
                  <option value="option">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="gender">Gender</label>
                </div>
            </div>
            <h2>Emergency/Alternate Contact</h2>
            <div className="emergency-details">
              <div className="form-group">
                <input
                className = "input"
                  type="text"
                  id="emergencyName"
                  name="fname"
                  value={this.state.emergencyContact.fname}
                  onChange={this.handleEmergencyContactChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="emergencyName">First Name</label>
              </div>
              <div className="form-group">
                <input
                className = "input"
                  type="text"
                  id="emergencyName"
                  name="lname"
                  value={this.state.emergencyContact.lname}
                  onChange={this.handleEmergencyContactChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="emergencyName">Last Name</label>
              </div>
              <div className="form-group">
                <input
                className = "input"
                  type="text"
                  id="emergencyRelation"
                  name="relation"
                  value={this.state.emergencyContact.relation}
                  onChange={this.handleEmergencyContactChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="emergencyRelation">Relation</label>
              </div>
              <div className="form-group">
                <input
                className = "input"
                  type="number"
                  id="emergencyAge"
                  name="age"
                  value={this.state.emergencyContact.age}
                  onChange={this.handleEmergencyContactChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="emergencyAge">Age</label>
              </div>
              <div className="form-group">
                <input
                className = "input"
                  type="tel"
                  id="emergencyPhone"
                  name="phone"
                  value={this.state.emergencyContact.phone}
                  onChange={this.handleEmergencyContactChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="emergencyPhone">Phone</label>
              </div>
              <div className="form-group">
                <textarea
                className = "input"
                  type="text"
                  id="emergencyAddress"
                  name="address"
                  value={this.state.emergencyContact.address}
                  onChange={this.handleEmergencyContactChange}
                  required
                />
                <span className="highlight"></span>
                <span className="bar"></span>
                <label htmlFor="emergencyAddress">Address</label>  
              </div>
            </div>
            <button className = "btn" type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Registration;
