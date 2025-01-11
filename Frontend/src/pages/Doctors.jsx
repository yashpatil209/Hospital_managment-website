import React, { useState, useEffect } from "react";
import { Button } from "flowbite-react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Label, TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";

export default function Doctors() {
  const [data, setData] = useState([]);
  const { token } = useSelector((state) => state.user);
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setName(e.target.value);
    axios
      .get(`http://localhost:8080/doctors/search?name=${name}`, {})
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://localhost:8080/doctors", {
          headers: {
            // Authorization: `Bearer ${token}`,
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
    <div className="">
      <div className="flex justify-end">
        <div className="max-w-md mt-7 mr-24">
          <TextInput
            id="email4"
            type="email"
            onChange={handleChange}
            className="text-black"
            icon={HiSearch}
            placeholder="search doctor name"
            required
          />
        </div>
      </div>
      {data && (
        <div className="sm:m-10 m-2 flex flex-wrap justify-center sm:gap-8 gap-4">
          {data.map((doctor) => (
            <div className="bg-white shadow-md border-2 w-fit p-7 rounded-md">
              <div className="flex gap-6 pb-3">
                <div>
                  <img
                    className="sm:h-28 h-20 rounded-md"
                    src={"../../public/images/dr.webp"}
                    alt=""
                  />
                </div>
                <div>
                  <div className="font-semibold sm:text-xl text-sm">
                    Dr. {doctor.fname} {doctor.lname}
                  </div>
                  <div className="text-gray-700 sm:text-sm text-xs">
                    {doctor.specialization} {doctor.qualification}
                  </div>
                  <div className="mt-1 text-gray-700 sm:text-sm text-xs">
                    Experience : <span>{doctor.experience}</span>years
                  </div>
                  <div className="mt-3 text-blue-800 sm:text-sm text-xs">
                    <i class="bx bxs-location-plus"></i>{" "}
                    <span>Pune , Maharastra</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between border-t-2 pt-3 gap-2">
                <div className="text-center">
                  <p className="sm:text-sm text-xs font-medium">MON- SAT</p>
                  <p className="sm:text-sm text-xs text-orange-500">
                    (01:00 AM-05:00 PM)
                  </p>
                </div>
                <div>
                  <a href={`/appointment/?Id=${doctor.id}`}>
                    <Button size="sm">Book Appointment</Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
