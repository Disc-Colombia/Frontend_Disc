import type { BoxProps } from "../type/type";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/box.css"; // Asegúrate de importar tu archivo CSS aquí
import { useState } from "react";

export const Box = ({ image, children, description, tittle }: BoxProps) => {
  const [visible, setVisible] = useState(false);

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div
      className={`card ${visible ? "expanded" : ""}`}
      onClick={handleVisible}
    >
      <div className="container_box--imag">
        <img className="image_box" src={image} alt={description} />
        <div className="chevron">
          <i className={`bi bi-chevron-${visible ? "up" : "down"}`}></i>
        </div>
      </div>
      {/* <div className="tittle">
       
      </div> */}
      <div className="text-content">
      <h3>{tittle}</h3>
        <p className="text_content--text"> {children}</p>
      </div>
    </div>
  );
};
