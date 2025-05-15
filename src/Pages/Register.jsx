import React, { useState } from "react";
import Form from "../Components/Form";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [successMessage, setSuccessMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState(false);


    const submitRegistration = (e) => {
        // Prevent page from reloading when form submits (if it reloads, the error/success message won't show)
        e.preventDefault(); 

         // Get the list of users from localStorage
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

        // Check if username already exists
        const userExists = existingUsers.some((user) => user.username === username); 
        if (userExists) {
            setErrorMessage(true);
            setSuccessMessage(false); 
            return;
        }

        // New user object
        const newUser = { username, password };
        //Add new user
        existingUsers.push(newUser);
        // Save the updated user list to localStorage as a string
        localStorage.setItem("users", JSON.stringify(existingUsers)); 

        setSuccessMessage(true);
        setErrorMessage(false); 
    };

    return (
        <div className="center-wrapper">
            <div className="card-main">
                <h1 className="heading">Register</h1>
                <p className="paragraph">Meow, it's time to register! Let's make your purrfect account.</p>
                <form onSubmit={submitRegistration} className="register-form">
                    <Form
                        label="Username"
                        type="text"
                        name="username"
                        value={username}
                        placeholder="Choose your purrfect username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Form
                        label="Password"
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Paw-sword, don't tell anyone"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="cat-fact-btn">Register</button>
                </form>

                {errorMessage && (
                    <p className="registration-message">User already exists</p>
                )}
                {successMessage && (
                    <p className="registration-message">You're all set! Log in to play the Cat-Facts Game!</p>
                )}
            </div>
        </div>
    );
};

export default Register;
