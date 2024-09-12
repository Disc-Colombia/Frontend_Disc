import React from "react";

export type RotationBoxProps = {
  children: React.ReactNode;
  image: string;
  tittle: string;
 
};

export type BoxProps ={
  children: React.ReactNode;
  image: string;
  tittle: string;
  description:string
}
 export type EmailProps={
  name: string;
  email: string;
  phone: string;
  message: string;

 }
export type DemoProps ={
  
  FirstName:string;
  LastName:string;
  WorkerEmail:string;
  CompanyName:string;
  Title:string;
  Phone:string;
  Description:string;
}