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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("mostrando..");
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <div className="container_header">
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
              <Link className="navegations_links" onClick={closeMenu} to={"#"}>
                Services
              </Link>
              <Link className="navegations_links" onClick={closeMenu} to={"#"}>
                About us
              </Link>
              <Link className="navegations_links" onClick={closeMenu} to={"#"}>
                Conatct us
              </Link>
            </nav>
          </div>
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
      <Outlet />
      <Footers />
    </>
  );
};
