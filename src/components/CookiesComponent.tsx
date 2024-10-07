import * as React from "react";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import "../styles/cookiesComponent.css";
import type { CookiesPropsSitting } from "../type/type";
import { Link } from "react-router-dom";

// Default cookie preferences
const cookiePreferencesDefaults: CookiesPropsSitting = {
  shareDataAndProfile: true,
  shareData: true,
  storageInformation: true,
  activityAnalysis: true,
  profileAndPublicity: true,
  statistics: true,
  createProfile: true,
};

// Labels for cookie preferences
const cookiePreferencesLabels: { [key: string]: string } = {
  shareDataAndProfile: "Share data and profiles for analysis and personalized advertising.",
  shareData: "Only share data without profiling for analysis or advertising personalized",
  storageInformation: "Storage and access to information.",
  activityAnalysis: "Actively analyze device characteristics.",
  profileAndPublicity: "Personalized advertising from advertisers.",
  statistics: "Understanding the audience through statistics.",
  createProfile: "Create profiles for personalized advertising",
};

const TRACKING_ID = import.meta.env.VITE_APP_TRACKING_ID;

export const CookiesComponent = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isConfigurationVisible, setIsConfigurationVisible] = useState<boolean>(false);
  const [cookiePreferences, setCookiePreferences] = useState<CookiesPropsSitting>(cookiePreferencesDefaults);

  // Load cookie preferences on initial render
  useEffect(() => {
    const savedPreferences = Cookies.get("userPreferences");
    if (savedPreferences) {
      setCookiePreferences(JSON.parse(savedPreferences));
    }
  }, []);

  // Check if cookies have already been accepted
  useEffect(() => {
    const cookiesAccepted = Cookies.get("cookiesAccepted");
    if (cookiesAccepted) {
      setIsVisible(false); // Hide banner if the cookie exists
      loadGoogleAnalytics(); // Load Google Analytics if cookies are accepted
    }
  }, []);

  const handlePreferenceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCookiePreferences({
      ...cookiePreferences,
      [name]: checked,
    });
  };

  const handleAcceptCookies = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 365 });
    Cookies.set("userPreferences", JSON.stringify(cookiePreferences), {
      expires: 365,
    });
    setIsVisible(false);
    // here you can run some scripts for accepted cookies
    loadGoogleAnalytics(); // Load Google Analytics when cookies are accepted
  };

  const handleRejectCookies = () => {
    Cookies.remove("cookiesAccepted");
    Cookies.remove("userPreferences");
    setIsVisible(false);
    // here, you can delete optional cookies or avoid scripts from loading
  };

  const handleShowConfiguration = () => {
    setIsConfigurationVisible(true);
  };

  const handleSubmitPreferences = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleAcceptCookies();

    console.log(JSON.stringify(cookiePreferences));
    Cookies.set("userPreferences", JSON.stringify(cookiePreferences), {
      expires: 365,
    });
  };

  const loadGoogleAnalytics = () => {
    if (!cookiePreferences.statistics) return; // Only load if the statistics are allowed

    // Avoid to load multiple times
    if (typeof window.gtag !== 'undefined') {
      console.log("Google Analytics ya ha sido cargado.");
      return;
    }

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id="+TRACKING_ID;
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", TRACKING_ID, {
        anonymize_ip: true, // Anonymize IP for privacy
      });
      console.log("Google Analytics cargado exitosamente.");
    };

    document.head.appendChild(script);
  };


  if (!isVisible) {
    return null;
  }

  return (
      <>
        {isConfigurationVisible ? (
            <div className="container_cookiespolicy">
              <div className="cookies_setting--content">
                <section>
                  <h3 className="title_cookies--setting">
                    For what purposes is my information used and who uses it?
                  </h3>
                  <p className="sitting_content">
                    This website uses its own cookies as well as those from other
                    entities... You can find the complete information in our&nbsp;
                    <Link to={"/cookiesPolicy"}>Cookies Policies</Link>
                  </p>
                </section>
              </div>
              <div className="container_form--cookies">
                <form id="cookiesForms" onSubmit={handleSubmitPreferences}>
                  {Object.keys(cookiePreferences).map((key) => (
                      <div key={key} className="cookies_description">
                        <label className="label_text">
                          {cookiePreferencesLabels[key]}
                        </label>
                        <input
                            type="checkbox"
                            name={key}
                            checked={cookiePreferences[key as keyof CookiesPropsSitting]}
                            onChange={handlePreferenceChange}
                        />
                      </div>
                  ))}
                  <div className="container_btn--submit">
                    <input
                        className="btn_submit--cookies"
                        type="submit"
                        value="Save settings"
                    />
                  </div>
                </form>
              </div>
            </div>
        ) : (
            <div className="cookie-banner">
              <p className="cookies_information">
                This website uses cookies to improve your experience, provide
                personalized content, and analyze site traffic. By clicking
                'Accept', you agree to the use of all cookies. You can manage your
                preferences by clicking 'Cookie Settings'.
              </p>
              <button className="aceptcookies" value="acept" onClick={handleAcceptCookies}>
                Accept
              </button>
              <button
                  className="rejectcookies"
                  value="reject"
                  onClick={handleRejectCookies}
              >
                Reject
              </button>
              <div className="container_cookies--setting">
                <button className="setting_cookies" onClick={handleShowConfiguration}>
                  Cookie Settings
                </button>
              </div>
            </div>
        )}
      </>
  );
};
