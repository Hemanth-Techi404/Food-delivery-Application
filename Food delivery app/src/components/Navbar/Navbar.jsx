import { assets } from "../../assets/frontend_assets/assets"
import React, { useState } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const naviagteTo = useNavigate();

    function NavigateTo(){
        naviagteTo('/Cart');
    }

    const getActiveStyles = ({ isActive }) => {
        return isActive ? "nav-link active" : "nav-link";
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    }

    const handleScrollToSection = (e, sectionId) => {
        e.preventDefault();
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        closeMobileMenu();
    }



    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to='/'><img src={assets.logo} alt="Logo" /></Link>
                </div>

                <div className="navbar-links">
                    <NavLink to="/" className={getActiveStyles}>Home</NavLink>
                    <NavLink to="/Explore" className={getActiveStyles}>Explore</NavLink>
                    <NavLink to="/Help" className={getActiveStyles}>Help</NavLink>
                    <NavLink to="/Contact" className={getActiveStyles}>Contact</NavLink>
                </div>

                <div className="navbar-right">
                    <img src={assets.search_icon} alt="Search" />
                    <img onClick={()=>NavigateTo()} src={assets.basket_icon} alt="Basket" />
                    
                    <div className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                <NavLink to="/" className={getActiveStyles} onClick={closeMobileMenu}>Home</NavLink>
                
                <NavLink to="/Explore" className={getActiveStyles} onClick={closeMobileMenu}>Explore</NavLink>
                <NavLink to="/Help" className={getActiveStyles} onClick={closeMobileMenu}>Help</NavLink>
                <NavLink to="/Contact" className={getActiveStyles} onClick={closeMobileMenu}>Contact</NavLink>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
            )}
        </>
    )
}

export default Navbar
