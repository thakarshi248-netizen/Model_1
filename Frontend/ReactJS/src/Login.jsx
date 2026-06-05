import { useState } from "react"
import { Link } from "react-router-dom"

function Login()
{
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    return(
       <div className="page">
    <div className="theme-card">
        <form>
            <h2>Login</h2>

            <label>Email</label>
            <input
                className="theme-input"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />

            {!formData.email && (
               <p className="error">Email is Required!</p>
            )}

            <br />

            <label>Password</label>
            <input
                className="theme-input"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
            />

            {!formData.password && (
                <p className="error">Password is required</p>
            )}

            <br />

            <button className="theme-btn">Login</button>

            <p className="text-center" style={{marginTop:"15px"}}>
                New here? <Link to="/Register">Register</Link>
            </p>
        </form>
    </div>
</div>
    )
}

export default Login