import React, { useState, useEffect, useRef } from 'react'
import { PropTypes } from 'prop-types';
import { Link, Outlet, useOutletContext } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { sendUpdatePassword } from '../js/FormNewPassword';
import '../css/FormCUsuario.css'

export default function FormNewPassword() {
    let data = useOutletContext();
    const {register, handleSubmit} = useForm();
    useEffect(() => {
        const formNewPW = document.querySelector(".formNewPW");
        const password = document.querySelector(".password");
        const divPassword = document.querySelector("#sendEmailForm");
        const Cpassword = document.querySelector(".Cpassword");
        const showPasswordButton = document.querySelector("#showPasswordButton");
        const recovery = document.querySelector("#recovery");

        const eventoSubmit = (e) => {
            e.preventDefault();
            handleSubmit((dataForm) => {
                data = {...data, ...dataForm}
                sendUpdatePassword(data);
            })();
            formNewPW.reset();
        }

        const showDivPassword = (e) => {
            divPassword.style.display = "block"
        }

        const eventoPassword = () => {
            if (password.type == "password") {
                password.type = "text";
                Cpassword.type = "text";
                showPasswordButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                </svg>
                `;
                return
            } else {
                password.type = "password";
                Cpassword.type = "password";
                showPasswordButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                </svg>
                `;
                return
            }
        };

        if (formNewPW) {
            formNewPW.addEventListener('submit', eventoSubmit);
        }
        if (showPasswordButton) {
            showPasswordButton.addEventListener('click', eventoPassword);
        }
        if (recovery) {
            recovery.addEventListener('click', showDivPassword);
        }
        return () => {
            if (formNewPW) {
                formNewPW.removeEventListener('submit', eventoSubmit);
            }
            if (showPasswordButton) {
                showPasswordButton.removeEventListener('click', eventoPassword);
            }
        };
    }, []);
  
    return (
        <>
            <div id='validatecodeform'>
                <h2 className='titleUserR'>password recovery</h2>
                <form className="formNewPW" autoComplete='off'>
                    <span className="span">
                        enter the code we have sent to your email or your phone number and the new password for your account
                    </span>
                    <span>
                        <label htmlFor="CodePW" className="label">
                            verification code
                        </label>
                        <input {...register("CodePW")} placeholder="Code" className="inputCode" name="CodePW" type="text" maxLength="5"></input>
                    </span>
                    <span className="input-span">
                        <label htmlFor="Password" className="label">
                            Password
                        </label>
                        <input {...register("Password")} type="password" name="Password" className="password" required/>
                    </span>
                    <span className="input-span">
                        <label htmlFor="Cpassword" className="label">
                            confirm password
                        </label>
                        <input {...register("Cpassword")} type="password" name="Cpassword" className="Cpassword" required/>
                    </span>
                    <button type="button" className="button" id="showPasswordButton"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                            <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                            <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                    </svg></button>
                        <button className="button" type="submit" value="Log in"> Send</button>
                        <span className="span">
                        didn't receive the mail? <Link to={`/recoveryPassword`} id='recovery'>forward mail</Link>
                    </span>
            </form>
        </div>
        <Outlet/>
        </>
    )
}
