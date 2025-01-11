import React, { useState } from "react";
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import "../../public/css/page.css";
import { logout } from "../redux/slice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Dropdown } from "flowbite-react";
import { useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const path = useLocation().pathname;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <>
      <div className="navbar_container">
        <Navbar className="px-22">
          <NavbarBrand href="/">
            <img
              src="../../../images/letter-n.png"
              className="mr-3 h-6 sm:h-9"
              alt=""
            />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Newlife Hospital
            </span>
          </NavbarBrand>
          <Navbar.Toggle className="text-black"/>
          <NavbarCollapse className="">
            <NavbarLink href="/" active={path == "/"} className="mt-1">
              Home
            </NavbarLink>
            <NavbarLink href="/about-us" active={path == "/about-us"} className="mt-1">
              About
            </NavbarLink>
            <NavbarLink href="" className="mt-1">
              Services
            </NavbarLink>
            <NavbarLink href="/doctors" active={path == "/doctors"} className="mt-1">
              Book Appointment
            </NavbarLink>
            <NavbarLink href="" className="mt-1">
              Contact Us
            </NavbarLink>
            {currentUser ? (
              <Dropdown
                label={
                  <Avatar
                    alt=""
                    img="../../public/images/user.png"
                    rounded
                    size="sm"
                    className="mr-2"
                  />
                }
                arrowIcon={false}
                inline
              >
                {currentUser.role === "Doctor" && (
                  <Link to="/dashboard/doctor">
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                  </Link>
                )}
                {currentUser.role === "HospitalAdministration" && (
                  <Link to="/dashboard/administration">
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                  </Link>
                )}
                {currentUser.role === "Patient" && (
                  <Link to="/dashboard/patient">
                    <Dropdown.Item>Dashboard</Dropdown.Item>
                  </Link>
                )}
                <Link onClick={handleLogout}>
                  <Dropdown.Item>Logout</Dropdown.Item>
                </Link>
              </Dropdown>
            ) : (
              <NavbarLink href="/login" active={path == "/login"} className="mt-1">
                Login
              </NavbarLink>
            )}
          </NavbarCollapse>
        </Navbar>
      </div>
    </>
  );
}
