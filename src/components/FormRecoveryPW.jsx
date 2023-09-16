import React, { useState, useEffect, useRef } from 'react'
import { PropTypes } from 'prop-types';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { RecoveryUser } from '../js/FormRecoveryPW';
import '../css/style.css'

let data = {}
export default function FormRecoveryPW() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        UsernameR: '',
        emailR: '',
    });
    useEffect(() => {

        const recovery = document.querySelector(".formRecovery");
        const divPassword = document.querySelector("#sendEmailForm");

        const eventoSubmit = (e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.target));
            divPassword.style.display = "none";
            setFormData(data);
            RecoveryUser(data);
            navigate('NewPasswordVerification');
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
            <div id='recoveryPassword'>
                <div id='sendEmailForm'>
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
                        <span className="span">
                            Remember your password? <Link to={`/`} id='Signin'>Sign in</Link>
                        </span>
                    </form>
                </div>
            <Outlet context={formData}/>
            </div>
        </>
    )
}
