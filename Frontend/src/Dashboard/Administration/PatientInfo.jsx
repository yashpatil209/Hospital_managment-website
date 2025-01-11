import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import { useSelector } from "react-redux";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function PatientInfo() {
  const [data, setData] = useState({});
  const { token } = useSelector((state) => state.user);
  const { id } = useParams();

  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`http://localhost:8080/patient/${id}`, {
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
    <div className="bg-white p-10 w-1/2 m-auto">
      <div className="text-xl font-semibold ml-5 bg-blue-500 p-1 text-white">Patient Info</div>

      <div className="overflow-x-auto">
        <Table>
          <Table.Body className=" text-gray-600">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Patient Name :
              </Table.Cell>
              <Table.Cell>{data.fname + "  " + data.lname}</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Date of Birth :
              </Table.Cell>
              <Table.Cell>{data.dob?.toString().split("T")[0]}</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Gender :
              </Table.Cell>
              <Table.Cell>{data.sex}</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Email Id :
              </Table.Cell>
              <Table.Cell>{data.email}</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Phone No:
              </Table.Cell>
              <Table.Cell>{data.phone}</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                city :
              </Table.Cell>
              <Table.Cell>{data.city}</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                State :
              </Table.Cell>
              <Table.Cell>{data.state}</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Post Code :
              </Table.Cell>
              <Table.Cell>{data.postCode}</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Department :
              </Table.Cell>
              <Table.Cell>{data.department}</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Room Type :
              </Table.Cell>
              <Table.Cell>{data.roomType}</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                Room No :
              </Table.Cell>
              <Table.Cell>{data.roomNo}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
