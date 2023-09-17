import React, { useState, useEffect, useRef } from 'react'
import { PropTypes } from 'prop-types';
import { Link, Outlet } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { sendUser } from '../js/FormCUsuario';
import '../css/FormCUsuario.css'

export default function FormCUsuario() {

    const {register, handleSubmit} = useForm();

    useEffect(() => {
        const login = document.querySelector(".form");
        const password = document.querySelector("#password");
        const showPasswordButton = document.querySelector("#showPasswordButton");

        const eventoSubmit = (e) => {
            e.preventDefault();
            handleSubmit((data) => {
                sendUser(data);
            })();       
            login.reset();
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
            <div id='userCreation'>
                <h2 className='titleUserR'>Sign Up</h2>
                <form className="form">
                    <span className="input-span">
                        <label htmlFor="Username" className="label">
                            Username
                        </label>
                        <input {...register("Username")} type="text" name="Username" id="Username" required/>
                    </span>
                    <span className="input-span">
                        <label htmlFor="email" className="label">
                            Email
                        </label>
                        <input {...register("email")} type="email" name="email" id="email" required/>
                    </span>
                    <span className="input-span">
                        <label htmlFor="email" className="label">
                            Rol
                        </label>
                        <select {...register("rol")}  name="rol" id="rol" required>
                            <option value="1">Admin</option>
                            <option value="0">User</option>
                        </select>
                    </span>
                    <span className="input-span">
                        <label htmlFor="password" className="label">
                            Password
                        </label>
                        <input {...register("password")} type="password" name="password" id="password" required/>
                    </span>
                    <button type="button" className="button" id="showPasswordButton"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                    </svg></button>
                        <button className="button" type="submit" value="Log in"> Send</button>
                        <span className="span">
                        Have an account? <Link to={`/`} id='Signin'>Sign in</Link>
                    </span>
            </form>
        </div>
        <Outlet/>
        </>
    )
}
