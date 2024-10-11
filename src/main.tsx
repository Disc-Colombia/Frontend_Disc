import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header";
import { Index } from "./pages/Index";
import { ModalDemo } from "./pages/ModalDemo";
import { AllServices } from "./pages/AllServices";
import { CookiesPolicy } from "./pages/CookiesPolicy";
import { AboutUs } from "./pages/AboutUs";
import { Contact_Us } from "./pages/Contact_Us";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/about-us/",
        element: <AboutUs />,
      },
      {
        // path: '/services',
        // element:<AllServices/>
      },
      {
        path: "/scheduledemo/",
        element: <ModalDemo />,
      },
      {
        path: "/allServices/",
        element: <AllServices />,
      },
      {
        path: "/cookiesPolicy/",
        element: <CookiesPolicy />,
      },
      {
        // path:"/Human-Service",
        // element:<HumanService/>
      },
      {
        path: "/contact-us/",
        element: <Contact_Us />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
