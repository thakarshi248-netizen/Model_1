import { Link } from "react-router-dom"

function Header(){
    return(
        <div class="n">
          
                <Link to='/'><li>Home</li></Link>
                <Link to='/Gallery'><li>Gallery</li></Link>
                <Link to='/About'><li>About</li></Link>
                <Link to='/Contact us'><li>Contact Us</li></Link>
            
                <Link to='/Register'><li>Register</li></Link>
                <Link to='/Login'><li>Login</li></Link>
          
        </div>
    )
}

export default Header