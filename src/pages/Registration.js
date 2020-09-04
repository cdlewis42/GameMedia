import React from "react";
import Form from 'react-bootstrap/Form';
import "./css/registration.css";
class Registration extends React.Component{

render(){   
return(
<div class = "form">
<Form class = "form">
<Form.Group class = "form" class = "form">
    <Form.Label class = "form">Name</Form.Label>
    <Form.Control type="email" placeholder="name" class = "form"/>
  </Form.Group>
  <Form.Group class = "form" class = "form">
    <Form.Label class = "form">Age</Form.Label>
    <Form.Control type="email" placeholder="age" class = "form"/>
  </Form.Group>
  <Form.Group class = "form" class = "form">
    <Form.Label class = "form">Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" class = "form"/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1" class = "form">
    <Form.Label class = "form">Bio</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>
</div>
)
}
}

export default Registration;
