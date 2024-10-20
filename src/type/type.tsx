import * as React from "react";
import {ReactNode} from "react";

export type BoxProps = {
  children: React.ReactNode;
  image: string;
  tittle: string;
  description: string;
};
export type ContactEmailProps = {
  name: string;
  service:string;
  product: string;
  phone: string;
  email: string;
  message: string;
  company: string;
};
export interface ContactRequestProps {
  token: string | null;
  data: ContactEmailProps;
}
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
export interface TooltipProps {
  content: string;
  children: ReactNode;
}