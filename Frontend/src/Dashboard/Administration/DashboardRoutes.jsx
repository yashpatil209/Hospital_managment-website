import React from "react";
import { Routes, Route } from "react-router-dom";
import "../../../public/css/dashboard.css";
import AdministrationSidebar from "./Sidebar";
import ADashNav from "./DashNavBar";
import Dashboard from "./Dashboard";
import PatientReg from "./PatientReg";
import DoctorReg from "./DoctorReg";
import DoctorList from "./DoctorList";
import PatientList from "./PatientList";
import Bill from "./Bill";
import PatientInfo from "./PatientInfo";
import DischargePatients from "./DischargePatients";
import BillList from "./Billings";

export default function AdministrationDashboard() {
  return (
    <div className="flex dashboard_bg">
      <div>
        <AdministrationSidebar />
      </div>
      <div className="m-left">
        <div className="dashnavbar">
          <ADashNav />
        </div>
        <div className="dash_container">
          <Routes>
            <Route path="/dashboard/administration" element={<Dashboard />} />
            <Route
              path="/dashboard/administration/patient-registration"
              element={<PatientReg />}
            />
            <Route
              path="/dashboard/administration/doctor-registration"
              element={<DoctorReg />}
            />
            <Route
              path="/dashboard/administration/doctorlist"
              element={<DoctorList />}
            />
            <Route
              path="/dashboard/administration/patientlist"
              element={<PatientList />}
            />
            <Route
              path="/dashboard/administration/dischargepatientlist"
              element={<DischargePatients />}
            />
            <Route
              path="/dashboard/administration/patientinfo/:id"
              element={<PatientInfo />}
            />
            <Route path="/dashboard/administration/viewbill/:id" element={<Bill />} />
            <Route path="/dashboard/administration/billlist" element={<BillList />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
