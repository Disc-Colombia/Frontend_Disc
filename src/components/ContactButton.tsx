import "../styles/contactButton.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

type ButtomProps ={
  
  setShowForm:React.Dispatch<React.SetStateAction<boolean>>
}
export const ContactButton = ({setShowForm}:ButtomProps) => {
  const handleContact=()=>{
   console.log("funcionando...")
   setShowForm(true)
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
