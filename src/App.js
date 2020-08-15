import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import chicken from "./chicken.jpg";
import Registration from "./pages/Registration";
import Nav from "./components/Nav";
class App extends Component{
render(){
    return(
    <div class = "content-wrap">
    <Nav></Nav>
    <img class = "profilePhoto" src = {chicken}></img>
    <Router>
    <Route exact path = "/" component = {Registration}/>
    </Router>
    </div>
    ) 
}
}
export default App;