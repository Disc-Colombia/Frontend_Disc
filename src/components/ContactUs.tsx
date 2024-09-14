import * as React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/contactform.css";
import { dataEmail } from "../router/email";
import type { EmailProps } from "../type/type";

export const ContactUs: React.FC = () => {
  const [data, setData] = React.useState<EmailProps>({
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
        data.name === "" ||
        data.email === "" ||
        data.phone === "" ||
        data.message === ""
    ) {
      toast.warning("Please ensure all fields are completed, thank you.");
    } else {
      try {
        await dataEmail(data);
        toast.success("Thank you, we'll contact you as fast as we can.");
        setData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      // } catch (error) {
      } catch{
        toast.error("There was an error sending your message. Please try again.");
      }
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
              placeholder="Message"
              name="message"
              value={data.message}
              onChange={handleChange}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
        <ToastContainer />
      </div>
  );
};
