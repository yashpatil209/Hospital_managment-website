import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { HiSearch } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Appointments() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.user);
  const { currentUser } = useSelector((state) => state.user);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8080/appointment/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        fetchData();
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  };

  const fetchData = async () => {
    axios
      .get(`http://localhost:8080/appointments/${currentUser.name}`, {
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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div className="overflow-x-auto mt-6">
          <Table hoverable className="shadow-lg">
            <Table.Head>
              <Table.HeadCell>Date</Table.HeadCell>
              <Table.HeadCell>Name</Table.HeadCell>
              <Table.HeadCell>Gender</Table.HeadCell>
              <Table.HeadCell>age</Table.HeadCell>
              <Table.HeadCell>Phone</Table.HeadCell>
              <Table.HeadCell>Email</Table.HeadCell>
              <Table.HeadCell>
                <span className="sr-only">Done</span>
              </Table.HeadCell>
            </Table.Head>

            {data.map((appointment) => (
              <Table.Body className="divide-y">
                <Table.Row className="bg-white text-gray-600 dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-600 dark:text-white">
                    {appointment.date.toString().split("T")[0]}
                  </Table.Cell>
                  <Table.Cell>{appointment.name}</Table.Cell>
                  <Table.Cell>{appointment.gender}</Table.Cell>
                  <Table.Cell>{appointment.age}</Table.Cell>
                  <Table.Cell>{appointment.phone}</Table.Cell>
                  <Table.Cell>{appointment.email}</Table.Cell>
                  <Table.Cell>
                    {/* <button onClick={() => handleDelete(appointment.id)}
                      className="cursor-pointer font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                      Done
                    </button> */}
                    <a
                      onClick={() => handleDelete(appointment.id)}
                      className="cursor-pointer font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                    >
                      Done
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
