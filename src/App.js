import React, {Component} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect, withRouter} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Registration from "./pages/Registration";
class App extends Component{
render(){
    return(
    <div class = "content-wrap">
    <Router>
    <Route exact path = "/" component = {Registration}/>
    </Router>
    </div>
    ) 
}
}
export default App;