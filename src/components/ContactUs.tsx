import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/contactform.css";
import {contactRequest} from "../api/contactEmailRequest.ts";
import "bootstrap-icons/font/bootstrap-icons.css";
import ReCAPTCHA from "react-google-recaptcha";
import {ContactEmailProps} from "../type/type";
import error = toast.error;


export const ContactUs: React.FC = () => {


  return (
      <div className="container_information--contactform">

        <div className="contact-container" id="contactus">

          <div className="mytext--contactform">
            <h1 className="my_title--black" style={{textAlign:'center'}}> <span className="title--span">CONTACT</span> US</h1>
            <p className="my_paragraph--black">
              If you would like to make a purchase, receive more information about
              our solutions, or make any other inquiries, we kindly ask you to fill
              out the form or call one of our regional phone numbers.
            </p>
          </div>
          <ConctactForm/>
          {/*<ToastContainer pstyle={{ marginTop: 65  }} autoClose={3000} />*/}
        </div>
      </div>

  );
};


export const ConctactForm: React.FC = () => {

  const navigate = useNavigate();
  const [captchaValid, setCaptchaValid] = React.useState(false);
  const recaptchaRef = React.useRef<ReCAPTCHA | null>(null);
  const [data, setData] = React.useState<ContactEmailProps>({
    name: "",
    service: "",
    product: "",
    phone: "",
    email: "",
    message: "",
    company: ""
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

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //Validadcion de Email

    if (
        data.name === "" ||
        data.product === "" ||
        data.email === "" ||
        !regex.test(data.email) ||
        data.phone === "" ||
        data.service === "" ||
        !captchaValid
    ) {
      toast.warning("Please ensure all fields are completed, thank you.");
      return;
    }
    try {
      const token = recaptchaRef.current?.getValue() || null;
      const result = await contactRequest({ token, data });
      if (result.success) {
        toast.success("Thank you, we'll contact you as soon as possible.");
        setData({
          name: "",
          service: "",
          product: "",
          phone: "",
          email: "",
          message: "",
          company: ""
        });
        recaptchaRef.current?.reset();
        setCaptchaValid(false);
        setTimeout(() => navigate("/"), 3000); // Navigate after 3 seconds
      }else{
        toast.error("There was an error processing your request. Please try again.");
      } }catch {
      console.error("Error submitting form:", error);
      toast.error("An unexpected error occurred. Please try again later.");
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValid(!!value);
  };

  return(
      <>
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
              <option value={"Healthcare Systems Administration"}>Healthcare Systems Administration</option>
              <option value={"IT Consulting"}>IT Consulting</option>
              <option value={"Cybersecurity"}>Cybersecurity</option>
              <option value={"Customer Service"}>Customer Service</option>
              <option value={"Finance Solutions"}>Finance Solutions</option>
              <option value={"Mobile & Web App Development"}>Mobile & Web App Development</option>
              <option value={"Data Migration & Systems Integration"}>Data Migration & Systems Integration</option>
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
          <div className="container_recaptcha">
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env["VITE_APP_SITE_KEY"] as string}
                onChange={handleCaptchaChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <ToastContainer style={{ marginTop: 65  }} autoClose={3000} />
      </>
  );
};