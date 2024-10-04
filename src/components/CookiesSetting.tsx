import { Link } from "react-router-dom";
import "../styles/cookiesSetting.css";
import React, { useState } from "react";
import type { CookiesProps } from "../type/type";

type HandleProps = {
  handleAccept: () => null | undefined;
};

const CookiesSetting = ({ handleAccept }: HandleProps) => {
  const [cookiesAcept, setCookiesAcept] = useState<CookiesProps>({
    shareData_and_perfile: true,
    storage_information: true,
    activity_analysis: true,
    perfil_and_publicity:true,
    stadistic:true,
    createPerfil:true,
    shareData:true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCookiesAcept({
      ...cookiesAcept,
      [name]: checked,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAccept();
    console.log("Formulario enviado", cookiesAcept);
  };

  return (
    <div className="container_cookiespolicy">
      <div className="cookies_setting--content">
        <section>
          <h3 className="title_cookies--setting">
          For what purposes is my information used and who uses it?
          </h3>
          <p className="sitting_content">
          This website uses its own cookies as well as those from other entities...
          You can find the complete information in our{" "}
            <Link to={"/cookiesPolicy"}>{" "}Cookies Policies</Link>
          </p>
        </section>
      </div>
      <div className="container_form--cookies">
        <form id="cookiesForms" onSubmit={handleSubmit}>
          <div className="cookies_description">
            <label>
            Share data and profiles for analysis and personalized advertising.
            </label>
            <input
              type="checkbox"
              name="shareData_and_perfile"
              checked={cookiesAcept.shareData_and_perfile}
              onChange={handleChange}
            />
          </div>

          <div className="cookies_description">
            <label>Storage and access to information.</label>
            <input
              type="checkbox"
              name="storage_information"
              checked={cookiesAcept.storage_information}
              onChange={handleChange}
            />
          </div>

          <div className="cookies_description">
            <label>Actively analyze device characteristics.</label>
            <input
              type="checkbox"
              name="activity_analysis"
              checked={cookiesAcept.activity_analysis}
              onChange={handleChange}
            />
          </div>

          <div className="cookies_description">
            <label>Personalized advertising from advertisers.</label>
            <input
              type="checkbox"
              name="perfil_and_publicity"
              checked={cookiesAcept.perfil_and_publicity}
              onChange={handleChange}
            />
          </div>

          <div className="cookies_description">
            <label>Understanding the audience through statistics.</label>
            <input
              type="checkbox"
              name="stadistic"
              checked={cookiesAcept.stadistic}
              onChange={handleChange}
            />
          </div>

          <div className="cookies_description">
            <label>Create profiles for personalized advertising</label>
            <input
              type="checkbox"
              name="createPerfil"
              checked={cookiesAcept.createPerfil}
              onChange={handleChange}
            />
          </div>
           <div className="container_btn--submit">
          <input className="btn_submit--cookies" type="submit" value="Save settings" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CookiesSetting;
