import "../styles/services.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import servicesimg from "../imgs/servicesimg.jpg";
import { Link } from "react-router-dom";
import * as React from "react";

export const HomeServices: React.FC = () => {
  return (
      <div id="services">
        <div className="background-services">
          <div className="solutions-section">
            <div className="titlepar--text">
              <h2 className="solutions-title">
                WHY<span className="solutions-title--span"> CHOOSE US</span>
              </h2>
              <p className="solutions-description">
                Our company stands out for its adaptable technology solutions,
                expertly crafted to address the specific needs of your
                organization while adhering to the highest standards.
              </p>
            </div>

            <div className="solutions-grid">
              <div className="solution-item">
                <h3 className="title-items-services">Multilingual Services</h3>
                <p>English - Spanish - Portuguese - Amharic.</p>
              </div>
              <div className="solution-item">
                <h3 className="title-items-services">Uniting Worlds</h3>
                <p>Effectively breaks through cultural and political barriers.</p>
              </div>
              <div className="solution-item">
                <h3 className="title-items-services">Future Leaders</h3>
                <p>We provide job opportunities for young talents.</p>
              </div>
              <div className="solution-item">
                <h3 className="title-items-services">Global Reach</h3>
                <p>Based in Washington D.C. with offices in Colombia.</p>
              </div>
            </div>
          </div>
        </div>

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
              <Link to="/All-Services" className="view_services">
                View All
              </Link>
            </div>
          </div>
          <div className="image_services">
            <img
                className="img_content-services"
                src={servicesimg as string}
                alt="Our Services"
            />
          </div>
        </div>
      </div>
  );
};
