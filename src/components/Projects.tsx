import maternappIcon from "../imgs/maternappicon.png";
import saludtechIcon from "../imgs/salutechicon.png";
import covid19Icon from "../imgs/covidicon.png";
import covidpassportIcon from "../imgs/healthpassicon.png";
import websitesIcon from "../imgs/yocoicon.png";
import saludtechBig from "../imgs/covid19app.png";
import covid19Big from "../imgs/covid19.png";
import covidpassportBig from "../imgs/covidpassport.jpg";
import websitesBig from "../imgs/yocoweb.jpg";
import maternappVideo from "../video/maternappHome.mp4";
import "../styles/projects.css";
import * as React from "react";
import { useState } from "react";

type InfoOption =
    | {
  title: string;
  description: string;
  imageSmall: string;
  videoLarge: string;
  imageLarge?: undefined;
}
    | {
  title: string;
  description: string;
  imageSmall: string;
  imageLarge: string;
  videoLarge?: undefined;
};

export const Projects: React.FC = () => {
  const infoOptions: InfoOption[] = [
    {
      title: 'MaternApp',
      description: "It is an innovative tool designed for health professionals, which facilitates the comprehensive management of information during the prenatal control process, childbirth and the postpartum period. Our optimized platform allows the registration, monitoring and analysis of medical data in real time, offering an efficient and safe experience for both medical staff and patients.",
      imageSmall: maternappIcon,
      videoLarge: maternappVideo // Video grande para la visualización
    },
    {
      title: 'SaludTech',
      description: "We developed a comprehensive solution to help healthcare professionals effectively manage information and monitoring related to the virus. Our software was available in English, Portuguese, and Spanish, ensuring broad and multilingual access. Thus, it provided essential digital tools that optimized the response to the pandemic and improved patient care, facilitating more efficient management during critical times.",
      imageSmall: saludtechIcon,
      imageLarge: saludtechBig
    },
    {
      title: 'COVID-19 WATCH Software',
      description: 'In response to the global emergency caused by the Coronavirus pandemic, our company committed to creating a comprehensive technological solution to help mitigate its impact. We developed COVID-19 WATCH, an advanced digital platform that includes a website, mobile application, social media integration, and linking platforms, powered by Artificial Intelligence (AI). This platform was essential in monitoring the evolution of the pandemic, issuing personalized alerts, and effectively contributing to reducing the spread of the virus.',
      imageSmall: covid19Icon,
      imageLarge: covid19Big
    },
    {
      title: 'Covid-19 Vaccine Passport',
      description: 'Our company created the Covid-19 Vaccine Passport, a digital platform that provided secure proof of vaccination. This tool facilitated international travel and event participation by offering a reliable and portable record of immunization, showcasing our dedication to public health and innovation.',
      imageSmall: covidpassportIcon,
      imageLarge: covidpassportBig
    },
    {
      title: 'Website Development',
      description: 'We offer cutting-edge web development, with custom solutions and a modern and attractive design. We create functional, multilingual and responsive websites, using the latest technologies and frameworks to adapt the platforms to the needs of your business. We integrate donation collection systems, SEO optimization and guarantee scalability and performance, providing digital tools that enhance your online presence.',
      imageSmall: websitesIcon,
      imageLarge: websitesBig
    }
  ];

  const [selectedInfo, setSelectedInfo] = useState<InfoOption>(infoOptions[0]);

  const handleButtonClick = (option: InfoOption) => {
    setSelectedInfo(option);
  };


  return (
      <div className='container_projects'>
        <div className='content_option'>
          <div className='container_text'>
            <h2 className='tittle_content'>{selectedInfo.title}</h2>
            <p className='description_content'>{selectedInfo.description}</p>
          </div>
          <div className='container_content--projects'>
            {selectedInfo.videoLarge ? (
                <video className='video_content' autoPlay loop muted>
                  <source  className='video--' src={selectedInfo.videoLarge} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
            ) : (
                <div className='container_img_content'>
                  <img className='img_content' src={selectedInfo.imageLarge as string} alt={selectedInfo.title} />
                </div>
            )}
          </div>


        </div>

        <div className='container_buttom_option'>
          {infoOptions.map((option, index) => (
              <button className='buttom_option' key={index} onClick={() => handleButtonClick(option)} >
                <span className="ripple"></span>
                <img className='img_buttom' src={option.imageSmall as string} alt={`Opción ${index + 1}`} />
              </button>
          ))}
        </div>
      </div>
  );
};
