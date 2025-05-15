import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Navigate to Game
import Form from "../Components/Form";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(false);
    const navigate = useNavigate(); // Navigate to Game

const submitLogin = (e) => {
    // Prevent page from reloading when form submits (if it reloads, the error message won't show)
    e.preventDefault(); 

     // Get the list of users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if username and password match any user
    const matchedUser = users.find(
        (user) => user.username === username && user.password === password
    );

    // Save username to localStorage and navigate to game if user found
    if (matchedUser) {
        localStorage.setItem("loggedInUser", matchedUser.username);
        navigate("/game");
    } else {
        setErrorMessage(true);
    }
};

    return (
        <div className="center-wrapper">
            <div className="card-main">
                <h1 className="heading">Login</h1>
                <p className="paragraph">Welcome, fur-iend! Ready to log in?</p>
                <form onSubmit={submitLogin} className="login-form">
                    <Form
                        label="Username"
                        type="text"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Form
                        label="Password"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="cat-fact-btn">Log In</button>
                </form>

            {errorMessage && (
                    <p className="registration-message">Incorrect username or password</p>
                )}
            </div>
        </div>
    );
};

export default Login;