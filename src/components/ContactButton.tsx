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
    <div className="contact_button">
      <div className="floating_button">
        <i className="floating_button bi bi-wechat" onClick={handleContact}></i>
      </div>
    </div>
  );
};
