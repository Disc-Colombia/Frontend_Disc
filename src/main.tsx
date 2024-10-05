import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header";
import { Index } from "./pages/Index";
import { ModalDemo } from "./pages/ModalDemo";
import { AllServices} from "./pages/AllServices";
import { CookiesPolicy } from "./pages/CookiesPolicy";
import { FloatingButtons } from "./components/FloatingButtons";

//Your routers here
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
        path: "/scheduledemo",
        element: <ModalDemo />,
      },{
        path:"/AllServices",
        element: <AllServices/>
      },{
        path:"/cookiesPolicy",
        element:<CookiesPolicy/>,
      }
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <FloatingButtons/>
  </StrictMode>
);
