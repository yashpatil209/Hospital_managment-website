import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Button, Spinner } from "flowbite-react";

export default function PatientReg() {
  const [formData, setFormData] = useState({});
  const [adharImage, setAdharImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    console.log(formData);
  };

  const handleImageChange = (e) => {
    setAdharImage(e.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const PatientInfo = new FormData();
    PatientInfo.append("adharImage", adharImage);
    PatientInfo.append(
      "patientInfo",
      new Blob([JSON.stringify(formData)], { type: "application/json" })
    );
    axios
      .post("http://localhost:8080/register/patient", PatientInfo, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        toast.success("Successfully Register!");
        setLoading(false);
      })
      .catch((error) => {
        toast.error("Error occured");
        setLoading(false);
      });
  };

  return (
    <>
      <div className="flex items-center justify-center mt-3">
        <div className="mx-auto max-w-[60rem] p-5 rounded-lg bg-white shadow-md">
          <div className="form_head ">Patient Admission Form</div>
          <form onSubmit={handleSubmit} className="p-12">
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Patient's First Name
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
                    for="sex"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Patient's Last Name
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
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="dob"
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="sex"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Sex
                  </label>
                  <select
                    name="sex"
                    id="sex"
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option>Select sex</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label
                for="gname"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Guardian Name
              </label>
              <input
                type="text"
                name="gname"
                id="gname"
                placeholder="Guardian Name"
                onChange={handleChange}
                required
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
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

            <div className="mb-5 pt-3">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Address Details
              </label>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="area"
                      id="area"
                      onChange={handleChange}
                      required
                      placeholder="Enter area"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="city"
                      id="city"
                      onChange={handleChange}
                      required
                      placeholder="Enter city"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="state"
                      id="state"
                      onChange={handleChange}
                      required
                      placeholder="Enter state"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <input
                      type="text"
                      name="post-code"
                      id="post-code"
                      onChange={handleChange}
                      required
                      placeholder="Post Code"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label
                for="adharno"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Adhar No
              </label>
              <input
                type="text"
                name="adharno"
                id="adharno"
                onChange={handleChange}
                required
                placeholder="Adhar No"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="adharimage"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Upload Adhar Id
              </label>
              <input
                type="file"
                name="adharimage"
                id="adharimage"
                onChange={handleImageChange}
                required
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                for="mhistory"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Medical History{" "}
                <span className="text-sm">(Describe if any)</span>
              </label>
              <textarea
                type="text"
                name="medhistory"
                id="medhistory"
                placeholder="Describe here"
                onChange={handleChange}
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5 border-t-2 pt-4">
              <label
                for="department"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Choose Department
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
            <div className="-mx-3 flex flex-wrap pb-4">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="date"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Room Type
                  </label>
                  <select
                    name="roomType"
                    id="roomType"
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  >
                    <option>Select Room Type</option>
                    <option value="General Ward">General Ward </option>
                    <option value="Semi-Private Room">Semi-Private Room</option>
                    <option value="Private Room">Private Room</option>
                    <option value="ICU">ICU</option>
                    <option value="Maternity Ward">Maternity Ward</option>
                  </select>
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="sex"
                    className="mb-3 block text-base font-medium text-[#07074D]"
                  >
                    Room Number
                  </label>
                  <input
                    type="number"
                    name="roomNo"
                    id="roomNo"
                    onChange={handleChange}
                    placeholder="Last Name"
                    required
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
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
                  "Register"
                )}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
