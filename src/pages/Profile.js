import React from "react";
import "./css/registration.css";

class Profile extends React.Component{
    state = {
        userName: "Chicken",
        age: "27",
        bio: "im just a big chicken"
    }
    render(){
        return (
        <div class = "profile">Welcome to the Profile
        <div>Name: {this.state.userName} </div>
        <div>Age: {this.state.age} </div>
        <div>Bio:{this.state.bio} </div>
        </div>
        )
    }
}; 

export default Profile;