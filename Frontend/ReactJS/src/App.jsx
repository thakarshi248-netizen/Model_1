import Header from "./Header";    
import Footer from "./Footer";
import Counter from "./Counter";
import Display from "./Display";
import './App.css';
import Login from "./Login";
import Register from "./Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./Products";
import Gallery from "./Gallery";

function App()
{
  return(
    <div >
      <BrowserRouter >
        <Header />
        <div className="App">
          <Routes >
            <Route path="/" element={<h4>Welcome to Home Page</h4>}>Home</Route>
            <Route path="/Gallery" element={<div><Gallery/></div>}>Gallery</Route>
            <Route path="/About" element={<h1>Welcome to About Page</h1>}>About</Route>
            <Route path="/Contact Us" element={<h1>Welcome to Contact Us Page</h1>}>Contact Us</Route>
            <Route path="/Register" element={<Register />}>Register</Route>
            <Route path="/Login" element={<Login />}>Login</Route>
          </Routes>
        </div> 
      </BrowserRouter>
      
      {/* <div className="content">
        <Header />
        <div className="main">

           <Counter />
          <br></br>
          <Display />

        </div>
        <Footer />
      </div> */}
      <Footer />
    </div>
  )
}

export default App