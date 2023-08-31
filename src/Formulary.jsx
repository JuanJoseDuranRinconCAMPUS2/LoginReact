import React, { useState, useEffect, useRef } from 'react'
import { PropTypes } from 'prop-types';
export default function Formulary({nombre}) {
    const [ nom , setNombre] = useState(nombre)
    // console.log(nom);

    const cambiar = ()=>{
        setNombre((nom) => {
            nom = "Juan";
            return nom;
        })
    }

    useEffect(()=>{
        let myBtn = document.querySelector("#info")
        console.log(myBtn.textContent);
    })
  return (
    <>
        <div>
            Formulary
        </div>
        <div>{nom}</div>

        <button onClick={cambiar} id='hola'> Click </button>

        <div id='info'>
            Nombre : {nom}
        </div>
    </>
  )
}

Formulary.propTypes = {
    nombre: PropTypes.string.isRequired
}

Formulary.defaultProps ={
    nombre : "5"
}