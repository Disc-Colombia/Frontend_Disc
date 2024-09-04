import * as React from "react";
import "../styles/contactform.css";

export const ContactUs: React.FC = () => {
  const [data, setData] = React.useState({
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
    console.log("Form Data:", data);
    // Aquí manejar el envío del formulario
  };
  return (
    <div className="contact-container" id="contactus">
      <div className="message-box">
        <h2 className="highlight">Send Message</h2>
        <p>Send your questions or concerns below.</p>
      </div>
      <form className="contact-form">
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
        <button type="submit" onSubmit={handleSubmit}>
          ¡SUMMIT!
        </button>
      </form>
    </div>
  );
};
