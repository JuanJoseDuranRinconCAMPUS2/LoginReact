import React, { useState, useEffect, useRef } from 'react'
import { PropTypes } from 'prop-types';
import { validateUser } from '../js/FormIUsuario';
import { viewRoot } from '../js/changeView';
import '../css/CardsProductos.css'

export default function CardsProducts() {

    useEffect(() => {
    
    }, []);
  
    return (
        <>
            <main>
                <div className="contenedor">
                    <div className="cards" id="cards">
                        
                    </div>
                </div>
            </main>
        </>
    )
}
