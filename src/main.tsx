import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header";
import { Index } from "./pages/Index";
import { ModalDemo } from "./pages/ModalDemo";
import { AllServices} from "./pages/AllServices";
import { CookiesPolicy } from "./pages/CookiesPolicy";
import { AboutUs } from "./pages/AboutUs";
import { HumanService } from "./pages/HumanServices";
import { ContactUs } from "./components/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <Index />,
      },{
        path: '/about-us/',
        element:<AboutUs/>
      },{
        path: '/services/',
        element:<AllServices/>
      },{
        path:'/contact-us/',
        element:<ContactUs/>
      },
      {
        path: "/scheduledemo/",
        element: <ModalDemo />,
      },
      {
        path: "/cookiesPolicy/",
        element: <CookiesPolicy />,
      },
      {
        path:"/Human-Service/",
        element:<HumanService/>
      },{
        
      }
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
);
