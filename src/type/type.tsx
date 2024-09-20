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
  contry: string;
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
