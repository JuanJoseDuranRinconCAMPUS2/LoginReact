import React, { useState, useEffect, useRef } from 'react'
import { PropTypes } from 'prop-types';
import { sendUser } from '../js/FormCUsuario';

export default function FormCUsuario() {

    useEffect(() => {
        const login = document.querySelector(".form");
        const password = document.querySelector("#password");
        const showPasswordButton = document.querySelector("#showPasswordButton");

        const eventoSubmit = (e) => {
            e.preventDefault();
            let data = Object.fromEntries(new FormData(e.target));
            sendUser(data);
            login.reset();
        }

        const eventoPassword = () => {
            if (password.type == "password") {
                password.type = "text";
                showPasswordButton.textContent = 'Hide Password';
                return
            } else {
                password.type = "password";
                showPasswordButton.textContent = "Show Password";
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
            <h2>User Registration</h2>
            <form className="form">
                <span className="input-span">
                    <label htmlFor="Username" className="label">
                        Username
                    </label>
                    <input type="Username" name="Username" id="Username" required/>
                </span>
                <span className="input-span">
                    <label htmlFor="email" className="label">
                        Email
                    </label>
                    <input type="email" name="email" id="email" required/>
                </span>
                <span className="input-span">
                    <label htmlFor="email" className="label">
                        Rol
                    </label>
                    <select name="rol" id="rol" required>
                        <option value="1">Admin</option>
                        <option value="0">User</option>
                    </select>
                </span>
                <span className="input-span">
                    <label htmlFor="password" className="label">
                        Password
                    </label>
                    <input type="password" name="password" id="password" required/>
                    <button type="button" id="showPasswordButton">Show Password</button>
                </span>
                <span className="span">
                    <a href="#">Forgot password?</a>
                    </span>
                    <input className="submit" type="submit" value="Log in" />
                    <span className="span">
                    Don't have an account? <a href="#">Sign up</a>
                </span>
        </form>
        </>
    )
}
