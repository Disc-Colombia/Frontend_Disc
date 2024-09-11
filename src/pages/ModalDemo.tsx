import "../styles/modalDemo.css";
import maternapp from '../imgs/maternapp.png';
export const ModalDemo = () => {
  return (
    <div className="container_demo">
      <div className="container_demo--product">
        <div className="container_maternapp--image">
          <img className="maternapp_image" src={maternapp} alt="imagen maternapp" />
        </div>
      </div>
      <div className="container_content">
        <div className="container_content--tittle">
          <h2 className="demotitle">Schedule a Demo</h2>
        </div>
        <form className="formulario_demo">
          <div className="container_input">
            <div className="container_input--label">
              <label htmlFor="name">First Name:*</label>
              <input
                className="input_demo"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="container_input--label">
              <label htmlFor="lastname">Last Name:*</label>
              <input
                className="input_demo"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Last name"
              />
            </div>
            <div className="container_input--label">
              <label htmlFor="workemail">Work Email:*</label>
              <input
                className="input_demo"
                type="email"
                name="workemail"
                id="workemail"
                placeholder="Email"
              />
            </div>
            <div className="container_input--label">
              <label htmlFor="companyname">Company Name:*</label>
              <input
                className="input_demo"
                type="text"
                name="companyname"
                id="companyname"
                placeholder="Company name"
              />
            </div>
            <div className="container_input--label">
              <label htmlFor="title">Title:*</label>
              <input
                className="input_demo"
                type="text"
                name="title"
                id="title"
                placeholder="Title "
              />
            </div>
            <div className="container_input--label">
              <label htmlFor="phone">Phone:*</label>
              <input
                className="input_demo"
                type="tel"
                name="phone"
                id="phone"
                placeholder="Enter your phone"
              />
            </div>
          </div>

          <div className="container_input--label">
            <label htmlFor="description">Description:*</label>
            <textarea className="input_textarea" name="description" id="description"></textarea>
          </div>
           <div className="container_btn--requestdemo">
            <button className="btn_send--demo" type="submit"> Request Demo</button>
           </div>
        </form>
      </div>
    </div>
  );
};
