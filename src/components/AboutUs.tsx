// import "../styles/aboutus.css";
// import { InfoCard } from "./InfoCard";
// import * as React from "react";
// import {ClientsCarousel} from "./ClientsCarousel.tsx";
//
// export const AboutUs: React.FC = () => {
//
//   const aboutUsContent = {
//     mission: "Our mission is to design and develop innovative, high-quality technological solutions that not only solve current problems but also anticipate and adapt to the future needs of our stakeholders. We are a team of experts in technology that love innovation.",
//     vision: "To be global leaders in the technology field, helping our clients enhance their quality of life and achieve new levels of success through disruptive technologies and effective digital strategies.",
//     // Add more static content here
//   };
//
//   return (
//       <>
//         <div className="component-wrapper " style={{ marginTop: "80px" }}>
//
//           <div className="particle">
//             <div className="particle-content">
//               <div className="about-header main-padding-large slide">
//                 <div className="about-header-content quote-small" style={{ marginTop: "10px" }}>
//                   <p>
//                     Development Innovation System C (DISC), we are a company of
//                     innovative technological solutions that transform and enhance
//                     a digital world by offering multiple specialized services in
//                     software development and system integration. Our multilingual
//                     team has fostered strong business relationships with federal,
//                     state, local entities and NGOs worldwide. We have more than a
//                     decade of experience, with headquarters in Washington, DC.,
//                     and offices in Colombia.
//                   </p>
//                 </div>
//                 <div className="about-header-controls" >
//                   <p className="about-header-controls-blurb heading-four">
//                     More about us
//                   </p>
//                   <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="96"
//                       height="96"
//                       viewBox="0 0 24 24"
//                   >
//                     <rect
//                         width="96"
//                         height="96"
//                         className="a"
//                         style={{ opacity: 0 }}
//                     ></rect>
//                     <path
//                         d="M183.41,3439.41,182,3438l-6,6,6,6,1.41-1.41-4.58-4.59Z"
//                         transform="translate(-168 -3432)"
//                         className="b"
//                     ></path>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//
//           </div>
//           {/* SLIDE-HERO: mission & vision */}
//           <div className="slide-hero-header">
//             <p className="slide-hero-header-eyebrow quote-small">
//               Our Commitment...
//             </p>
//             <h2 className="heading-three"> and Philosophy</h2>
//           </div>
//
//           <div className="global-delivery" style={{ marginBottom: "20px" }}>
//             <InfoCard
//                 title="MISSION"
//                 content={aboutUsContent.mission}
//                 imageSrc="./src/imgs/us_mision.png"
//                 className="mision-card"
//             />
//             <InfoCard
//                 title="VISION"
//                 content={aboutUsContent.vision}
//                 imageSrc="./src/imgs/us_vision.png"
//                 className="vision-card"
//             />
//           </div>
//         </div>
//         {/* close: Component-wrapper */}
//
//         {/* Partners LOGOs */}
//         <div
//             className="oupartnets"
//             style={{ margin: "20px"}}
//         >
//           <div className="slide-hero-header">
//             <p className="slide-hero-header-eyebrow quote-small">We are...</p>
//             <h1 className="heading-three">Partnered With</h1>
//           </div>
//           <div className="slide-hero-content">
//             <div className="logo-garden logo-garden--is-dark">
//               <div className="logo-garden-gallery">
//                 <div
//                     className="logo-garden-gallery-scroller smooth"
//                     style={{ transform: "translateX(0%)" }}
//                 >
//                   <div className="logo-garden-gallery-row">
//                     <div className="logo-garden-gallery-row-card">
//                       <a href="https://ads.google.com/intl/es-419_co/home/partners/become-a-partner/">
//                         <img
//                             src="src/imgs/partners/partner_1.jpeg"
//                             alt="Google Partner"
//                             width={500}
//                             height={200}
//                         />
//                       </a>
//                     </div>
//                     <div className="logo-garden-gallery-row-card">
//                       <a href="https://partner.microsoft.com/es-es/partnership">
//                         <img
//                             src="src/imgs/partners/partner_2.jpeg"
//                             alt="Microsoft Partner"
//                             width={500}
//                             height={200}
//                         />
//                       </a>
//                     </div>
//                     <div className="logo-garden-gallery-row-card">
//                       <a href="https://www.linkedin.com/company/ingram-micro-colombia/?originalSubdomain=co">
//                         <img
//                             src="src/imgs/partners/partner_3.jpeg"
//                             alt="INGRAM"
//                             width={500}
//                             height={200}
//                         />
//                       </a>
//                     </div>
//                     <div className="logo-garden-gallery-row-card">
//                       <a href="https://www.ibm.com/es-es/partnerplus">
//                         <img
//                             src="src/imgs/partners/partner_4.jpeg"
//                             alt="IBM"
//                             width={500}
//                             height={200}
//                         />
//                       </a>
//                     </div>
//                   </div>
//                   <div className="logo-garden-gallery-row">
//                     <div className="logo-garden-gallery-row-card">
//                       <a href="https://www.delltechnologies.com/partner/en-us/partner/find-a-partner.htm">
//                         <img
//                             src="src/imgs/partners/partner_5.jpeg"
//                             alt="DELL"
//                             width={500}
//                             height={200}
//                         />
//                       </a>
//                     </div>
//                     <div className="logo-garden-gallery-row-card">
//                       <a href="https://aws.amazon.com/es/partners/">
//                         <img
//                             src="src/imgs/partners/partner_6.jpeg"
//                             alt="AWS"
//                             width={500}
//                             height={200}
//                         />
//                       </a>
//                     </div>
//                     <div className="logo-garden-gallery-row-card">
//                       <a href="https://www.adobe.com/partners/partnerfinders.html">
//                         <img
//                             src="src/imgs/partners/partner_7.jpeg"
//                             alt="ADOBE"
//                             width={500}
//                             height={200}
//                         />
//                       </a>
//                     </div>
//                     <div className="logo-garden-gallery-row-card">
//                       <a href="https://www.sap.com/index.html">
//                         <img
//                             src="src/imgs/partners/partner_8.svg"
//                             alt="SAP"
//                             width={500}
//                             height={200}
//                         />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//
//         <div className="about-header-controls">
//           <p className="about-header-controls-blurb heading-four">Our clients</p>
//           <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="96"
//               height="96"
//               viewBox="0 0 24 24"
//           >
//             <rect
//                 width="96"
//                 height="96"
//                 className="a"
//                 style={{ opacity: 0 }}
//             ></rect>
//             <path
//                 d="M183.41,3439.41,182,3438l-6,6,6,6,1.41-1.41-4.58-4.59Z"
//                 transform="translate(-168 -3432)"
//                 className="b"
//             ></path>
//           </svg>
//         </div>
//
//         {/* Clients LOGOs */}
//         <div className="oupartnets" style={{ margin: "20px" }}>
//           <div className="slide-hero-content">
//             <ClientsCarousel />
//           </div>
//         </div>
//
//         <div></div>
//       </>
//   );
// };


import "../styles/aboutus.css";
import { InfoCard } from "./InfoCard";
import * as React from "react";
import { ClientsCarousel } from "./ClientsCarousel";

import {
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7,
  partner8
} from '../imgs/partners';

export const AboutUs: React.FC = () => {

  const partnerImages = [
    { src: partner1, alt: "Google Partner", link: "https://ads.google.com/intl/es-419_co/home/partners/become-a-partner/" },
    { src: partner2, alt: "Microsoft Partner", link: "https://partner.microsoft.com/es-es/partnership" },
    { src: partner3, alt: "INGRAM", link: "https://www.linkedin.com/company/ingram-micro-colombia/?originalSubdomain=co" },
    { src: partner4, alt: "IBM", link: "https://www.ibm.com/es-es/partnerplus" },
    { src: partner5, alt: "DELL", link: "https://www.delltechnologies.com/partner/en-us/partner/find-a-partner.htm" },
    { src: partner6, alt: "AWS", link: "https://aws.amazon.com/es/partners/" },
    { src: partner7, alt: "ADOBE", link: "https://www.adobe.com/partners/partnerfinders.html" },
    { src: partner8, alt: "SAP", link: "https://www.sap.com/index.html" },
  ];

  const aboutUsContent = {
    mission:
        "Our mission is to design and develop innovative, high-quality technological solutions that not only solve current problems but also anticipate and adapt to the future needs of our stakeholders. We are a team of experts in technology that love innovation.",
    vision:
        "To be global leaders in the technology field, helping our clients enhance their quality of life and achieve new levels of success through disruptive technologies and effective digital strategies.",
  };

  return (
      <>
        <div className="component-wrapper" style={{ marginTop: "80px" }}>
          <div className="particle">
            <div className="particle-content">
              <div className="about-header main-padding-large slide">
                <div className="about-header-content quote-small" style={{ marginTop: "10px" }}>
                  <p>
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
                  <p className="about-header-controls-blurb heading-four">More about us</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 24 24">
                    <rect width="96" height="96" className="a" style={{ opacity: 0 }}></rect>
                    <path d="M183.41,3439.41,182,3438l-6,6,6,6,1.41-1.41-4.58-4.59Z" transform="translate(-168 -3432)" className="b"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* SLIDE-HERO: mission & vision */}
          <div className="slide-hero-header">
            <p className="slide-hero-header-eyebrow quote-small">Our Commitment...</p>
            <h2 className="heading-three"> and Philosophy</h2>
          </div>

          <div className="global-delivery" style={{ marginBottom: "20px" }}>
            <InfoCard
                title="MISSION"
                content={aboutUsContent.mission}
                imageSrc="./src/imgs/us_mision.png"
                className="mision-card"
            />
            <InfoCard
                title="VISION"
                content={aboutUsContent.vision}
                imageSrc="./src/imgs/us_vision.png"
                className="vision-card"
            />
          </div>
        </div>

        {/* Partners LOGOs */}
        <div className="oupartnets" style={{ margin: "20px" }}>
          <div className="slide-hero-header">
            <p className="slide-hero-header-eyebrow quote-small">We are...</p>
            <h1 className="heading-three">Partnered With</h1>
          </div>
          <div className="slide-hero-content">
            <div className="logo-garden logo-garden--is-dark">
              <div className="logo-garden-gallery">
                <div className="logo-garden-gallery-scroller smooth" style={{ transform: "translateX(0%)" }}>
                  <div className="logo-garden-gallery-row">
                    {partnerImages.slice(0, 4).map((partner, index) => (
                        <div key={index} className="logo-garden-gallery-row-card">
                          <a href={partner.link}>
                            <img src={partner.src} alt={partner.alt} width={500} height={200} />
                          </a>
                        </div>
                    ))}
                  </div>
                  <div className="logo-garden-gallery-row">
                    {partnerImages.slice(4).map((partner, index) => (
                        <div key={index} className="logo-garden-gallery-row-card">
                          <a href={partner.link}>
                            <img src={partner.src} alt={partner.alt} width={500} height={200} />
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
      </>
  );
};
