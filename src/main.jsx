import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import FormCUsuario from './components/FormCUsuario'
import ModalCUsuario from './components/ModalCUsuario'
import FormIUsuario from './components/FormIUsuario'
import CardsProducts from './components/CardsProducts'
import FormRecoveryPW from './components/FormRecoveryPW'
import FormNewPassword from './components/FormNewPassword'

const root = createBrowserRouter([
  {
    path: "/",
    element: <FormIUsuario/>,
    children: [
      {
        path: "/content",
        element: <CardsProducts/>
      }
    ]
  },
  {
    path: "/SingUp",
    element: <FormCUsuario/>,
  },
  {
    path: "/recoveryPassword",
    element: <FormRecoveryPW/>,
    children: [
      {
        path: "NewPasswordVerification",
        element: <FormNewPassword/>
      }
    ]
  }
]);

let app = document.querySelector('#root')
ReactDOM.createRoot(app).render(
  <React.StrictMode>
    <RouterProvider router={root}/>
  </React.StrictMode>,
)

let appM = document.querySelector('#modal')
ReactDOM.createRoot(appM).render(
  <React.StrictMode>
    <ModalCUsuario/>
  </React.StrictMode>,
)

