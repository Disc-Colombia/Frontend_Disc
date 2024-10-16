import * as React from "react";

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
};
export type DemoProps = {
  FirstName: string;
  LastName: string;
  Email: string;
  Company: string;
  Job: string;
  Phone: string;
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
