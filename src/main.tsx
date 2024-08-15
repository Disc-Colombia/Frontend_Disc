import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Header } from './component/Header';
//Rutas de las paginas aqui
const router = createBrowserRouter([{
  path:"/",
  element:<Header/>
}])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
