import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";

import Home from "./Home";
import Gallery from "./Gallery";
import Display from "./Display";
import Counter from "./Counter";
import Show_User from "./Show_User";
import Static_Website from "./Static_Website";
import Register from "./Register";
import Login from "./Login";

function App() {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Gallery" element={<Gallery />} />
                <Route path="/Display" element={<Display />} />
                <Route path="/Counter" element={<Counter />} />
                <Route path="/Show_User" element={<Show_User />} />
                <Route path="/Static_Website" element={<Static_Website />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Login" element={<Login />} />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;