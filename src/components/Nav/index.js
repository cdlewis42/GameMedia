import React from "react";
import "./style.css"; 


const Nav = props => (
    <div class = "navbar">
        <ul>
            <a href = "/"><li>Home</li></a>
            <a href = "/profile"><li>Profile</li></a>
            <a href = "/inbox"><li>Inbox</li></a>
        </ul>
    </div>
)

export default Nav;