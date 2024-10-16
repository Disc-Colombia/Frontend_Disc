import * as React from "react";
import ReCAPTCHA from "react-google-recaptcha";

export type BoxProps = {
  children: React.ReactNode;
  image: string;
  tittle: string;
  description: string;
};
export type EmailProps = {
  name: string;
  product: string;
  service: string;
  phone: string;
  email: string;
  message: string;
  company:string;
  token:React.MutableRefObject<ReCAPTCHA | null>;
};
export type DemoProps = {
  FullName: string;
  Email: string;
  Description: string;
};
export type CookiesPropsSitting = {
  shareDataAndProfile: boolean;
  shareData: boolean;
  storageInformation: boolean;
  activityAnalysis: boolean;
  profileAndPublicity: boolean;
  statistics: boolean;
  createProfile: boolean;
};
