import React from "react";
import s from "./css-modules/Navbar.module.css";
import {Link} from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/messages">Messages</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/music">Music</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </nav>
    )
}
