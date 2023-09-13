import React from 'react'
import ReactDOM from 'react-dom/client'
import FormCUsuario from './components/FormCUsuario'
import ModalCUsuario from './components/ModalCUsuario'
import FormIUsuario from './components/FormIUsuario'
import CardsProducts from './components/CardsProducts'
import FormRecoveryPW from './components/FormRecoveryPW'

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

let appC = document.querySelector('#cards')
ReactDOM.createRoot(appC).render(
  <React.StrictMode>
    <CardsProducts/>
  </React.StrictMode>,
)

let appR = document.querySelector('#formPassword')
ReactDOM.createRoot(appR).render(
  <React.StrictMode>
    <FormRecoveryPW/>
  </React.StrictMode>,
)



