import React from "react";
import { useNavigate } from "react-router-dom";
import { DemoProps } from "../type/type";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/modalDemo.css";
import { ToastContainer } from "react-toastify";
import maternapp from "../imgs/maternapp.png";
import { toast } from "react-toastify";
import VideoPlayer from "../components/VideoPlayer";
export const ModalDemo = () => {
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
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      data.FirstName === "" ||
      data.LastName === "" ||
      !emailRegex.test(data.WorkerEmail) ||
      data.CompanyName === "" ||
      data.Title === "" ||
      data.Phone === "" ||
      data.Description === ""
    ) {
      toast.error("Dear user, all fields are required.");
    } else {
      console.log("ENVIANDO LOS DATOS AL SERVER...", data);
      //envio de tados al servidor aqui
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
              src={maternapp}
              alt="imagen maternapp"
            /> */}
          </div>
        </div>
      </div>
      <div className="container_content">
        <div className="container_close--icon">
          <i className="bi bi-x-circle" onClick={handleBack}></i>
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
          <div className="container_btn--requestdemo">
            <button className="btn_send--demo" type="submit">
              {" "}
              Request Demo
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};
