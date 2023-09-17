import React, { useState, useEffect, useRef } from 'react'
import { PropTypes } from 'prop-types';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { sendUser } from '../js/FormCUsuario';
import '../css/FormCUsuario.css'

const schema = yup.object().shape({
    Username: yup
        .string()
        .required("Username is required")
        .min(3, "Username must be at least 3 characters long")
        .max(100, "Username must be at most 100 characters long")
        .matches(
            /^[A-Za-z0-9-\s.,!]+$/,
            "Username must be a text without special characters"),
    email: yup
        .string()
        .required("email is required")
        .min(15, "email must be at least 15 characters long")
        .max(150, "email must be at most 150 characters long")
        .test("isGmail", "Only Gmail addresses are allowed", (value) => value.endsWith('@gmail.com')),
    password: yup
        .string()
        .required("Password is required")
        .min(5, "Password must be at least 5 characters long")
        .max(80, "Password must be at most 80 characters long"),
    Newpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match") 
        .required("Password confirmation is required")
        .min(5, "Password must be at least 5 characters long")
        .max(80, "Password must be at most 80 characters long"),
});

export default function FormCUsuario() {

    const navigate = useNavigate();
    const {register, formState: {errors}, handleSubmit} = useForm({mode: "all", resolver: yupResolver(schema)});

    useEffect(() => {
        const login = document.querySelector(".form");
        const password = document.querySelector("#password");
        const Newpassword = document.querySelector("#Newpassword");
        const showPasswordButton = document.querySelector("#showPasswordButton");

        const eventoSubmit = (e) => {
            e.preventDefault();
            handleSubmit((data) => {
                sendUser(data);
                navigate('/');  
            })();     
        }

        const eventoPassword = () => {
            if (password.type == "password") {
                password.type = "text";
                Newpassword.type = "text";
                showPasswordButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash-fill" viewBox="0 0 16 16">
                    <path d="m10.79 12.912-1.614-1.615a3.5 3.5 0 0 1-4.474-4.474l-2.06-2.06C.938 6.278 0 8 0 8s3 5.5 8 5.5a7.029 7.029 0 0 0 2.79-.588zM5.21 3.088A7.028 7.028 0 0 1 8 2.5c5 0 8 5.5 8 5.5s-.939 1.721-2.641 3.238l-2.062-2.062a3.5 3.5 0 0 0-4.474-4.474L5.21 3.089z"/>
                    <path d="M5.525 7.646a2.5 2.5 0 0 0 2.829 2.829l-2.83-2.829zm4.95.708-2.829-2.83a2.5 2.5 0 0 1 2.829 2.829zm3.171 6-12-12 .708-.708 12 12-.708.708z"/>
                </svg>
                `;
                return
            } else {
                password.type = "password";
                Newpassword.type = "text";
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
                        <p className="ErrorMessage">{errors.Username?.message}</p>
                    </span>
                    <span className="input-span">
                        <label htmlFor="email" className="label">
                            Email
                        </label>
                        <input {...register("email")} type="email" name="email" id="email" required/>
                        <p className="ErrorMessage">{errors.email?.message}</p>
                    </span>
                    <span className="input-span">
                        <label htmlFor="email" className="label">
                            Rol
                        </label>
                        <select {...register("rol")}  name="rol" id="rol" required>
                            <option value="1">Admin</option>
                            <option value="0">User</option>
                        </select>
                        <p className="ErrorMessage"></p>
                    </span>
                    <span className="input-span">
                        <label htmlFor="password" className="label">
                            Password
                        </label>
                        <input {...register("password")} type="password" name="password" id="password" required/>
                        <p className="ErrorMessage">{errors.password?.message}</p>
                    </span>
                    <span className="input-span">
                        <label htmlFor="password" className="label">
                            confirm password
                        </label>
                        <input {...register("Newpassword")} type="password" name="Newpassword" id="Newpassword" required/>
                        <p className="ErrorMessage">{errors.Newpassword?.message}</p>
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
