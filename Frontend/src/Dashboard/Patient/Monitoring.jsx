import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Table } from "flowbite-react";
import axios from "axios";

export default function Monitoring() {
  const [data, setData] = useState([]);
  const { token, currentUser } = useSelector((state) => state.user);
  console.log(data);
  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`http://localhost:8080/patient/monitoring/${currentUser.name}`, {
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
    fetchData();
  }, []);
  return (
    <>
    <div className="font-semibold mb-5">
        All Monitorings
    </div>
      {data && (
        
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>Date</Table.HeadCell>
            <Table.HeadCell>Blood Pressure</Table.HeadCell>
            <Table.HeadCell>Heart Rate</Table.HeadCell>
            <Table.HeadCell>Temperature</Table.HeadCell>
            <Table.HeadCell>Note</Table.HeadCell>
          </Table.Head>
          {data.map((m) => (
            <Table.Body className="divide-y text-gray-700">
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
      )}
    </>
  );
}
