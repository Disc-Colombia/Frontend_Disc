import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import Cookies from "js-cookie";
import "../styles/cookiesComponent.css";
import type { CookiesPropsSitting } from "../type/type";
import { Link } from "react-router-dom";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

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

const TRACKING_ID = import.meta.env['VITE_APP_TRACKING_ID'];

export const CookiesComponent = () => {
    const [isVisible, setIsVisible] =  useState<boolean | null>(null);
    const [isConfigurationVisible, setIsConfigurationVisible] = useState<boolean>(false);
    const [cookiePreferences, setCookiePreferences] = useState<CookiesPropsSitting>(cookiePreferencesDefaults);

    const loadGoogleAnalytics = useCallback(() => {
        if (!cookiePreferences.statistics) return;

        if (typeof window.gtag !== 'undefined') {
            console.log("Google Analytics ya ha sido cargado.");
            return;
        }

        const script = document.createElement("script");
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`;
        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag(...args: (string | Date | Record<string, unknown>)[]) {
                window.dataLayer.push(args);
            }
            window.gtag = gtag;
            gtag("js", new Date());
            gtag("config", TRACKING_ID, {
                anonymize_ip: true,
            });
            console.log("Google Analytics cargado exitosamente.");
        };

        document.head.appendChild(script);
    }, [cookiePreferences.statistics]);

    useEffect(() => {
        const savedPreferences = Cookies.get("userPreferences");
        if (savedPreferences) {
            setCookiePreferences(JSON.parse(savedPreferences));
        }
    }, []);

    useEffect(() => {
        const cookiesAccepted = Cookies.get("cookiesAccepted");
        if (cookiesAccepted) {
            setIsVisible(false);
            loadGoogleAnalytics();
        }else{
            setIsVisible(true)
        }
    }, [loadGoogleAnalytics]);

    const handlePreferenceChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = e.target;
        setCookiePreferences(prevPreferences => ({
            ...prevPreferences,
            [name]: checked,
        }));
    },[]);

    const handleAcceptCookies = useCallback(async () => {
        Cookies.set("cookiesAccepted", "true", { expires: 365 });
        Cookies.set("userPreferences", JSON.stringify(cookiePreferences), {
            expires: 365,
        });
        setIsVisible(false);
        loadGoogleAnalytics();

        console.log(JSON.stringify(cookiePreferences));
        try {
            const response = await axios.post<{ message: string }>(`${import.meta.env['VITE_API_URL']}/api/cookie-preferences`, cookiePreferences);
            if (response.status === 200) {
                console.log('Preferences saved successfully:', response.data.message);
            }else {
                console.error('Unexpected status code:', response.status);
            }
        } catch (error) {
            console.error('Error saving preferences:', error);
        }
    },[cookiePreferences, loadGoogleAnalytics]);

    const handleRejectCookies = useCallback(() => {
        Cookies.remove("cookiesAccepted");
        Cookies.remove("userPreferences");
        setIsVisible(false);
    },[]);

    const handleShowConfiguration = useCallback(() => {
        setIsConfigurationVisible(true);
    },[]);

    const handleSubmitPreferences = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleAcceptCookies();
    },[handleAcceptCookies]);

    // Check if the cookie status is still being determined
    if (isVisible === null) {
        return null; // Don't render anything while checking cookie status
    }

    // Check if the banner should be hidden (cookies accepted)
    if (!isVisible) {
        return null; // Don't render the banner if cookies are already accepted
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
                            <i className="bi bi-cookie btn_cookies--sitting"></i>Cookie Settings
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
