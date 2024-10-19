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
  service:string;
  lastname: string;
  phone: string;
  email: string;
  country: string;
  company: string;
  message: string;
};
export type DemoProps = {
  FullName: string;
  Email: string;
  Description: string;
};
export interface DemoRequestProps {
  token: string | null;
  data: DemoProps;
}
export type CookiesPropsSitting = {
  shareDataAndProfile:boolean,
  shareData:boolean,
  storageInformation:boolean,
  activityAnalysis:boolean,
  profileAndPublicity:boolean,
  statistics:boolean,
  createProfile:boolean
}