import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation  } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./home/Home";
import Login from "./pages/Login";
import DoctorReg from "./Dashboard/Administration/DoctorReg";
import Try from "./pages/Try";
import TokenExpire from "./redux/TokenExpire";
import AdministrationDashboard from "./Dashboard/Administration/DashboardRoutes";
import DoctorDashboard from "./Dashboard/Doctor/Routes";
import AppointmentForm from "./pages/AppointForm";
import Doctors from "./pages/Doctors";
import About from "./home/About";
import PatientDashBoard from "./Dashboard/Patient/Routes";
import Chatbot from "./home/Chatbot";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  const location = useLocation();
  const noHeaderFooterRoutes = ["dashboard"];
  const show = !noHeaderFooterRoutes.includes(location.pathname.split("/")[1]);
  return (
    <>
      {show && <Header />}
      <Chatbot/>
      <TokenExpire />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointment" element={<AppointmentForm />} />
        <Route path="/try" element={<Try />} />
      </Routes>
      {show && <Footer />}

      {!show && currentUser.role == "HospitalAdministration" && <AdministrationDashboard />}
      {!show && currentUser.role == "Doctor" && <DoctorDashboard />}
      {!show && currentUser.role == "Patient" && <PatientDashBoard />}
    </>
  );
}

export default App;
