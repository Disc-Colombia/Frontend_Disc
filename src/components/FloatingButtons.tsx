
import '../styles/floatingButtons.css' // Estilos CSS para los botones

export const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <div className="floating_social--icon">
            <a href="https://www.instagram.com/innovationdisc/" target="_blank" rel="noopener noreferrer">
              <i className=" floating_social--media bi bi-instagram"></i>
            </a>
            <a href="https://www.facebook.com/disc.dc.58?mibextid=ZbWKwL">
            <i className=" floating_social--media bi bi-facebook"></i>
            </a>
            
            {/* <a href="#">
            <i className=" media bi bi-twitter-x"></i>
            </a>*/}
            <a href="https://www.youtube.com/@MaternAPPTV/">
            <i className=" floating_social--media bi bi-youtube"></i>
            </a> 
            <a href="https://www.linkedin.com/company/development-innovation-system/">
            <i className=" floating_social--media bi bi-linkedin"></i>
            </a>
       
          </div>
    </div>
  );


}