import "../styles/aboutus.css";
import { InfoCard } from "./InfoCard";
import * as React from "react";
import { ClientsCarousel } from "./ClientsCarousel";
import us_mision from "../imgs/us_mision.png";
import us_vision from "../imgs/us_vision.png";
import { partnerImages } from "../imgs/partners/partnerInfo.tsx";
export const AboutUs: React.FC = () => {
  const aboutUsContent = {
    mission:
      "Our mission is to design and develop innovative, high-quality technological solutions that not only solve current problems but also anticipate and adapt to the future needs of our stakeholders. We are a team of experts in technology that love innovation.",
    vision:
      "To be global leaders in the technology field, helping our clients enhance their quality of life and achieve new levels of success through disruptive technologies and effective digital strategies.",
  };
  return (
    <>
      <div className="component-wrapper   ">
        <div className="particle">
          <div className="particle-content">
            <div className="about-header main-padding-large slide">
              <div className="about-header-content quote-small">
                <p className="about_header-content--text">
                  Development Innovation System C (DISC), we are a company of
                  innovative technological solutions that transform and enhance
                  a digital world by offering multiple specialized services in
                  software development and system integration. Our multilingual
                  team has fostered strong business relationships with federal,
                  state, local entities and NGOs worldwide. We have more than a
                  decade of experience, with headquarters in Washington, DC.,
                  and offices in Colombia.
                </p>
              </div>
              <div className="about-header-controls">
                <p className="about-header-controls-blurb heading-four">
                  More about us
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="96"
                  height="96"
                  viewBox="0 0 24 24"
                >
                  <rect
                    width="96"
                    height="96"
                    className="a"
                    style={{ opacity: 0 }}
                  ></rect>
                  <path
                    d="M183.41,3439.41,182,3438l-6,6,6,6,1.41-1.41-4.58-4.59Z"
                    transform="translate(-168 -3432)"
                    className="b"
                  ></path>
                </svg>
                {/* SLIDE-HERO: mission & vision */}
                <div className="slide-hero-header">
                  <p className="slide-hero-header-eyebrow quote-small">
                    Our Commitment...
                  </p>
                  <h2 className="heading-three"> and Philosophy</h2>
                </div>

                <div
                  className="global-delivery"
                  style={{ marginBottom: "220px" }}
                >
                  <InfoCard
                    title="MISSION"
                    content="Our mission is to design and develop innovative, high-quality technological solutions that not only solve current problems but also anticipate and adapt to the future needs of our stakeholders. We are a team of experts in technology that love innovation."
                    imageSrc="./src/imgs/us_mision.png"
                    className="mision-card"
                  />
                  <InfoCard
                    title="VISION"
                    content="To be global leaders in the technology field, helping our clients enhance their quality of life and achieve new levels of success through disruptive technologies and effective digital strategies."
                    imageSrc="./src/imgs/us_vision.png"
                    className="vision-card"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE-HERO: mission & vision */}
          {/* <div className="slide-hero-header">
            <p className="slide-hero-header-eyebrow quote-small">Our Commitment...</p>
            <h2 className="heading-three"> and Philosophy</h2>
          </div>

          <div className="global-delivery" style={{ marginBottom: "20px" }}>
            <InfoCard
                title="MISSION"
                content={aboutUsContent.mission}
                imageSrc={us_mision as string}
                className="mision-card"
            />
            <InfoCard
                title="VISION"
                content={aboutUsContent.vision}
                imageSrc={us_vision  as string}
                className="vision-card"
            />
          </div>
        </div> */}
          {/* Partners LOGOs  */}
          <div className="oupartnets" style={{ margin: "20px" }}>
            <div className="slide-hero-header">
              <p className="slide-hero-header-eyebrow quote-small">We are...</p>
              <h1 className="heading-three">Partnered With</h1>
            </div>
            <div className="slide-hero-content">
              <div className="logo-garden logo-garden--is-dark">
                <div className="logo-garden-gallery">
                  <div
                    className="logo-garden-gallery-scroller smooth"
                    style={{ transform: "translateX(0%)" }}
                  >
                    <div className="logo-garden-gallery-row">
                      {partnerImages.slice(0, 4).map((partner, index) => (
                        <div
                          key={index}
                          className="logo-garden-gallery-row-card"
                        >
                          <a href={partner.link}>
                            <img
                              src={partner.src}
                              alt={partner.alt}
                              width={500}
                              height={200}
                            />
                          </a>
                        </div>
                      ))}

                      <div className="logo-garden-gallery-row">
                        {partnerImages.slice(4).map((partner, index) => (
                          <div
                            key={index}
                            className="logo-garden-gallery-row-card"
                          >
                            <a href={partner.link}>
                              <img
                                src={partner.src}
                                alt={partner.alt}
                                width={500}
                                height={200}
                              />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Clients LOGOs */}
            <div className="oupartnets" style={{ margin: "20px" }}>
              <div className="slide-hero-content">
                <ClientsCarousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
