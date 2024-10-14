import "../styles/aboutus.css";
import * as React from "react";
import { InfoCard } from "../components/InfoCard";
import us_mision from "../imgs/us_mision.png";
import us_vision from "../imgs/us_vision.png";
import aboutuswebp from "../imgs/fondo_maternapp.webp";


const HeaderSection: React.FC = () => {

  React.useEffect(() => {
    // Scroll  al inicio
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);


  return (
    <div style={{width:'100%', height:'100%'}}>
      
      <div className="about-header-content">
        <div className="content--text-about">
          <h1 className="my_title--white">
            DEVELOPMENT INNOVATION SYSTEM C <span className="title--span">(DISC)</span>
          </h1>
          <p className="about_header-content--text">
            We are a company of innovative technological solutions that transform and enhance a digital world by offering multiple specialized services in software development and system integration. Our multilingual team has fostered strong business relationships with federal, state, local entities and NGOs worldwide. We have more than a decade of experience, with headquarters in Washington, DC., and offices in Colombia.
          </p>
        </div>
        <div className="image--about">
          <picture>
            <img className="my_img--about" src={aboutuswebp as string} alt="Imagen binarios" />
          </picture>
        </div>
      </div>
    </div>
  );
};


const MissionVision: React.FC = () => {
  const aboutUsContent = {
    mission:
      "Our mission is to design and develop innovative, high-quality technological solutions that not only solve current problems but also anticipate and adapt to the future needs of our stakeholders. We are a team of experts in technology that love innovation.",
    vision:
      "To be global leaders in the technology field, helping our clients enhance their quality of life and achieve new levels of success through disruptive technologies and effective digital strategies.",
  };

  return (
    <div className="global-delivery">
      <div className="card_mision">
        <InfoCard
          title="MISSION"
          content={aboutUsContent.mission}
          imageSrc={us_mision as string}
          className="mision-card"
        />
      </div>
      <div className="card_vision">
        <InfoCard
          title="VISION"
          content={aboutUsContent.vision}
          imageSrc={us_vision as string}
          className="vision-card"
        />
      </div>
    </div>
  );
};


export const AboutUs: React.FC = () => {
  return (
    <div className="component-wrapper" id="aboutus">
          <HeaderSection />

          <div className="about-header-controls">
            <p className="my_title--black">
              OUR<span className="title--span"> COMMITMENT</span>
            </p>
            <MissionVision />
          </div>
          
    </div>
  );
};
