
import { partnerImages } from "../imgs/partners/partnerInfo.tsx";
import "../styles/aboutus.css";

export const PartnersSection: React.FC = () => {
    return (
      <div className="ourpartners">
        <div className="slide-hero-header">
          <p className="my_title--black" style={{textAlign:'center'}}>WE ARE<span className="title--span"> PARTNERED</span> WITH</p>
        </div>
        <div className="slide-hero-content">
          <div className="logo-garden logo-garden--is-dark">
            <div className="logo-garden-gallery">
              <div className="logo-garden-gallery-scroller smooth" style={{ transform: "translateX(0%)", display:"flex", justifyContent:'center' }}>
                <div className="logo-garden-gallery-row">
                  {partnerImages.slice(0, 8).map((partner, index) => (
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
    );
  };