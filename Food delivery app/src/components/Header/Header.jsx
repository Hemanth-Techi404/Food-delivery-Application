import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./Header.css";
import { useNavigate } from "react-router-dom";

function Header(){

    const naviagte = useNavigate();

    function GetNavigate(){
        naviagte("/Explore")
    }

    return(
        <div className="header">
            <div className="header-image">
                <img src={assets.header_img} alt="" />
            </div>
            <div className="header-text">
                <h1>Welcome,</h1>
                <h4>Get Your Good, Clean and Fair Food for All</h4>
                <button onClick={GetNavigate}>Explore Menu</button>
            </div>
        </div>
    )
}
export default Header