import logo from "../imgs/logoDISC_sinfondo.png";
import "../styles/index.css";
import { Carrousel } from "../components/Carrousel";
import { CookiesComponent } from "../components/CookiesComponent.tsx";
import { FloatingButtons } from "../components/FloatingButtons.tsx";
import { Ecosystem } from "../components/Ecosystem.tsx";
import { Services } from '../components/Services.tsx';
import { ClientsSection } from "../components/ClientsCarousel.tsx";
import { PartnersSection } from "../components/Partners.tsx";
import { ContactButton } from "../components/ContactButton";
import { Projects } from "../components/Projects.tsx";

export const Index = () => {
  return (
    <>
      <div className="container_index" id="home">
        <div className="container_index--tittle">
          <img
            className="tittle_index--img"
            src={logo as string}
            alt="logo develoment"
          />
          <h2 className="text_index--tittle">INNOVATIVE RESULTS</h2>
        </div>
        <div rel="preload" className="container_background container_carrousell--index">
          <CookiesComponent />
          <Carrousel />
        </div>
        <Services />
        <ClientsSection />
        <Ecosystem />
        <Projects/>
        <PartnersSection />
        <FloatingButtons />
        <ContactButton />
      </div>
    </>
  );
};
