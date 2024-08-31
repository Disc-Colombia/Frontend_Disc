import type { BoxProps } from "../type/type";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/box.css";
import { useState } from "react";
export const Box = ({ image, children, description, tittle }: BoxProps) => {
  const [visible, setVisible] = useState(false);
  const handleVisible = () => {
    console.log("Mostrando...")
    setVisible(!visible);
  };
  return (
    <div className="container_general--box">
      <div className="container_box--imag">
        <div className="container_box--tittle">
          <h3 className="container_component--tittle">{tittle}</h3>
        </div>
        <img className="image_box" src={image} alt={description} />
        <div className="container_botondesplegable">
          <i className="bi bi-chevron-down" onClick={handleVisible}></i>
        </div>
      </div>
      <div className={`container_box--text ${visible ? "expanded" : ""}`}>{children}</div>
    </div>
  );
};
