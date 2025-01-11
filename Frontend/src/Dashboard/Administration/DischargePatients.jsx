import React, { useState, useEffect, useRef } from "react";
import { Table } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import { useSelector } from "react-redux";
import axios from "axios";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { toast } from "react-toastify";

export default function DischargePatients() {
  const [data, setData] = useState([]);
  const { token } = useSelector((state) => state.user);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [Id, setId] = useState();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    console.log(formData);
  };

  const [name, setName] = useState("");

  const handleSearch = (e) => {
    setName(e.target.value);
    axios
      .get(`http://localhost:8080/oldpatients/search?name=${name}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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
        .get("http://localhost:8080/dischargepatients", {
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
          onChange={handleSearch}
          required
        />
      </div>
      {data ? (
        <div className="overflow-x-auto mt-6">
          <Table hoverable className="shadow-lg">
            <Table.Head>
              <Table.HeadCell>Admission Date</Table.HeadCell>
              <Table.HeadCell>Discharge Date</Table.HeadCell>
              <Table.HeadCell>Patient name</Table.HeadCell>
              <Table.HeadCell>Department</Table.HeadCell>
              <Table.HeadCell>Gender</Table.HeadCell>
              <Table.HeadCell>Phone</Table.HeadCell>
              <Table.HeadCell>
                <span className="">Info</span>
              </Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Discharge</span>
              </Table.HeadCell>
            </Table.Head>
            {data.map((patient) => (
              <Table.Body className="divide-y">
                <Table.Row className="bg-white text-gray-600 dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-600 dark:text-white">
                    {patient.admissionDate?.toString().split("T")[0]}
                  </Table.Cell>
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-600 dark:text-white">
                    {patient.createdAt?.toString().split("T")[0]}
                  </Table.Cell>
                  <Table.Cell>
                    {patient.fname} {patient.lname}
                  </Table.Cell>
                  <Table.Cell>Department</Table.Cell>
                  <Table.Cell>{patient.sex}</Table.Cell>
                  <Table.Cell>{patient.phone}</Table.Cell>
                  <Table.Cell>
                    <a
                      href={`/dashboard/administration/patientinfo/${patient.id}`}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Info
                    </a>
                  </Table.Cell>
                  <Table.Cell>
                    <a
                      href="#"
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      View Bill
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
