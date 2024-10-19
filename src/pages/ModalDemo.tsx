import React from "react";
import { useNavigate } from "react-router-dom";
import { DemoProps } from "../type/type";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/modalDemo.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha'
import VideoPlayer from "../components/VideoPlayer";
import { capitalizarNombre, validarNombre, validarEmail, validarMensaje, sanitizarInput } from "../utils/inputHelpers";
import Tooltip from "../components/Tooltip";
import { demoRequest } from '../api/demoRequest.ts';

export const ModalDemo: React.FC = () => {
  const redirect = useNavigate();
  const [data, setData] = React.useState<DemoProps>({
    FullName: "",
    Email: "",
    Description: "",
  });

  const [captchaValid, setCaptchaValid] = React.useState(false);
  const recaptchaRef = React.useRef<ReCAPTCHA | null>(null);

  const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    let newValue = value;

    switch(name) {
      case 'FullName':
        newValue = value.replace(/[^a-zA-Z\s]/g, '');
        if (newValue.length > 50) newValue = newValue.slice(0, 50);
        break;
      case 'Email':
      {
        // Removes whitespace from the beginning and end of the string.
        newValue = value.trim();

        // Converts all characters in the string to lowercase.
        newValue = newValue.toLowerCase();

        // Removes all whitespace characters within the string
        newValue = newValue.replace(/\s/g, '');

        // Filters the string to keep only valid characters (lowercase letters, digits, and specific special characters).
        newValue = newValue.replace(/[^a-z0-9@.$!_-]/g, '');

        // Replaces instances of two or more consecutive periods with a single period.
        newValue = newValue.replace(/\.{2,}/g, '.');

        // Removes a period if it appears at the start of the string.
        newValue = newValue.replace(/^\./, '');

        // Placeholder for additional logic to check for the presence of the '@
        const atIndex = newValue.indexOf('@');
        if (atIndex !== -1) {
          newValue = newValue.slice(0, atIndex + 1) + newValue.slice(atIndex + 1).replace(/@/g, '');
        }
      }
        break;
      case 'Description':
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

    // Remove Trailing Period from Email.
    const emailValue = data.Email.endsWith('.') ? data.Email.slice(0, -1) : data.Email;

    const fullNameError = validarNombre(data.FullName);
    const emailError = validarEmail(emailValue);
    const descriptionError = validarMensaje(data.Description);

    if (fullNameError || emailError || descriptionError || !captchaValid) {
      if (fullNameError) toast.error(fullNameError);
      if (emailError) toast.error(emailError);
      if (descriptionError) toast.error(descriptionError);
      if (!captchaValid) toast.error("Please complete the CAPTCHA verification.");
      return;
    }

    const capitalizedName = capitalizarNombre(data.FullName);
    const sanitizedData = {
      FullName: sanitizarInput(capitalizedName),
      Email: sanitizarInput(emailValue),
      Description: sanitizarInput(data.Description),
    };

    try {
      const result = await demoRequest({
        token: recaptchaRef.current?.getValue() || null,
        data: sanitizedData,
      });
      if (result.success) {
        toast.success("Thank you, we'll contact you as fast as we can.");
        setData({
          FullName: "",
          Email: "",
          Description: "",
        });
        recaptchaRef.current?.reset();
        setCaptchaValid(false);
      } else {
        toast.error("CAPTCHA verification failed.");
      }
    } catch (error) {
      toast.error("Error sending the request to the server.");
      console.error(error);
    }
  };

  const handleBack = () => {
    redirect("/");
  };

  return (
      <div className="container_demo">
        <div className="container_demo--product">
          <div className="container_maternapp--image">
            <p className="my_title--black" style={{textAlign: 'center'}}>
              Get information and execute strategy<span className="title--span"> all in one place.</span>
            </p>
            <p className="my_paragraph--black">
              Ready to boost your business strategy? Schedule a 30-minute
              call/conversation with our team. We’ll discuss your goals, any
              challenges you’re facing, and the things you’re looking software.
            </p>
            <div className="container_image--product">
              <VideoPlayer />
            </div>
          </div>
        </div>
        <div className="container_content">
          <div className="container_close--icon">
            <i className="bi bi-x-circle" onClick={handleBack}></i>
          </div>
          <div className="my_title--black" style={{textAlign:'center'}}>
            <h2 className="demotitle">Schedule a Demo</h2>
          </div>
          <form className="formulario_demo" onSubmit={handleSubmit}>
            <div className="container_input">
              <div className="container_input--label">
                <label htmlFor="FullName">Full Name:*</label>
                <Tooltip content="Only letters and spaces allowed. Max 50 characters.">
                  <input
                      className="input_demo"
                      type="text"
                      name="FullName"
                      id="FullName"
                      placeholder="Full Name"
                      value={data.FullName}
                      onChange={handleChange}
                  />
                </Tooltip>
              </div>
              <div className="container_input--label">
                <label htmlFor="Email">Email:*</label>
                <Tooltip content="Enter a valid email address.">
                  <input
                      className="input_demo"
                      type="email"
                      name="Email"
                      id="Email"
                      placeholder="Email"
                      value={data.Email}
                      onChange={handleChange}
                  />
                </Tooltip>
              </div>
            </div>

            <div className="container_input--label">
              <label htmlFor="Description">Message:</label>
              <Tooltip content="Max 500 characters.">
            <textarea
                className="input_textarea"
                name="Description"
                id="Description"
                value={data.Description}
                onChange={handleChange}
            ></textarea>
              </Tooltip>
            </div>

            <div className="container_recapchart">
              <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey={import.meta.env['VITE_APP_SITE_KEY'] as string}
                  onChange={handleCaptchaChange}
              />
            </div>

            <div className="container_btn--requestdemo">
              <button className="btn_send--demo" type="submit">
                Request Demo
              </button>
            </div>
          </form>
        </div>
        <ToastContainer/>
      </div>
  );
};