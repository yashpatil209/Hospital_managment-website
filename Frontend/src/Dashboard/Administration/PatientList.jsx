import React, { useState, useEffect, useRef } from "react";
import { Table } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import { useSelector } from "react-redux";
import axios from "axios";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { toast } from "react-toastify";

export default function PatientList() {
  const [data, setData] = useState([]);
  const { token } = useSelector((state) => state.user);
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState({});
  const [Id, setId] = useState();
 console.log(data);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    console.log(formData);
  };

  const [name, setName] = useState("");

  const handleSearch = (e) => {
    setName(e.target.value);
    axios
      .get(`http://localhost:8080/patients/search?name=${name}`, {
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  const handleSubmit = () => {
    axios
      .put(`http://localhost:8080/addbill/${Id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Expense added successfully!");
      })
      .catch((error) => {
        toast.error("Error adding expense");
      });
  };

  const handleDischarge = (id) => {
    console.log(id);
    axios
      .delete(`http://localhost:8080/discharge/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast.success("Expense added successfully!");
      })
      .catch((error) => {
        toast.error("Error adding expense");
        console.log(error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://localhost:8080/patients", {
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
              <Table.HeadCell>Patient name</Table.HeadCell>
              <Table.HeadCell>Department</Table.HeadCell>
              <Table.HeadCell>Gender</Table.HeadCell>
              <Table.HeadCell>Phone</Table.HeadCell>
              <Table.HeadCell>
                <span className="">Info</span>
              </Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Expense</span>
              </Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Discharge</span>
              </Table.HeadCell>
            </Table.Head>

            {data.map((patient) => (
              <Table.Body className="divide-y">
                <Table.Row className="bg-white text-gray-600 dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-600 dark:text-white">
                    {patient.createdAt.toString().split("T")[0]}
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
                      onClick={() => {
                        setOpenModal(true);
                        setId(patient.patientCred.patientId);
                      }}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Add Expense
                    </a>
                    <Modal
                      show={openModal}
                      size="md"
                      popup
                      onClose={() => setOpenModal(false)}
                    >
                      <Modal.Header />
                      <Modal.Body>
                        <div className="space-y-6">
                          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Add Today Expenses
                          </h3>
                          <div>
                            <div className="mb-2 block">
                              <Label value="Medical Service Charge" />
                            </div>
                            <TextInput
                              id="medicalService"
                              type="number"
                              onChange={handleChange}
                            />
                          </div>
                          <div>
                            <div className="mb-2 block">
                              <Label value="Medication Charge" />
                            </div>
                            <TextInput
                              id="medication"
                              type="number"
                              onChange={handleChange}
                            />
                          </div>
                          <div>
                            <div className="mb-2 block">
                              <Label value="Lab Test Charge" />
                            </div>
                            <TextInput
                              id="labTest"
                              type="number"
                              onChange={handleChange}
                            />
                          </div>
                          <div>
                            <div className="mb-2 block">
                              <Label value="Surgical Services Charge" />
                            </div>
                            <TextInput
                              id="surgicalService"
                              type="number"
                              onChange={handleChange}
                            />
                          </div>
                          <div>
                            <div className="mb-2 block">
                              <Label value="Food & Diet Charge" />
                            </div>
                            <TextInput
                              id="foodDiet"
                              type="number"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="w-full">
                            <Button
                              onClick={() => {
                                handleSubmit();
                                setOpenModal(false);
                              }}
                            >
                              Submit
                            </Button>
                          </div>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </Table.Cell>
                  <Table.Cell>
                    <a
                      onClick={()=>handleDischarge(patient.id)}
                      className="cursor-pointer font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Discharge
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
