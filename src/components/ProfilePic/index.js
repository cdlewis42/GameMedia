import React from "react";
import chicken from "./chicken.jpg"
import "./style.css"

const ProfilePic = props => (
    <div class = "profilePicContainer">
    <div class = "name">Chicken</div>
    <img src = {chicken} class = "profilePic"></img>
    </div>
)

export default ProfilePic;