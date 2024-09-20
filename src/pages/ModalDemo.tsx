import React from "react";
import { useNavigate } from "react-router-dom";
import { DemoProps } from "../type/type";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/modalDemo.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

//import maternapp from "../imgs/maternapp.png";
import ReCAPTCHA from 'react-google-recaptcha'
import VideoPlayer from "../components/VideoPlayer";
export const ModalDemo: React.FC = () => {

  const redirect = useNavigate();
  const [data, setData] = React.useState<DemoProps>({
    FirstName: "",
    LastName: "",
    WorkerEmail: "",
    CompanyName: "",
    Title: "",
    Phone: "",
    Description: "",
  });

  const [captchaValid, setCaptchaValid] = React.useState(false);
  const recaptchaRef = React.useRef<ReCAPTCHA | null>(null);
  //const [recaptchaToken, setRecaptchaToken] = React.useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleCaptchaChange = (value: string | null) => {
    if (value) {
      setCaptchaValid(true);
      //setRecaptchaToken(value); // Guardamos el token del captcha
    } else {
      setCaptchaValid(false);
      //setRecaptchaToken(null);
      toast.error("Please complete the CAPTCHA verification.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      data.FirstName === "" ||
      data.LastName === "" ||
      !emailRegex.test(data.WorkerEmail) ||
      data.CompanyName === "" ||
      data.Title === "" ||
      data.Phone === "" ||
      data.Description === "" || !captchaValid
    ) {
      toast.error("Dear user, all fields are required and CAPTCHA must be completed.");
      //return;
    } else {
      try {
        // Realizamos la petición POST al backend
        const response = await fetch(`${import.meta.env.VITE_API_URL}/verify-recaptcha`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            token: recaptchaRef.current?.getValue(),
            data,
          }),
        });

        const result = await response.json();

        if (result.success) {
          toast.success("Thank you, we'll contact you as fast as we can.");
          setData({
            FirstName: "",
            LastName: "",
            WorkerEmail: "",
            CompanyName: "",
            Title: "",
            Phone: "",
            Description: "",
          });
          recaptchaRef.current?.reset();
          setCaptchaValid(false);
        }else {
          toast.error("CAPTCHA verification failed.");
        }
      }catch (error) {
        toast.error("Error sending the request to the server.");
        console.error(error);
      }
    }
  };

  const handleBack = () => {
    redirect("/");
  };

  return (
    <div className="container_demo">
      <div className="container_demo--product">
        <div className="container_maternapp--image">
          <h2 className="title_demo">
            Get information and execute strategy all in one place.
          </h2>
          <p className="demo_information">
            Ready to boost your business strategy? Schedule a 30-minute
            call/conversation with our team. We’ll discuss your goals, any
            challenges you’re facing, and the things you’re looking software.
          </p>
          <div className="container_image--product">
            <VideoPlayer />

            {/* <img
              className="maternapp_image"
              src={maternapp as string}
              alt="imagen maternapp"
            /> */}
          </div>
        </div>
      </div>
      <div className="container_content">
        <div className="container_close--icon">
          <i className="bi bi-x-circle modal_close" onClick={handleBack}></i>
        </div>
        <div className="container_content--tittle">
          <h2 className="demotitle">Schedule a Demo</h2>
        </div>
        <form className="formulario_demo" onSubmit={handleSubmit}>
          <div className="container_input">
            <div className="container_input--label">
              <label htmlFor="FirstName">First Name:*</label>
              <input
                  className="input_demo"
                  type="text"
                  name="FirstName"
                  id="FirstName"
                  placeholder="First Name"
                  value={data.FirstName}
                  onChange={handleChange}
              />
            </div>
            <div className="container_input--label">
              <label htmlFor="LastName">Last Name:*</label>
              <input
                  className="input_demo"
                  type="text"
                  name="LastName"
                  id="LastName"
                  placeholder="First Name"
                  value={data.LastName}
                  onChange={handleChange}
              />
            </div>
            <div className="container_input--label">
              <label htmlFor="WorkerEmail">Work Email:*</label>
              <input
                  className="input_demo"
                  type="email"
                  name="WorkerEmail"
                  id="WorkerEmail"
                  placeholder="Email"
                  value={data.WorkerEmail}
                  onChange={handleChange}
              />
            </div>
            <div className="container_input--label">
              <label htmlFor="CompanyName">Company Name:*</label>
              <input
                  className="input_demo"
                  type="text"
                  name="CompanyName"
                  id="CompanyName"
                  placeholder="Company name"
                  value={data.CompanyName}
                  onChange={handleChange}
              />
            </div>
            <div className="container_input--label">
              <label htmlFor="Title">Title:*</label>
              <input
                  className="input_demo"
                  type="text"
                  name="Title"
                  id="Title"
                  placeholder="Title "
                  value={data.Title}
                  onChange={handleChange}
              />
            </div>
            <div className="container_input--label">
              <label htmlFor="Phone">Phone:*</label>
              <input
                  className="input_demo"
                  type="tel"
                  name="Phone"
                  id="Phone"
                  placeholder="+1 999 999 9999"
                  value={data.Phone}
                  onChange={handleChange}
              />
            </div>
          </div>

          <div className="container_input--label">
            <label htmlFor="Description">Description:*</label>
            <textarea
                className="input_textarea"
                name="Description"
                id="Description"
                value={data.Description}
                onChange={handleChange}
            ></textarea>
          </div>

          <div className="container_recapchart">
            <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_APP_SITE_KEY as string}
                onChange={handleCaptchaChange}
            />
          </div>

          <div className="container_btn--requestdemo">
            <button className="btn_send--demo" type="submit">
              {" "}
              Request Demo
            </button>
          </div>
        </form>
      </div>
      <ToastContainer/>
    </div>
  );
};
