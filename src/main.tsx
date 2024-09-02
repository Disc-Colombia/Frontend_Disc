import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import 'normalize.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./component/Header";
import { Index } from "./pages/Index";


//Your routers here
const router = createBrowserRouter([
  {
    path:"/",
    element: <Header />,
    children: [
      {
        index: true,
        element: <Index />,
      }, 
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
