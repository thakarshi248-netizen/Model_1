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
        <div>
            <form>
                <h2>Login</h2>
                
                <label>Email    </label>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />    
                 <p className={formData.email ? "" : "Error"} id="p1">
                    {formData.email ? "" : "Email is Required!"}
                </p>
                <br></br>
                
                <label>Password    </label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <p className={formData.password ? "" : "Error"} id="p1">
                    {formData.password ? "" : "Password is Required!"}
                </p>
                <br></br>
                
                <button type="submit">Login</button>
                <br></br><br></br>
                
                <p>New here? <Link to='/Register'>Register</Link></p>
            </form>
        </div>
    )
}

export default Login