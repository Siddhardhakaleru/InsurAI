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
    </>
  );

  return (
    <BrowserRouter>
      <Routes>

        {/* 👇 USER FRONTEND UI */}
        <Route path="/" element={<HomePage />} />

        {/* 👇 ADMIN PANEL */}
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/plans/:type" element={<PlansPage />} />
        <Route path="/appointments" element={<MyAppointments />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
