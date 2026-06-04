import { Link } from "react-router-dom"

function Header(){
    return(
        <div className="n">
          
                <Link to='/'><li>Home</li></Link>
                <Link to='/Gallery'><li>API_Call</li></Link>
                <Link to='/About'><li>Display</li></Link>
                <Link to='/Contact us'><li>Counter</li></Link>
            
                
                <Link to ='/Show_User'><li>Show User</li></Link>
                <Link to ='/Static_Website'><li>Static_Website</li></Link>

                <Link to='/Register'><li>Register</li></Link>
                <Link to='/Login'><li>Login</li></Link>
          
        </div>
    )
}

export default Header