import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ProfilePic from "./components/ProfilePic";
import Registration from "./pages/Registration";
import Nav from "./components/Nav";
class App extends Component{
render(){
    return(
    <div class = "content-wrap">
    <Nav></Nav>
    <ProfilePic></ProfilePic>
    <Router>
    <Route exact path = "/" component = {Registration}/>
    </Router>
    </div>
    ) 
}
}
export default App;