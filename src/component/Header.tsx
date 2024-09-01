import { useState } from "react";
import { Link } from "react-scroll";
import {useLocation } from "react-router-dom";
import logo from "../img/logoDISC_sinfondo.png";
import Col from "../img/col.png";
import Us from "../img/us.png";
import "bootstrap-icons/font/bootstrap-icons.css";

import "../style/headers.css";
import { Outlet } from "react-router-dom";
import { Footers } from "./Footers";

export const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);//controla estado del menu
//Muestra el menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //Cierra el menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <div className="container_header line-bottom">
        <div className="container_logo">
          <Link to="home" smooth={true} duration={500} className="navegations_links">
            <img
              className="container_logo--img"
              src={logo}
              alt="logo development"
            />
          </Link>
        </div>
        <div className="container_menu">
          <button className="menu-toggle" onClick={toggleMenu}>
            <i className="bi bi-list icono-menu"></i>
          </button>
          <div className={`container_nav ${isMenuOpen ? "open" : ""}`}>
            <nav className="container_nav--lin">
              <Link to="home" smooth={true} duration={500}className={`navegations_links ${location.pathname==="/"? "active":""}`} onClick={closeMenu}>
                Home
              </Link>
              <Link to="services" smooth={true} duration={500} className={`navegations_links ${location.pathname==="/services"? "active":""}`} onClick={closeMenu}>
                Services
              </Link>
              <Link to="aboutus" smooth={true} duration={500}className={`navegations_links ${location.pathname==="/aboutUs"? "active":""}`} onClick={closeMenu}>
                About us
              </Link>
              <Link to="contactus" smooth={true} duration={500} className={`navegations_links ${location.pathname==="/contactUs"? "active":""}`} onClick={closeMenu}>
                Contact us
              </Link>
            </nav>
            <div className="container_flags">
            <div className="container_flags--contry">
              <img className="flags" src={Col} />
            </div>
            <div className="container_flags--contry">
              <img className="flags usaflag" src={Us} />
            </div>
          </div>
          </div>
        
        </div>
      
      </div>
      <Outlet />
      <Footers />
      
    </>
  );
};
