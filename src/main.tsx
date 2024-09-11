import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "normalize.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from "./components/Header";
import { Index } from "./pages/Index";
import { ModalDemo } from "./pages/ModalDemo";

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
      },
    ],
  },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
