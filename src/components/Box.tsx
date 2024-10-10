import type { BoxProps } from "../type/type";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/box.css";
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
      <div className="container_box--imag" >
        <img className="image_box" src={image} alt={description}  />
        <h3 className="text_content--title">{tittle}</h3>
        <div className="chevron">
          <i className='bi bi-chevron-up'></i>
        </div>
      </div>
      <div className="text-content">
        
        <p className="text_content--text"> {children}</p>
      </div>
    </div>
  );
};
