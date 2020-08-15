import React from "react";
import Form from 'react-bootstrap/Form';
import "./css/registration.css";
class Registration extends React.Component{

render(){   
return(
<div class = "form">
<Form class = "form">
  <Form.Group class = "form" class = "form">
    <Form.Label class = "form">Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" class = "form"/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect1" class = "form">
    <Form.Label class = "form">Example select</Form.Label>
    <Form.Control as="select" class = "form">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlSelect2" class = "form">
    <Form.Label class = "form">Example multiple select</Form.Label>
    <Form.Control as="select" multiple class = "form">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Control>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1" class = "form">
    <Form.Label class = "form">Example textarea</Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>
</div>
)
}
}

export default Registration;
