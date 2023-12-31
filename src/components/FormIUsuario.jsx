import React, { useState, useEffect, useRef } from 'react'
import { PropTypes } from 'prop-types';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { validateUser } from '../js/FormIUsuario';
import { useForm } from 'react-hook-form';
import '../css/style.css'

const schema = yup.object().shape({
    UsernameI: yup
        .string()
        .required("Username is required")
        .min(3, "Username must be at least 3 characters long")
        .max(100, "Username must be at most 100 characters long")
        .matches(
            /^[A-Za-z0-9-\s.,!]+$/,
            "Username must be a text without special characters"),
    passwordI: yup
        .string()
        .required("Password is required")
        .min(5, "Password must be at least 5 characters long")
        .max(80, "Password must be at most 80 characters long"),
});

export default function FormIUsuario() {
    const navigate = useNavigate();
    const {register, formState: {errors},handleSubmit} = useForm({mode: "all", resolver: yupResolver(schema)});
    
    useEffect(() => {
        const divForm = document.querySelector("#loginUsers");
        divForm.style.display = "block";
        
        const login = document.querySelector(".formLogin");
        const password = document.querySelector("#passwordI");
        const showPasswordButton = document.querySelector("#showPasswordButtonI");
        
        const eventoSubmit = (e) => {
            e.preventDefault();
            handleSubmit((data) => {
                validateUser(data);
                navigate('/content');
            })();
        }

        const eventoPassword = () => {
            if (password.type == "password") {
                password.type = "text";
                showPasswordButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                </svg>
                `;
                return
            } else {
                password.type = "password";
                showPasswordButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                </svg>
                `;
                return
            }
        };

        if (login) {
            login.addEventListener('submit', eventoSubmit);
        }
        if (showPasswordButton) {
            showPasswordButton.addEventListener('click', eventoPassword);
        }

        return () => {
            if (login) {
                login.removeEventListener('submit', eventoSubmit);
            }
            if (showPasswordButton) {
                showPasswordButton.removeEventListener('click', eventoPassword);
            }
        };
    }, []);
  
    return (
        <>
            <div id='loginUsers'>
                <h2 className='titleUserR'>Sign in</h2>
                <form className="formLogin">
                    <span className="input-span">
                        <label htmlFor="Username" className="label">
                            Username
                        </label>
                        <input {...register("UsernameI")} type="text" name="UsernameI" id="UsernameI" required/>
                        <p className="ErrorMessage">{errors.UsernameI?.message}</p>
                    </span>
                    <span className="input-span">
                        <label htmlFor="password" className="label">
                            Password
                        </label>
                        <input {...register("passwordI")} type="password" name="passwordI" id="passwordI" required/>
                        <p className="ErrorMessage">{errors.passwordI?.message}</p>
                    </span>
                    <button type="button" className="button" id="showPasswordButtonI"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                    </svg></button>
                    <span className="span">
                        <Link to={`/recoveryPassword`}>Forgot password?</Link>
                    </span>
                    <button className="button" type="submit" value="Log in"> Send</button>
                    <span className="span">
                        Don't have an account? <Link to={`/SingUp`}>Sign up</Link>
                    </span>
                </form>
            </div>
        <Outlet/>
        </>
    )
}
