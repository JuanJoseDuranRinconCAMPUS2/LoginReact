import React from 'react'
import ReactDOM from 'react-dom/client'
import FormCUsuario from './components/formCUsuario'
import ModalCUsuario from './components/ModalCUsuario'

let app = document.querySelector('#root')
ReactDOM.createRoot(app).render(
  <React.StrictMode>
    <FormCUsuario/>
    <ModalCUsuario/>
  </React.StrictMode>,
)



