import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const activeStyle = { color: "#323C4C" };

    return (
        <nav>
            <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Home
            </NavLink>
            {" | "}
            <NavLink to="/courses" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
                Courses
            </NavLink>
        </nav>
    );
};

export default Header;
