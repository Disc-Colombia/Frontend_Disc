import { useNavigate } from "react-router-dom";
import "../styles/cookiesPolicy.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const CookiesPolicy = () => {
    const navegate = useNavigate();
    const handleBack = () => {
        navegate(-1);
    };
    return (
        <div className="container_cookies--policy">
            <div className="container_policy--title">
                <div className="contener_title--btn">
                    <h2 className="title_cookies--policy"> Cookies Policy</h2>
                </div>
                <div className="container_btn--back">
                    <button className="btn_backSetting" onClick={handleBack}>
                        <i className="bi  bi-arrow-left-circle-fill back-cookies">
                            Back setting
                        </i>
                    </button>
                </div>
            </div>

            <section>
                <p className="text_cookies--policy">
                    This Cookies Policy explains how Development Innovation System or our
                    partners use cookies and similar tracking technologies when you visit
                    our website{" "}
                    <a
                        href="https://discdc.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        discdc.com{" "}
                    </a>
                </p>
                <p className="text_cookies--policy">
                    {" "}
                    <span className="text_cookies--span">1. What are cookies?</span>{" "}
                    Cookies are small text files that are stored on your device (computer,
                    tablet, smartphone, etc.) when you visit a website. They help websites
                    remember information about your visit, such as your preferred language
                    or other settings, making your next visit easier and the site more
                    useful to you.
                </p>{" "}
                <p className="text_cookies--policy">
          <span className="text_cookies--span">
            2. Types of cookies we use We use different types of cookies for
            various purposes
          </span>
          . Each of the categories is explained below: Necessary cookies: These
          cookies are essential for the proper functioning of the website. They
          include cookies that allow you to log into secure areas of the site.
          Performance or analytics cookies: These cookies help us analyze how
          visitors interact with our website, allowing us to improve it by
          collecting anonymous information, such as the most visited pages.
          Functionality cookies: These cookies allow the website to offer
          enhanced functionality and personalization, such as remembering your
          language preferences or login details. Advertising or marketing
          cookies: These cookies are used to display ads that are relevant to
          you based on your browsing habits.
        </p>{" "}
        <p className="text_cookies--policy">
          {" "}
          <span className="text_cookies--span">
            3. How we use cookies We use cookies to:
          </span>{" "}
          Ensure the proper functioning of the website. Analyze traffic on our
          website. Provide a personalized user experience. Display relevant ads
          to users.
        </p>{" "}
        <p className="text_cookies--policy">
          {" "}
          <span className="text_cookies--span">4. Managing cookies</span> You
          can control and manage cookies in various ways. Most browsers allow
          you to block or delete cookies. Below are links to guides for managing
          cookies in the most common browsers: Google Chrome Mozilla Firefox
          Apple Safari Microsoft Edge Please note that blocking cookies may
          affect your experience on our website.
        </p>{" "}
        <p className="text_cookies--policy">
          {" "}
          5. Third-party cookies Some cookies on our website are set by third
          parties to provide analytics or advertising services. For example, we
          use Google Analytics to track traffic and user behavior on our site.
        </p>{" "}
        <p className="text_cookies--policy">
          {" "}
          6. Changes to this Cookies Policy We may update this Cookies Policy
          from time to time. Any changes will be posted on this page with a new
          "Last Updated" date.
        </p>{" "}
        <p className="text_cookies--policy">
          {" "}
          7. Contact If you have any questions about our use of cookies, you can
          contact us at: Email:
          <span className="text_cookies--span">
            info@discd.com{" "}
          </span> Website:{" "}
          <a
            href="https://discdc.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            discdc.com{" "}
          </a>
        </p>
      </section>
    </div>
  );             
};
