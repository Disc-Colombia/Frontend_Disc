import * as React from "react";

export type RotationBoxProps = {
  children: React.ReactNode;
  image: string;
  tittle: string;
};

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
  FirstName: string;
  LastName: string;
  WorkerEmail: string;
  CompanyName: string;
  Title: string;
  Phone: string;
  Description: string;
};
export type CookiesPropsSitting={
  shareData_and_perfile:boolean,
  storage_information:boolean,
  activity_analysis:boolean,
  perfil_and_publicity:boolean,
  stadistic:boolean,
  createPerfil:boolean,
  shareData:boolean,
}