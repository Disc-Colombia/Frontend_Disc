import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles/contactform.css";
import { dataEmail } from "../router/email";
import type { EmailProps } from "../type/type";
import "bootstrap-icons/font/bootstrap-icons.css";
type ConctaProps = {
  handleClose: () => void;
};
export const ContactUs = ({ handleClose }: ConctaProps) => {
  const navegate =useNavigate()
  const [data, setData] = React.useState<EmailProps>({
    name: "",
    product: "",
    lastname: "",
    phone: "",
    email: "",
    contry: "",
    company: "",
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
      data.product === "" ||
      data.phone === "" ||
      data.email === "" ||
      data.company === "" ||
      data.contry === "" ||
      data.message === "" ||
      data.lastname === ""
    ) {
      toast.warning("Please ensure all fields are completed, thank you.");
    } else {
      try {
        await dataEmail(data);
        toast.success("Thank you, we'll contact you as fast as we can.");
        setData({
          name: "",
          product: "",
          lastname: "",
          phone: "",
          email: "",
          contry: "",
          company: "",
          message: "",
        });
        navegate("/")
      } catch {
        toast.error(
          "There was an error sending your message. Please try again."
        );
      }
    }
  };
  const handleExit = () => {
    handleClose();
  };
  return (
    <>
      <div className="container_close--circule">
        <i className=" bi bi-x-circle close" onClick={handleExit}></i>
      </div>
      <div className="container_information--contactform">
        <h2>Contact Form</h2>
        <p className="text_contact--form">
          If you would like to make a purchase, receive more information about
          our solutions, or make any other inquiries, we kindly ask you to fill
          out the form or call one of our regional phone numbers.
        </p>
      </div>
      <div className="contact-container" id="contactus">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="product_information">
            <input
              className="input_contactform"
              type="text"
              placeholder="I am writing in relation to"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
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
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={handleChange}
            />
            <input
              className="input_contactform"
              type="text"
              placeholder="Lastname"
              name="lastname"
              value={data.lastname}
              onChange={handleChange}
            />
            <input
              className="input_contactform"
              type="tel"
              placeholder="Telephone: +1 999 999 999 999"
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
              placeholder="company name"
              name="company"
              value={data.company}
              onChange={handleChange}
            />
            <input
              className="input_contactform"
              type="text"
              placeholder="Contry"
              name="contry"
              value={data.contry}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>
        <ToastContainer />
      </div>
    </>
  );
};
