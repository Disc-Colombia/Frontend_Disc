import "../styles/contactButton.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

type ButtomProps ={
  
  handleShowForm: () => void
}
export const ContactButton = ({handleShowForm}:ButtomProps) => {
  const handleContact=()=>{
   handleShowForm();
  }
  return (
    <div className="contact_button">
      <div className="floating_button">
      <i  className="floating_buttonbi bi-person-circle"
      onClick={handleContact}
      ></i>
          {/* <i className="floating_button bi bi-marker-tip"></i> */}
       
      </div>
    </div>
  );
};
