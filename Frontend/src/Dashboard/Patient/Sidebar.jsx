import React, { useState } from "react";
import "../../../public/css/sidebar.css";
import { useLocation } from "react-router-dom";

export default function DoctorDashSidebar() {
  const path = useLocation().pathname;
  return (
    <nav className="sidebar locked">
      <div className="logo_items flex">
        <span className="nav_image">
          <img src="../../../public/images/letter-n.png" alt="logo_img" />
        </span>
        <span className="logo_name">NewlifeHospital</span>
        {/* <i className="bx bx-lock-alt" id="lock-icon" title="Unlock Sidebar"></i>
        <i className="bx bx-x" id="sidebar-close"></i> */}
      </div>

      <div className="menu_container">
        <div className="menu_items">
          <ul className="menu_item">
            <div className="menu_title flex">
              <span className="title">Dashboard</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <a
                href="/"
                className={
                  path == "/"
                    ? "link flex items-center active_link"
                    : "link flex items-center"
                }
              >
                <i class='bx bx-home' ></i>
                <span>Home</span>
              </a>
            </li>
            <li className="item">
              <a
                href="/dashboard/patientinformation"
                className={
                  path == "/dashboard/patientinformation"
                    ? "link flex items-center active_link"
                    : "link flex items-center"
                }
              >
                <i class='bx bx-user'></i>
                <span>Information</span>
              </a>
            </li>
            <li className="item">
              <a
                href="/dashboard/patient/monitoring"
                className={
                  path == "/dashboard/patient/monitoring"
                    ? "link flex items-center active_link"
                    : "link flex items-center"
                }
              >
                <i class='bx bx-detail'></i>
                <span>Monitoring's</span>
              </a>
            </li>
            <li className="item">
              <a
                href="/dashboard/patient/bill"
                className={
                  path == "/dashboard/patient/bill"
                    ? "link flex items-center active_link"
                    : "link flex items-center"
                }
              >
                <i class='bx bx-rupee'></i>
                <span>Bill</span>
              </a>
            </li>
            <li className="item">
              <a
                href="/dashboard/doctor/appointments"
                className={
                  path == "/dashboard/doctor/appointments"
                    ? "link flex items-center active_link"
                    : "link flex items-center"
                }
              >
                <i class="bx bx-calendar-plus"></i>
                <span> Book Appointments</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar_logout">
          <li className="item">
            <a href="#" className="link flex items-center">
              <i class="bx bx-log-out-circle"></i>
              <span>Logout </span>
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}
