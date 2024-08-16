import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/logoDISC_sinfondo.png";
import Col from "../img/col.png";
import Us from "../img/us.png";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../style/headers.css";
import { Outlet } from "react-router-dom";
import { Footers } from "./Footers";
export const Header = () => {
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
          <Link to={"/"}>
            <img
              className="container_logo--img"
              src={logo}
              alt="logo development"
            />
          </Link>
        </div>
        <div className="container">
          <button className="menu-toggle" onClick={toggleMenu}>
            <i className="bi bi-list icono-menu"></i>
          </button>
          <div className={`container_nav ${isMenuOpen ? "open" : ""}`}>
            <nav className="container_nav--lin">
              <Link className="navegations_links" onClick={closeMenu} to={"/"}>
                Home
              </Link>
              <Link className="navegations_links" onClick={closeMenu} to={"/services"}>
                Services
              </Link>
              <Link className="navegations_links" onClick={closeMenu} to={"/aboutUs"}>
                About us
              </Link>
              <Link className="navegations_links" onClick={closeMenu} to={"/contactUs"}>
                Conatct us
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
