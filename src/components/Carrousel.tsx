import image1 from "../imgs/consultoria_IT.jpg";
import image2 from "../imgs/seguridad_cibernetica.jpg";
import image3 from "../imgs/soluciones_financieras.jpg";
import imagen1webp from '../imgs/consultoria_IT.webp';
import imagen2webp from '../imgs/seguridad_cibernetica_11zon.webp';
import imagen3webp from '../imgs/soluciones_financieras_11zon.webp';  
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/carrousel.css";
import * as React from "react";

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
           <picture>
            <source srcSet={imagen1webp} type="image/webp"/>
           <img
              loading="lazy"
              src={image1 as string}
              className="d-block w-100 carousel_img img-fluid"
              alt="imagen technology
                solutions."
            />
           </picture>
            <div className="carousel-caption">
              <h3 className="title_carousel--slice">Information Technology Consulting</h3>
              <p className="text_carousel">
                IT consulting services focused on innovative technology
                solutions.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <picture>
             <source srcSet={imagen2webp} type="image/webp"/>
            <img
              loading="lazy"
              src={image2 as string}
              className="d-block w-100 carousel_img img-fluid"
              alt="imagen services"
            />
            </picture>
            <div className="carousel-caption">
              <h3  className="title_carousel--slice">Cybersecurity Solutions</h3>
              <p className="text_carousel">
                Providing comprehensive protection against digital threats
                through advanced security measures and proactive defense
                strategies.
              </p>
            </div>
          </div>
          <div className="carousel-item">
          <picture>
            <source srcSet={imagen3webp} type="image/webp"/>
          <img
              loading="lazy"
              src={image3 as string}
              className="d-block w-100 carousel_img img-fluid"
              alt="imagen solutions"
            />
          </picture>
            <div className="carousel-caption ">
              <h3 className="title_carousel--slice">Financial Solutions</h3>
              <p className="text_carousel">
                Delivering tailored financial strategies to optimize
                performance, manage risks, and drive growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
