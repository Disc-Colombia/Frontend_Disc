import image1 from "../imgs/consultoria_IT.jpg";
import image2 from "../imgs/seguridad_cibernetica.jpg";
import image3 from "../imgs/soluciones_financieras.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/carrousel.css";
import React from "react";

export const Carrousel: React.FC = () => {
  return (
    <div className="container_carrousel" >
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              loading="lazy"
              src={image1}
              className="d-block w-100 carousel_img img-fluid"
              alt="imagen technology
                solutions."
            />
            <div className="carousel-caption">
              <h5>Information Technology Consulting</h5>
              <p>
                IT consulting services focused on innovative technology
                solutions.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              loading="lazy"
              src={image2}
              className="d-block w-100 carousel_img img-fluid"
              alt="imagen services"
            />
            <div className="carousel-caption">
              <h5>Cybersecurity Solutions</h5>
              <p>
                Providing comprehensive protection against digital threats
                through advanced security measures and proactive defense
                strategies.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              loading="lazy"
              src={image3}
              className="d-block w-100 carousel_img img-fluid"
              alt="imagen solutions"
            />
            <div className="carousel-caption ">
              <h5>Financial Solutions</h5>
              <p>
                Delivering tailored financial strategies to optimize
                performance, manage risks, and drive growth.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
