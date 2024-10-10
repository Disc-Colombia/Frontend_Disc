import { ContactUs } from "../components/ContactUs"
import { useNavigate } from "react-router-dom"
export const Contact_Us = () => {
  const navegate=useNavigate()
  return (
    <>
    <ContactUs handleClose={function (): void {
        navegate("/")
      
      } }/>
    </>
  )
}
