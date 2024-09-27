import * as React from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import logo from "../imgs/logoDISC_sinfondo.png";
import logowebp from "../imgs/DISC.webp";

import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/headers.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Footers } from "./Footers";

export const Header: React.FC = () => {
  const [linkActive, setLinkActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); //controla estado del menu
  const navegate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const handleActive = (Link: string) => {
    setLinkActive(Link);
    closeMenu();
    navegate("/");
  };
  return (
    <>
      <div className="container_header line-bottom">
        <div className="container_logo">
          <Link to="home" smooth={true} duration={500}>
            <picture>
              <source
                className="container_logo--img"
                onClick={() => handleActive("home")}
                srcSet={logowebp}
                type="image/webp"
              />
              <img
                className="container_logo--img"
                src={logo as string}
                alt="logo development"
                onClick={() => handleActive("home")}
              />
            </picture>
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
                onClick={() => handleActive("home")}
              >
                Home
              </Link>
              <Link
                to="aboutus"
                smooth={true}
                duration={500}
                className={`navegations_links ${
                  linkActive === "aboutus" ? "active" : ""
                }`}
                onClick={() => handleActive("aboutus")}
              >
                About us
              </Link>
              <Link
                to="services"
                smooth={true}
                duration={500}
                className={`navegations_links ${
                  linkActive === "services" ? "active" : ""
                }`}
                onClick={() => handleActive("services")}
              >
                Services
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
