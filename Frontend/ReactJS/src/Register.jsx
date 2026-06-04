import {  Link } from "react-router-dom"
import axios from "axios";
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
                "https://opulent-space-disco-q7rrqwj9vp9wfxgr6-5500.app.github.dev/signup",
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
        <div>
            <form onSubmit={insert_data}>
                <h2>Create Account</h2>
               
                <label>Name</label><br></br>
                <input type="text" placeholder="Full Name" value={Name} onChange={(e)=>setName(e.target.value)} required/>
                <br></br><br></br>
                
                <label>Email</label><br></br>
                <input type="email" placeholder="Email" value={Email} onChange={(e)=>setEmail(e.target.value)} required/>
                <br></br><br></br>
               
                <label>Password</label><br></br>
                <input type="password" placeholder="Password" value={Password} onChange={(e)=>setPassword(e.target.value)}  required/>
                <br></br><br></br>
             
                <button type="submit">Sign Up</button>
               
                <p>Already have an account? <Link to='/Login'>Login Here</Link></p>
            </form>
        </div>
    )
}

export default Register