import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/logoDISC_sinfondo.png";
import logowebp from "../imgs/DISC.webp";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/headers.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Footers } from "./Footers";
import {useRef }from 'react'
import { FloatingButtons } from "./FloatingButtons";

export const Header: React.FC = () => {
  const [hasReachedFooter, setHasReachedFooter] = useState(false);
  const [linkActive, setLinkActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const navegate = useNavigate();
  const footerRef = useRef(null);
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
   // useEffect para detectar el scroll hasta el footer
   React.useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerPosition = (footerRef.current as HTMLElement).getBoundingClientRect();
        // Verificar si el footer es visible en la ventana del navegador
        if (footerPosition.top <= window.innerHeight) {
          setHasReachedFooter(true);
        } else {
          setHasReachedFooter(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <>
      <div className="container_header line-bottom">
        <div className="container_logo">
          <Link to="/" onClick={() => handleActive("home")}>
            <picture>
              <source
                className="container_logo--img"
                srcSet={logowebp}
                type="image/webp"
              />
              <img
                className="container_logo--img"
                src={logo as string}
                alt="logo development"
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
                to="/"
                className={`navegations_links ${
                  linkActive === "home" ? "active" : ""
                }`}
                onClick={() => handleActive("home")}
              >
                Home
              </Link>
              <Link
                to="/about-us/"
                className={`navegations_links ${
                  linkActive === "aboutus" ? "active" : ""
                }`}
                onClick={() => handleActive("aboutus")}
              >
                About us
              </Link>
              <Link
                to="/allServices/"
                className={`navegations_links ${
                  linkActive === "services" ? "active" : ""
                }`}
                onClick={() => handleActive("services")}
              >
                Services
              </Link>
              <Link
                to="/contact-us/"
                className={`navegations_links ${
                  linkActive === "contact" ? "active" : ""
                }`}
                onClick={() => handleActive("contact")}
              >
                Contact us
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <Outlet />
      {!hasReachedFooter  &&(<FloatingButtons />)}
      <div ref={footerRef}>
        <Footers />
      </div>
    </>
  );
};
