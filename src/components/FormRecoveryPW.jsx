import React, { useState, useEffect, useRef } from 'react'
import { PropTypes } from 'prop-types';
import { RecoveryUser } from '../js/FormRecoveryPW';
import '../css/style.css'

export default function FormRecoveryPW() {

    useEffect(() => {

        const recovery = document.querySelector(".formRecovery");
        const divPassword = document.querySelector("#formPassword");

        divPassword.style.display = "none";

        const eventoSubmit = (e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.target));
            RecoveryUser(data);
            recovery.reset();
        }

        if (recovery) {
            recovery.addEventListener('submit', eventoSubmit);
        }

        return () => {
            if (recovery) {
                recovery.removeEventListener('submit', eventoSubmit);
            }
        };
    }, []);
  
    return (
        <>
            <h2 className='titleUserR'>lost your password?</h2>
            <form className="formRecovery">
                <span className="span">
                    enter your username and email to send you an email with your password recovery code
                </span>
                <span className="input-span">
                    <label htmlFor="Username" className="label">
                        Username
                    </label>
                    <input type="Username" name="UsernameR" id="UsernameR" required/>
                </span>
                <span className="input-span">
                    <label htmlFor="email" className="label">
                        Email
                    </label>
                    <input type="email" name="emailR" id="emailR" required/>
                </span>
                <button className="button" type="submit" value="recovery P"> Send</button>

        </form>
        </>
    )
}
