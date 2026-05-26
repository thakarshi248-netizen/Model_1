import { Link } from "react-router-dom"
function Register()
{
    return(
        <div>
            <form>
                <h2>Create Account</h2>
               
                <label>Name</label><br></br>
                <input type="text" placeholder="Full Name" required/>
                <br></br><br></br>
                
                <label>Email</label><br></br>
                <input type="email" placeholder="Email" required/>
                <br></br><br></br>
               
                <label>Password</label><br></br>
                <input type="password" placeholder="Password" required/>
                <br></br><br></br>
             
                <button type="submit">Sign Up</button>
               
                <p>Already have an account? <Link to='/Login'>Login Here</Link></p>
            </form>
        </div>
    )
}

export default Register