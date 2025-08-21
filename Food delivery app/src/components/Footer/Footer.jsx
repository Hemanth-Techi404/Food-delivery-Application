import React from "react";
import { assets } from "../../assets/frontend_assets/assets";
import "./Footer.css";

function Footer(){

    return(
        <div className="footer">
            <div className="footer-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nostrum quod aperiam molestiae sapiente architecto corrupti rem voluptatum explicabo pariatur.</p>
                <div className="social-media-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-center">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Customer care</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-right">
                <p>+123-456-789</p>
                <p>contact@tomato.com</p>
                <p>Somewhere else in vizag</p>
            </div>
        </div>
    )
}
export default Footer
