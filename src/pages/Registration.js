import React from "react";
import Form from 'react-bootstrap/Form';
import API from "../utils/API.js";
import "./css/registration.css";
class Registration extends React.Component{
  state = {
    name: "",
    email: "",
    age: "",
    bio: "",
}

handleFormSubmit = event => {
  event.preventDefault()

  console.log("this function is working")
  var newUser = {
      name: this.state.name,//unsure how to grab username from input box at this moment
      age: this.state.age, //get password from input box,
      email: this.state.email, //get email from input box
      bio: this.state.bio //get phoneNumber from input box
    };

  //console.log(newUser);
  //console.log(API)
  if (this.state.userName && this.state.password) {
      API.createUser(newUser)

  }
  alert("User account created successfully!");
  console.log(this.userName)
  //}
}

  handleInputChange = event => {
    //console.log(event.target.name)
    this.setState({[event.target.name]: event.target.value})
}

render(){   
return(
<div class = "form">
<Form class = "form">
<Form.Group class = "form" class = "form">
    <Form.Label class = "form">Name</Form.Label>
    <Form.Control name="name" placeholder="name" class = "form" onChange={this.handleInputChange.bind(this)} />
  </Form.Group>
  <Form.Group class = "form" class = "form">
    <Form.Label class = "form">Age</Form.Label>
    <Form.Control name="age" placeholder="age" class = "form" onChange={this.handleInputChange.bind(this)}/>
  </Form.Group>
  <Form.Group class = "form" class = "form">
    <Form.Label class = "form">Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="name@example.com" class = "form" onChange={this.handleInputChange.bind(this)}/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1" class = "form">
    <Form.Label class = "form">Bio</Form.Label>
    <Form.Control as="textarea" rows="3" name="bio" onChange={this.handleInputChange.bind(this)} />
  </Form.Group>
</Form>
<button type="submit" className="btn btn-primary btn-block" onClick={this.handleFormSubmit}> Create Account  </button>
</div>
)
}
}

export default Registration;
