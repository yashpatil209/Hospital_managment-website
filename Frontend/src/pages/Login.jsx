import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Label,
  TextInput,
  Carousel,
  Select,
} from "flowbite-react";
import "../../public/css/page.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slice";

export default function Login() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  var url = "";
  if (formData.loginas == "Patient") {
    url = "http://localhost:8080/login/patient";
  } else if (formData.loginas == "Doctor") {
    url = "http://localhost:8080/login/doctor";
  } else if (formData.loginas == "HospitalAdministration") {
    url = "http://localhost:8080/login/hospitaladministration";
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const currentUser = {
      name : formData.username,
      role : formData.loginas
    }

    axios
      .post(url, formData)
      .then((response) => {
        const token = response.data;
        dispatch(login({ currentUser, token }));
        toast.success("Login Successful!");
        navigate("/");
      })
      .catch((error) => {
        toast.error("Invalid credentials");
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-center sm:p-12 ">
      <div className="login_container mx-auto w-full max-w-[550px] bg-white sm:p-12 p-5 rounded-lg">
        <div className="font-semibold text-3xl text-center mb-5">Login</div>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label
              for="loginas"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Login as
            </label>
            <select
              name="loginas"
              id="loginas"
              onChange={handleChange}
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            >
              <option>Login as</option>
              <option value="Patient">Patient</option>
              <option value="Doctor">Doctor</option>
              <option value="HospitalAdministration">
                Hospital Administration
              </option>
            </select>
          </div>
          <div className="mb-5">
            <label
              for="username"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="username"
              onChange={handleChange}
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              for="password"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={handleChange}
              required
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div>
            <button
              type="submit"
              className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
            >
              Login
            </button>
          </div>
          <div className="mt-4 text-gray-600">
            <span className="text-sm">
              Note - If you don't know the username & password please
              Contact to Hospital Administration
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
