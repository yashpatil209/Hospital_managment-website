import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function AdministrationSidebar() {
  const path = useLocation().pathname;

  return (
    <nav className="sidebar locked">
      <div className="logo_items flex items-center">
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
            <div className="menu_title flex items-center">
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
                <i class="bx bx-home"></i>
                <span>Home</span>
              </a>
            </li>
            <li className="item">
              <a
                href="/dashboard/administration"
                className={
                  path == "/dashboard/administration"
                    ? "link flex items-center active_link"
                    : "link flex items-center"
                }
              >
                <i className="bx bx-grid-alt"></i>
                <span>Overview</span>
              </a>
            </li>
          </ul>

          <ul className="menu_item">
            <div className="menu_title flex items-center">
              <span className="title">Patient</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <a
                href="/dashboard/administration/patient-registration"
                className={
                  path == "/dashboard/administration/patient-registration"
                    ? "link flex items-center active_link"
                    : "link flex items-center"
                }
              >
                <i className="bx bx-user"></i>
                <span>Admit Patient</span>
              </a>
            </li>
            <li className="item">
              <a
                href="/dashboard/administration/patientlist"
                className={
                  path == "/dashboard/administration/patientlist"
                    ? "link flex items-center active_link"
                    : "link flex items-center"
                }
              >
                <i className="bx bx-list-ul"></i>
                <span>Patient List</span>
              </a>
            </li>
            <li className="item">
              <a
                href="/dashboard/administration/dischargepatientlist"
                className={
                  path == "/dashboard/administration/dischargepatientlist"
                    ? "link flex items-center active_link"
                    : "link flex items-center"
                }
              >
                <i className="bx bx-list-ul"></i>
                <span>Discharge Patients</span>
              </a>
            </li>
          </ul>

          <ul className="menu_item">
            <div className="menu_title flex items-center">
              <span className="title">Doctor</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <a
                href="/dashboard/administration/doctor-registration"
                className={
                  path == "/dashboard/administration/doctor-registration"
                    ? "link flex items-center active_link"
                    : "link flex items-center"
                }
              >
                <i className="bx bxs-user"></i>
                <span>Register Doctor</span>
              </a>
            </li>
            <li className="item">
              <a
                href="/dashboard/administration/doctorlist"
                className={
                  path == "/dashboard/administration/doctorlist"
                    ? "link flex items-center active_link"
                    : "link flex items-center"
                }
              >
                <i className="bx bx-list-ul"></i>
                <span>Doctor's List</span>
              </a>
            </li>
          </ul>

          <ul className="menu_item">
            <div className="menu_title flex items-center">
              <span className="title">Finance</span>
              <span className="line"></span>
            </div>
            <li className="item">
              <a
                href="/dashboard/administration/billlist"
                className={
                  path == "/dashboard/administration/billlist"
                    ? "link flex items-center active_link"
                    : "link flex items-center"
                }
              >
                <i className="bx bx-wallet-alt"></i>
                <span>Billing</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="sidebar_logout">
          <li className="item">
            <a href="#" className="link flex items-center">
              <i className="bx bx-log-out-circle"></i>
              <span>Logout </span>
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
}
