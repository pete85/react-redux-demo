import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const activeStyle = { color: "#F15B2A" };

    return (
        <nav>
            <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Home
            </NavLink>
            {" | "}
            <NavLink to="/courses" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Courses
            </NavLink>
            {" | "}
            <NavLink to="/about" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                About
            </NavLink>
        </nav>
    );
};

export default Header;
