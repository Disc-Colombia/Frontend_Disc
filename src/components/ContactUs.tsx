import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/contactUsForm.css";
import {contactRequest} from "../api/contactEmailRequest.ts";
import "bootstrap-icons/font/bootstrap-icons.css";
import ReCAPTCHA from "react-google-recaptcha";
import {ContactEmailProps} from "../type/type";
import Tooltip from "../components/Tooltip";
import {
  capitalizarNombre,
  validarNombre,
  validarMensaje,
  validarEmail,
  sanitizarInput,
  validarProducto, validarCompany
} from "../utils/inputHelpers.ts";


const validServices = [
  "Human Service",
  "Healthcare Systems Administration",
  "IT Consulting",
  "Cybersecurity",
  "Customer Service",
  "Finance Solutions",
  "Mobile & Web App Development",
  "Data Migration & Systems Integration"
];

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
          <ContactForm/>
        </div>
      </div>

  );
};


export const ContactForm: React.FC = () => {

  const navigate = useNavigate();
  const [captchaValid, setCaptchaValid] = React.useState(false);
  const recaptchaRef = React.useRef<ReCAPTCHA | null>(null);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
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
    let newValue = value;

    switch(name) {
      case 'name':
      case 'product':
      case 'company':
        newValue = value.replace(/[^a-zA-Z\s]/g, '');
        if (newValue.length > 50) newValue = newValue.slice(0, 50);
        break;
      case 'service':
        // No necesita validación, ya las opciones están predefinidas
        break;
      case 'phone':
        newValue = value.replace(/[^\d+]/g, '');
        if (newValue.length > 15) newValue = newValue.slice(0, 15);
        break;
      case 'Email': {
        newValue = value.trim()
        newValue = newValue.toLowerCase();
        newValue = newValue.replace(/\s/g, '');
        newValue = newValue.replace(/[^a-z0-9@.$!_-]/g, '');
        newValue = newValue.replace(/\.{2,}/g, '.');
        newValue = newValue.replace(/^\./, '');
        const atIndex = newValue.indexOf('@');
        if (atIndex !== -1) {
          newValue = newValue.slice(0, atIndex + 1) + newValue.slice(atIndex + 1).replace(/@/g, '');
        }
      }
        break;
      case 'message':
        if (newValue.length > 500) newValue = newValue.slice(0, 500);
        break;
    }
    setData(prev => ({
      ...prev,
      [name]: newValue
    }));
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValid(!!value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailValue = data.email.endsWith('.') ? data.email.slice(0, -1) : data.email;

    const nameError = validarNombre(data.name);
    const productError = validarProducto(data.product);
    const companyError = validarCompany(data.company);
    const emailError = validarEmail(emailValue);
    const messageError = validarMensaje(data.message);

    if (
        nameError ||
        productError ||
        emailError ||
        messageError ||
        data.phone === "" ||
        !validServices.includes(data.service) ||
        !captchaValid
    ) {
      toast.warning("Please ensure all fields are completed, thank you.");

      // Mostrar mensajes de error específicos
      if (nameError) toast.error(nameError);
      if (companyError) toast.error(nameError);
      if (productError) toast.error(productError);
      if (emailError) toast.error(emailError);
      if (messageError) toast.error(messageError);
      if (data.phone === "") toast.error("Please enter a phone number.");
      if (!validServices.includes(data.service)) toast.error("Please select a valid service.");
      if (!captchaValid) toast.error("Please complete the CAPTCHA verification.");
      return;
    }

    setIsSubmitting(true);

    const sanitizedData = {
      name: sanitizarInput(capitalizarNombre(data.name)),
      service: sanitizarInput(data.service),
      product: sanitizarInput(capitalizarNombre(data.product)),
      phone: sanitizarInput(data.phone),
      email: sanitizarInput(emailValue),
      message: sanitizarInput(data.message),
      company: sanitizarInput(capitalizarNombre(data.company))
    };

    try {
      const token = recaptchaRef.current?.getValue() || null;
      const result = await contactRequest({
        token,
        data: sanitizedData
      });

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
        setTimeout(() => navigate("/"), 3000);
      }else{
        toast.error("There was an error processing your request. Please try again.");
      }
    }catch (err) {
      console.error("Error submitting form:", err);
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return(
      <>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="product_information">
            <Tooltip content="Please select a service">
              <select
                  className="input_selection"
                  name="service"
                  value={data.service}
                  onChange={handleChange}
              >
                <option defaultValue={""}>--I am writing in relation to--</option>
                {validServices.map((service) => (
                    <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </Tooltip>
            <Tooltip content="Only letters and spaces allowed">
              <input
                  className="input_contactform"
                  type="text"
                  placeholder="Product"
                  name="product"
                  value={data.product}
                  onChange={handleChange}
              />
            </Tooltip>
          </div>
          <Tooltip content="Enter your message. Max 500 characters.">
          <textarea
              rows={5}
              placeholder="Message"
              name="message"
              value={data.message}
              onChange={handleChange}
          ></textarea>
          </Tooltip>

          <div className="product_information">
            <Tooltip content="Only letters and spaces allowed">
              <input
                  className="input_contactform"
                  type="text"
                  placeholder="Full name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
              />
            </Tooltip>
            <Tooltip content="Only numbers and '+' allowed.">
              <input
                  className="input_contactform"
                  type="tel"
                  placeholder="Telephone: +1 202-456-1414"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
              />
            </Tooltip>
            <Tooltip content="Enter a valid email address.">
              <input
                  className="input_contactform"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
              />
            </Tooltip>
            <Tooltip content="Only letters and spaces allowed">
              <input
                  className="input_contactform"
                  type="text"
                  placeholder="Company"
                  name="company"
                  value={data.company}
                  onChange={handleChange}
              />
            </Tooltip>
          </div>
          <div className="container_recaptcha">
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env["VITE_APP_SITE_KEY"] as string}
                onChange={handleCaptchaChange}
            />
          </div>
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </form>
        <ToastContainer style={{ marginTop: 65  }} autoClose={3000} />
      </>
  );
};