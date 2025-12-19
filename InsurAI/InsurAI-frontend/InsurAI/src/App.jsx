import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlansPage from "./components/PlansPage.jsx";
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import InsuranceTypes from './components/InsuranceTypes.jsx'
import Features from './components/Features.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'
import BookAppointment from './components/BookAppointment.jsx'
import AdminRoutes from './components/AdminRoutes.jsx'
import MyAppointments from './components/MyAppointments.jsx'
import UserDashboard from './components/UserDashboard.jsx'
import About from "./pages/About.jsx";
import Careers from "./pages/Careers.jsx";
import Blog from "./pages/Blog.jsx";
import HelpCenter from "./pages/HelpCenter.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";
import Chatbot from "./pages/Chatbot.jsx";

import './App.css'

function App() {

  const HomePage = () => (
    <>
      <Navbar />
      <Hero />
      <InsuranceTypes />
      <Features />
      <Testimonials />
      <Footer />
      <Chatbot />
    </>
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/plans/:type" element={<PlansPage />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
