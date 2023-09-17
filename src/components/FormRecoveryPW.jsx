import React, { useState, useEffect, useRef } from 'react'
import { PropTypes } from 'prop-types';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { RecoveryUser } from '../js/FormRecoveryPW';
import '../css/style.css'

const schema = yup.object().shape({
    UsernameR: yup
        .string()
        .required("Username is required")
        .min(3, "Username must be at least 3 characters long")
        .max(100, "Username must be at most 100 characters long")
        .matches(
            /^[A-Za-z0-9-\s.,!]+$/,
            "Username must be a text without special characters"),
    emailR: yup
        .string()
        .required("email is required")
        .min(15, "email must be at least 15 characters long")
        .max(150, "email must be at most 150 characters long")
        .test("isGmail", "Only Gmail addresses are allowed", (value) => value.endsWith('@gmail.com')),
});

export default function FormRecoveryPW() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        UsernameR: '',
        emailR: '',
    });
    const {register, formState: {errors}, handleSubmit} = useForm({mode: "all", resolver: yupResolver(schema)});
    useEffect(() => {

        const recovery = document.querySelector(".formRecovery");
        const divPassword = document.querySelector("#sendEmailForm");

        const eventoSubmit = (e) => {
            e.preventDefault();
            divPassword.style.display = "none";
            handleSubmit((data) => {
                setFormData(data);
                RecoveryUser(data);
                navigate('NewPasswordVerification');
            })();  
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
                            <input {...register("UsernameR")} type="text" name="UsernameR" id="UsernameR" required/>
                            <p className="ErrorMessage">{errors.UsernameR?.message}</p>
                        </span>
                        <span className="input-span">
                            <label htmlFor="email" className="label">
                                Email
                            </label>
                            <input {...register("emailR")} type="email" name="emailR" id="emailR" required/>
                            <p className="ErrorMessage">{errors.emailR?.message}</p>
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
