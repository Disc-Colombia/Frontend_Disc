import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'normalize.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./component/Header";
import { IndexPage } from "./pages/Index";
import { AboutUs } from "./pages/AboutUs";
import { Services } from "./pages/Services";
import { ContactUs } from "./pages/ContactUs";
//Your routers here
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <IndexPage />,
      },
      {
      path:"/aboutUs",
      element:<AboutUs/>
      },
      {
        path:"/services",
        element:<Services/>
      },
      {
        path:"/contactUs",
        element:<ContactUs/>
      }
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
