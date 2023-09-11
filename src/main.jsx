import React from 'react'
import ReactDOM from 'react-dom/client'
import FormCUsuario from './components/formCUsuario'
import ModalCUsuario from './components/ModalCUsuario'
import FormIUsuario from './components/FormIUsuario'

let app = document.querySelector('#root')
ReactDOM.createRoot(app).render(
  <React.StrictMode>
    <FormCUsuario/>
  </React.StrictMode>,
)

let appL = document.querySelector('#login')
ReactDOM.createRoot(appL).render(
  <React.StrictMode>
    <FormIUsuario/>
  </React.StrictMode>,
)

let appM = document.querySelector('#modal')
ReactDOM.createRoot(appM).render(
  <React.StrictMode>
    <ModalCUsuario/>
  </React.StrictMode>,
)


