import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../imgs/logoDISC_sinfondo.png";
import logowebp from "../imgs/logoverde_blanco.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/headers.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Footers } from "./Footers";

export const Header: React.FC = () => {
  const [linkActive, setLinkActive] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <Link to="/" onClick={() => handleActive("home")}>
            <picture>
              {/* <source
                className="container_logo--img"
                srcSet={logowebp}
                type="image/webp"
              /> */}
              <img
                className="container_logo--img"
                src={logowebp as string}
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
              <div className="container_btn--down">
                <button
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  className={`navegations_links btn_service--down${
                    linkActive === "aboutus" ? "active" : ""
                  }`}
                >
                  Services<i className="bi bi-chevron-down icon_down"></i>
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  <li className="navegations_links">
                    <Link
                      className="dropdown-item"
                      to="/Human-Service/"
                      onClick={() => handleActive("services")}
                    >
                      Human Service
                    </Link>
                  </li>
                  <li className="navegations_links">
                    <Link
                      className="dropdown-item"
                      to="/IT-Consulting/"
                      onClick={() => handleActive("services")}
                    >
                      IT Consulting
                    </Link>
                  </li>
                  <li className="navegations_links">
                    <Link
                      className="dropdown-item"
                      to="/Cybersecurity/"
                      onClick={() => handleActive("services")}
                    >
                      Cybersecurity
                    </Link>
                  </li>
                  <li className="navegations_links">
                    <Link
                      className="dropdown-item"
                      to="/Finance-Solutions/"
                      onClick={() => handleActive("services")}
                    >
                      Finance Solutions
                    </Link>
                  </li>
                  <li className="navegations_links">
                    <Link
                      className="dropdown-item"
                      to="/Customer-Service/"
                      onClick={() => handleActive("services")}
                    >
                      Customer Service
                    </Link>
                  </li>
                </ul>
              </div>
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
      <Footers />
    </>
  );
};
