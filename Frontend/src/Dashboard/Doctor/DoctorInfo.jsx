import React, { useState , useEffect} from "react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function DoctorInfo() {
  const { currentUser } = useSelector((state) => state.user);
  const { token } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({});
  const [adharImage, setAdharImage] = useState(null);
  const [Image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    console.log(formData);
  };

  const handleAdharImageChange = (e) => {
    setAdharImage(e.target.files[0]);
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const DoctorInfo = new FormData();
    DoctorInfo.append("adharImage", adharImage);
    DoctorInfo.append("photo", Image);
    DoctorInfo.append(
      "doctorInfo",
      new Blob([JSON.stringify(formData)], { type: "application/json" })
    );

    console.log(currentUser.name);

    axios
      .post(
        `http://localhost:8080/filldoctorinfo/${currentUser.name}`,
        DoctorInfo,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        console.log("Product added successfully:", response.data);
        alert("Product added successfully");
      })
      .catch((error) => {
        console.error("Error adding product:", error);
        alert("Error adding product");
      });
  };

  return (
    <>
      <div className="flex items-center justify-center mt-3">
        <div className="mx-auto max-w-[60rem] p-5 rounded-lg bg-white shadow-md">
          <div className="form_head ">Your Information</div>
          <form onSubmit={handleSubmit} className="p-12">
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    for="name"
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
                    for="doctor"
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
                Adhar No
              </label>
              <input
                type="number"
                name="adharno"
                id="adharno"
                placeholder="Adhar no"
                onChange={handleChange}
                required
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
                      type="number"
                      name="post-code"
                      id="postCode"
                      onChange={handleChange}
                      required
                      placeholder="Post Code"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-5 pt-3">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Professional Details
              </label>
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="gname"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Medical Registration no
                    </label>
                    <input
                      type="number"
                      name="regno"
                      id="regno"
                      onChange={handleChange}
                      required
                      placeholder="Enter Registration no"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="gname"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Qualification
                    </label>
                    <input
                      type="text"
                      name="qualification"
                      id="qualification"
                      onChange={handleChange}
                      required
                      placeholder="Enter Your Qualification"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="gname"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Specialization
                    </label>
                    <input
                      type="text"
                      name="specialization"
                      id="specialization"
                      onChange={handleChange}
                      required
                      placeholder="Enter specialization"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
                <div className="w-full px-3 sm:w-1/2">
                  <div className="mb-5">
                    <label
                      for="gname"
                      className="mb-3 block text-base font-medium text-[#07074D]"
                    >
                      Experience
                    </label>
                    <input
                      type="number"
                      name="experience"
                      id="experience"
                      onChange={handleChange}
                      required
                      placeholder="Enter Experience (years)"
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-5">
              <label
                for="adharimage"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Upload Profile Photo
              </label>
              <input
                type="file"
                name="photo"
                id="photo"
                onChange={handleImageChange}
                required
                placeholder="Full Name"
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
                onChange={handleAdharImageChange}
                required
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>

            <div>
              <button
                type="submit"
                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
