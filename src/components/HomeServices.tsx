import "../styles/services.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import servicesimg from "../imgs/servicesimg.jpg";
import { Link } from "react-router-dom";
import * as React from "react";

export const HomeServices: React.FC = () => {
  return (
      <div id="services">
        <div className="container_service">
          <div className="container_text--services">
            <h1 className="my_tittle">
              WHAT WE<span className="solutions-title--span"> DO</span>
            </h1>
            <p className="paragraph_services">
              {" "}
              DISC utilizes best practices to meet and exceed the needs of our
              public and private sector global clients. Our flexible environment
              is infused with technological expertise and rigorous compliance
              standards. We don’t skim on excellence or cut corners.{" "}
            </p>
            <div className="button_Service-container">
              <Link to="/AllServices" className="view_services">
                View All
              </Link>
            </div>
          </div>
          <div className="img_content-services">
            <img
                className="image_services"
                src={servicesimg as string}
                alt="Our Services"
            />
          </div>
        </div>
      </div>
  );
};
