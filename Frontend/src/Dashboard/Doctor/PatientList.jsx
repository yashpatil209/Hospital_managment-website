import React, { useState, useEffect, useRef } from "react";
import { Table } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import { useSelector } from "react-redux";
import axios from "axios";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { toast } from "react-toastify";

export default function PatientList() {
  const [data, setData] = useState([]);
  const [monitoring, setMonitoring] = useState([]);
  const { token } = useSelector((state) => state.user);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [formData, setFormData] = useState({});
  const [Id, setId] = useState();
  console.log(Id);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    console.log(formData);
  };

  const handleSubmitMonitorings = () => {
    axios
      .post(`http://localhost:8080/patientmonitoring/${Id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  const handleGetMonitorings = () => {
    axios
      .get(`http://localhost:8080/patientmonitoring/${Id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setMonitoring(response.data);
        console.log(monitoring);
      })
      .catch((error) => {
        console.error("Error adding product:", error);
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
                <span className="sr-only">Today's Monitoring</span>
              </Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">view Monitoring</span>
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
                      onClick={() => {
                        setOpenModal2(true);
                        setId(patient.patientCred.patientId);
                      }}
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Add Monitoring
                    </a>
                    <Modal
                      show={openModal2}
                      size="md"
                      popup
                      onClose={() => setOpenModal2(false)}
                    >
                      <Modal.Header />
                      <Modal.Body>
                        <div className="space-y-6">
                          <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Today's Monitoring
                          </h3>
                          <div>
                            <div className="mb-2 block">
                              <Label value="Blood Pressure" />
                            </div>
                            <TextInput
                              id="bp"
                              type="number"
                              onChange={handleChange}
                            />
                          </div>
                          <div>
                            <div className="mb-2 block">
                              <Label value="Heart Rate" />
                            </div>
                            <TextInput
                              id="heartRate"
                              type="number"
                              onChange={handleChange}
                            />
                          </div>
                          <div>
                            <div className="mb-2 block">
                              <Label value="Temperature" />
                            </div>
                            <TextInput
                              id="temp"
                              type="number"
                              onChange={handleChange}
                            />
                          </div>
                          <div>
                            <div className="mb-2 block">
                              <Label value="Any Note" />
                            </div>
                            <TextInput
                              id="note"
                              type="text"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="w-full">
                            <Button
                              onClick={() => {
                                handleSubmitMonitorings();
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
                      onClick={() => {
                        setOpenModal(true);
                        setId(patient.patientCred.patientId);
                        handleGetMonitorings();
                      }}
                      className="cursor-pointer font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      view Monitoring
                    </a>
                    <Modal
                      show={openModal}
                      
                      dismissible
                      onClose={() => setOpenModal(false)}
                    >
                      <Modal.Header />
                      <Modal.Body>

                        <Table hoverable>
                          <Table.Head>
                            <Table.HeadCell>Date</Table.HeadCell>
                            <Table.HeadCell>Blood Pressure</Table.HeadCell>
                            <Table.HeadCell>Heart Rate</Table.HeadCell>
                            <Table.HeadCell>Temperature</Table.HeadCell>
                            <Table.HeadCell>Note</Table.HeadCell>
                          </Table.Head>
                          {monitoring.map((m) => (
                          <Table.Body className="divide-y">
                            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                              <Table.Cell>{m.createdAt.toString().split("T")[0]}</Table.Cell>
                              <Table.Cell>{m.bp}</Table.Cell>
                              <Table.Cell>{m.heartRate}</Table.Cell>
                              <Table.Cell>{m.temp}</Table.Cell>
                              <Table.Cell>{m.note}</Table.Cell>
                            </Table.Row>
                          </Table.Body>
                          ))}
                        </Table>
                      </Modal.Body>
                    </Modal>
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
