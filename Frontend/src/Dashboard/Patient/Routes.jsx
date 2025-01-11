import React from "react";
import { Routes, Route } from "react-router-dom";
import "../../../public/css/dashboard.css";
import PatientDashSidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import PDashNav from "./nav";
import PatientInfo from "./PatientInfo";
import Monitoring from "./Monitoring";

export default function PatientDashBoard() {
  const [show, setShow] = React.useState(false);
  console.log(show);

  return (
    <>
    <div className="flex dashboard_bg">
      <div>
        <PatientDashSidebar />
      </div>
      <div className="m-left sm:m-0">
        <div className="dashnavbar">
          <PDashNav />
        </div>
        <div className="dash_container">
          <Routes>
            <Route path="/dashboard/patientinformation" element={<PatientInfo />} />
            <Route path="/dashboard/patient/monitoring" element={<Monitoring />} />
          </Routes>
        </div>
      </div>
    </div>
    </>
  );
}
