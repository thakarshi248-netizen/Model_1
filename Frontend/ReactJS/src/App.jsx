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
import Static_Website from "./Static_Website";
import Show_User from "./Show_User";
import Home from "./Home";
import { Analytics } from '@vercel/analytics/react';

function App()
{
  return(
    <div >
      <BrowserRouter >
        <Header />
        <div className="App">
          <Routes >
            <Route path="/" element={<div> <h1>Welcome to Home Page</h1><Home /></div>}>Home</Route>
            <Route path="/Gallery" element={<div><Gallery/></div>}>Gallery</Route>
            <Route path="/About" element={<div><h1>Welcome to About Page</h1><Display /></div>}>About</Route>
            <Route path="/Contact Us" element={<div><h1>Welcome to Contact Us Page</h1><Counter /></div>}>Contact Us</Route>
            <Route path="/Register" element={<Register />}>Register</Route>
            <Route path="/Login" element={<Login />}>Login</Route>
            <Route path="/Static_Website" element={<Static_Website />}>Static_Website</Route>
            <Route path="/Show_User" element={<Show_User />}>Show_User</Route>
          </Routes>
        </div> 
      </BrowserRouter>
      <Footer />
      <Analytics />
    </div>
  )
}

export default App