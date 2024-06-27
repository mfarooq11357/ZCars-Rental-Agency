// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import FAQS from './components/FAQS';
import ContactUs from './components/ContactUs';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import MagneticFollower from './components/MagneticFollower';



const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <MagneticFollower />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/faq" element={<FAQS />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
                 <Footer/>
            </div>
           
        </Router>
    );
};

export default App;
