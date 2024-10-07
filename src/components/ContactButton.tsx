import "../styles/contactButton.css";
import "bootstrap-icons/font/bootstrap-icons.css";

type ButtomProps = {
  handleShowForm: () => void;
};

export const ContactButton = ({ handleShowForm }: ButtomProps) => {
  const handleContact = () => {
    handleShowForm();
  };

  return (
    <div className="contact_button" onClick={handleContact}>
      <div className="floating_button">  
        <span className="contact_text">Contact Us</span>
        <i className="bi bi-wechat"></i>
      </div>
    </div>
  );
};
