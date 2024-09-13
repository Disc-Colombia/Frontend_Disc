import * as React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/contactform.css";
import { dataEmail } from "../router/email";
import type { EmailProps } from "../type/type";

export const ContactUs: React.FC = () => {
  const [data, setData] =  React.useState<EmailProps>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      data.name === "" ||
      data.email === "" ||
      data.phone === "" ||
      data.message === ""
    ) {
      toast.warning("Please ensure all fields are completed, thank you.");
    } else {
      toast.success("Thank you, we'll contact you as fast as we can.");
       dataEmail(data)
      setData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
     
      console.log("Form Data:", data);
    }
  };
  return (
    <div className="contact-container" id="contactus">
      <div className="message-box">
        <h2 className="highlight">Send Message</h2>
        <p>Send your questions or concerns below.</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={data.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={data.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          placeholder="Telephone"
          name="phone"
          value={data.phone}
          onChange={handleChange}
        />
        <textarea
          placeholder="Menssage"
          name="message"
          value={data.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">¡SUMMIT!</button>
      </form>
      <ToastContainer />
    </div>
  );
};
