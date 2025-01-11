import React, { useState, useEffect } from "react";
import { Table, TextInput } from "flowbite-react";
import { HiMail, HiSearch } from "react-icons/hi";
import { useSelector } from "react-redux";
import axios from "axios";

export default function DoctorList() {
  const [data, setData] = useState([]);
  const { token } = useSelector((state) => state.user);
  const [name, setName] = useState("");

  const handleSearch = (e) => {
    setName(e.target.value);
    axios
      .get(`http://localhost:8080/doctors/search?name=${name}`, {
      })
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
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setData(response.data);
          console.log(data);
        })
        .catch((error) => {
          console.error("Error adding product:", error);
        });
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="w-1/3">
        <TextInput
          id="search"
          type="text"
          icon={HiSearch}
          placeholder="search"
          required
          onChange={handleSearch}
        />
      </div>

      {data ? (
        <div className="overflow-x-auto mt-6">
          <Table hoverable className="shadow-lg">
            <Table.Head>
              <Table.HeadCell>Doctor name</Table.HeadCell>
              <Table.HeadCell>Department</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>Phone</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">More Info</span>
              </Table.HeadCell>
            </Table.Head>
            {data.map((doctor) => (
              <Table.Body className="divide-y">
                <Table.Row className="bg-white text-gray-600 dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>
                    {doctor.fname} {doctor.lname}
                  </Table.Cell>
                  <Table.Cell>{doctor.doctorCred.department}</Table.Cell>
                  <Table.Cell>{doctor.doctorCred.email}</Table.Cell>
                  <Table.Cell>{doctor.doctorCred.phone}</Table.Cell>
                  <Table.Cell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      More Info
                    </a>
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        </div>
      ) : (
        <div className="mt-5">No Data Found</div>
      )}
    </div>
  );
}
