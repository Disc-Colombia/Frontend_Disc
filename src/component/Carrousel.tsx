import image1 from "../img/consultoria_IT.png";
import image2 from "../img/seguridad_cibernetica.png";
import image3 from "../img/soluciones_financieras.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/carrousel.css";
export const Carrousel = () => {
  return (
    <div className="container_carrousel">
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
              rel="preload"
              src={image1}
              className="d-block w-100 carousel_img"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Information technology consulting</h5>
              <p>
                IT consulting services focused on innovative technology
                solutions.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              rel="preload"
              src={image2}
              className="d-block w-100 carousel_img"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Cybersecurity solutions</h5>
              <p>
                Providing comprehensive protection against digital threats
                through advanced security measures and proactive defense
                strategies.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              rel="preload"
              src={image3}
              className="d-block w-100 carousel_img"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Financial solutions</h5>
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
