import * as React from "react";
import '../styles/contactform.css';

export const ContactUs: React.FC = () => {
  return (
    <div className="contact-container">
      <div className="message-box">
        <h2  className="highlight">Send Message</h2>
        <p>Send your questions or concerns below.</p>
      </div>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="tel" placeholder="Telephone" />
        <textarea placeholder="Menssage"></textarea>
        <button type="submit">¡SUMMIT!</button>
      </form>
    </div>
  );
};
