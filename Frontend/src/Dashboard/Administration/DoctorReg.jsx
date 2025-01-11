import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button , Spinner } from "flowbite-react";

export default function DoctorReg() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    console.log(formData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:8080/register/doctor", formData)
      .then((response) => {
        toast.success("Doctor registered successfully!");
        setLoading(false);
      })
      .catch((error) => {
        toast.error("error occured!")
        setLoading(false);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="mx-auto mt-5  p-5 rounded-lg bg-white shadow-md">
          <div className="form_head ">Doctor Registration</div>
          <form onSubmit={handleSubmit}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Doctor's First Name
                  </label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    onChange={handleChange}
                    placeholder="First Name"
                    required
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="lname"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Doctor's Last Name
                  </label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label
                for="Department"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Department
              </label>
              <select
                name="department"
                id="department"
                onChange={handleChange}
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              >
                <option>Select Department</option>
                <option value="Cardiology">Cardiology </option>
                <option value="Neurology">Neurology</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Orthopedics">Orthopedics</option>
                <option value="Urology">Urology</option>
                <option value="Gynecology">Gynecology</option>
                <option value="Orthopedics">Orthopedics</option>
              </select>
            </div>
            <div className="mb-5">
              <label
                for="phone"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Phone Number
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                onChange={handleChange}
                required
                placeholder="Enter your phone number"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div>
              <Button
                type="submit"
                disabled={loading}
                color="#6A64F1"
                className="hover:shadow-form bg-[#6A64F1]  w-full rounded-md py-1 px-8 text-center text-base font-semibold text-white outline-none"
              >
                {loading ? (
                  <>
                    <Spinner size="sm" />
                    <span className="pl-3">Loading...</span>
                  </>
                ) : (
                  "Register Doctor"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
