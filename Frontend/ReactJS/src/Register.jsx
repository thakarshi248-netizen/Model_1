import {  Link } from "react-router-dom"
import axios from "axios";
import "./App.css";
import { useState } from "react";
function Register()
{
    const [Name,setName] = useState("");
    const [Email,setEmail] = useState("");
    const [Password,setPassword] = useState("");

    const insert_data = async (e) => {
        e.preventDefault();

        console.log({
            Name,
            Email,
            Password
        });

        try {
            const response = await axios.post(
                "https://model-1-1-6iur.onrender.com/signup",
                { Name, Email, Password }
            );
            setName("");
            setEmail("");
            setPassword("");
            console.log("Success:", response.data);
        } catch (error) {
            console.log(error);
        }
    };
    return(
  <div className="page">
    <div className="theme-card">
        <form onSubmit={insert_data}>
            <h2>Create Account</h2>

            <label>Name</label>
            <input
                className="theme-input"
                type="text"
                placeholder="Full Name"
                value={Name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <label>Email</label>
            <input
                className="theme-input"
                type="email"
                placeholder="Email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <br /><br />

            <label>Password</label>
            <input
                className="theme-input"
                type="password"
                placeholder="Password"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button className="theme-btn">Sign Up</button>

            <p className="text-center" style={{marginTop:"15px"}}>
                Already have an account? <Link to="/Login">Login</Link>
            </p>
        </form>
    </div>
</div>
    )
}

export default Register