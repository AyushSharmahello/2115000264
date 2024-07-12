import {React, useState, useEffect} from "react";
import "./NavbarStyle.css";
import MenuItem from "./MenuItem";
const Navbar = () => {

    function handleClick(){
        window.location.href = "/signup";
    }
    return (
        <div className="Navbar">
            <a href="/" className="logo">
                <h1 className="logo">Travel Log</h1>
            </a>
            
            <ul className="nav-menu">
                <li>
                <button className="search" style={searchButtonStyle}>
                    <i className="fa-solid fa-magnifying-glass" style={{color: "white", fontSize: "20px"}}></i>
                </button>
                </li>
                {MenuItem.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cname} href={item.url}>{item.title}</a>
                        </li>
                    )
                })}
                    
                <button onClick={handleClick}>Sign Up</button>
            </ul>
        </div>
    )
}

export default Navbar;