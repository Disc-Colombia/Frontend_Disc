import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../imgs/logoDISC_sinfondo.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/headers.css";
import { Outlet } from "react-router-dom";
import { Footers } from "./Footers";

export const Header = () => {
  const [linkActive, setLinkActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); //controla estado del menu
  //Muestra el menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  //Cierra el menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleActive = (Link: string) => {
    setLinkActive(Link);
    closeMenu();
  };
  return (
    <>
      <div className="container_header line-bottom">
        <div className="container_logo">
          <Link to="home" smooth={true} duration={500}>
            <img
              className="container_logo--img"
              src={logo}
              alt="logo development"
              onClick={() => handleActive("home")}
            />
          </Link>
        </div>
        <div className="container_menu">
          <button className="menu-toggle" onClick={toggleMenu}>
            <i className="bi bi-list icono-menu"></i>
          </button>
          <div className={`container_nav ${isMenuOpen ? "open" : ""}`}>
            <nav className="container_nav--lin">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className={`navegations_links ${
                  linkActive === "home" ? "active" : ""
                }`}
                onClick={()=>handleActive('home')}
                
              >
                Home
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className={`navegations_links ${linkActive==='services'? "active" : ""}`}
                onClick={()=>handleActive('services')}
              >
                Services
              </Link>
              <Link
                to="aboutus"
                smooth={true}
                duration={500}
                className={`navegations_links ${linkActive==='aboutus' ? "active" : ""}`}
                onClick={()=>handleActive('aboutus')}
              >
                About us
              </Link>
              <Link
                to="contactus"
                smooth={true}
                duration={500}
                className={`navegations_links ${linkActive==='contactus' ? "active" : ""}`}
                onClick={()=>handleActive('contactus')}
              >
                Contact us
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <Outlet />
      <Footers />
    </>
  );
};
