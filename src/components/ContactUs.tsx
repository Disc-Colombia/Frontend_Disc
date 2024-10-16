import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/contactform.css";
import { dataEmail } from "../router/email";
import type { EmailProps } from "../type/type";
import "bootstrap-icons/font/bootstrap-icons.css";


export const ContactUs: React.FC = () => {
  

  return (
        <div className="container_information--contactform">
          
          <div className="contact-container" id="contactus">

          <div className="mytext--contactform">
            {/* <div className="container_close--circule">
              <i className=" bi bi-x-circle close" onClick={handleExit}  style={{color:'black'}}></i>
            </div> */}
            <h1 className="my_title--black" style={{textAlign:'center'}}> <span className="title--span">CONTACT</span> US</h1>
            <p className="my_paragraph--black">
              If you would like to make a purchase, receive more information about
              our solutions, or make any other inquiries, we kindly ask you to fill
              out the form or call one of our regional phone numbers.
            </p>
          </div>

          <ConctactForm/>
          
          <ToastContainer  style={{ marginTop: 65  }}/>
        </div>
        </div>

  );
};


export const ConctactForm: React.FC = () => {

  const navegate = useNavigate();
  const [data, setData] = React.useState<EmailProps>({
    name: "",
    service: "",
    product: "",
    lastname: "",
    phone: "",
    email: "",
    country: "",
    company: "",
    message: "",
  });

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      data.name === "" ||
      data.product === "" ||
      data.phone === "" ||
      data.email === "" ||
      data.company === "" ||
      data.country === "" ||
      data.message === "" ||
      data.lastname === "" ||
      data.service === ""
    ) {
      toast.warning("Please ensure all fields are completed, thank you.");
    } else {
      console.log("soy data ...", data)
      try {
        await dataEmail(data);
        toast.success("Thank you, we'll contact you as fast as we can.");
        setData({
          name: "",
          product: "",
          lastname: "",
          phone: "",
          email: "",
          country: "",
          company: "",
          message: "",
          service: "",
        });
        navegate("/");
      } catch {
        toast.error(
            "There was an error sending your message. Please try again."
        );
      }
    }
  };

  return(
    <form className="contact-form" onSubmit={handleSubmit}>
            <div className="product_information">
              <select
                  className="input_selection"
                  name="service"
                  value={data.service}
                  onChange={handleChange}
              >
                <option defaultValue={""}>--I am writing in relation to--</option>
                <option value={"Human Service"}>Human Service </option>
                <option value={"Healthcare Systems Administration"}>
                  Healthcare Systems Administration
                </option>
                <option value={"IT Consulting"}>IT Consulting</option>
                <option value={"Cybersecurity"}>Cybersecurity</option>
                <option value={"Customer Service"}>Customer Service</option>
                <option value={"Finance Solutions"}>Finance Solutions</option>
                <option value={"Mobile & Web App Development"}>
                  Mobile & Web App Development
                </option>
                <option value={"Data Migration & Systems Integration"}>
                  Data Migration & Systems Integration
                </option>
              </select>
              <input
                  className="input_contactform"
                  type="text"
                  placeholder="Product"
                  name="product"
                  value={data.product}
                  onChange={handleChange}
              />
            </div>
            <textarea
                rows={5}
                placeholder="Message"
                name="message"
                value={data.message}
                onChange={handleChange}
            ></textarea>

            <div className="product_information">
              <input
                  className="input_contactform"
                  type="text"
                  placeholder="Full name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
              />

              <input
                  className="input_contactform"
                  type="tel"
                  placeholder="Telephone: +1 202-456-1414"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
              />
              <input
                  className="input_contactform"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
              />
              <input
                  className="input_contactform"
                  type="text"
                  placeholder="Company"
                  name="company"
                  value={data.company}
                  onChange={handleChange}
              />
              
            </div>
            <button type="submit">Submit</button>
          </form>
  )
}