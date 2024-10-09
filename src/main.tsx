import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header";
import { Index } from "./pages/Index";
import { ModalDemo } from "./pages/ModalDemo";
import { AllServices} from "./pages/AllServices";
import { AboutUs } from "./pages/AboutUs";
import { HumanService } from "./pages/HumanServices";

//Your routers here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <Index />,
      },{
        path: '/aboutus',
        element:<AboutUs/>
      },{
        // path: '/services',
        // element:<AllServices/>
      },
      {
        path: "/scheduledemo",
        element: <ModalDemo />,
      },{
        path:"/AllServices",
        element: <AllServices/>
      },
      {
        // path:"/Human-Service",
        // element:<HumanService/>
      }
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
