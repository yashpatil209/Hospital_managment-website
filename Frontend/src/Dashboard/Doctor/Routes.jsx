import React, { useState, useEffect } from "react";
import { Routes, Route, Router } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import "../../../public/css/dashboard.css";
import DoctorDashSidebar from "./Sidebar";
import DoctorDashNav from "./DoctorDasNav";
import Dashboard from "./Dashboard";
import PatientList from "./PatientList";
import DoctorInfo from "./DoctorInfo";
import Appointments from "./Appointments";
import DoctorInformation from "./DoctorInformation";

export default function DoctorDashboard() {
  const { currentUser } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.user);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`http://localhost:8080/doctor/${currentUser.name}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error adding product:", error);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="flex dashboard_bg">
      <div>
        <DoctorDashSidebar />
      </div>
      <div className="m-left">
        <div className="dashnavbar">
          <DoctorDashNav />
        </div>
        <div className="dash_container">
          <Routes>
            <Route path="/dashboard/doctor" element={<Dashboard />} />
            <Route
              path="/dashboard/doctor/patientlist"
              element={<PatientList />}
            />
            <Route
              path="/dashboard/doctor/doctorInfo"
              element={data ? <DoctorInformation info={data}/> :<DoctorInfo />}
            />
            <Route
              path="/dashboard/doctor/appointments"
              element={<Appointments />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
}