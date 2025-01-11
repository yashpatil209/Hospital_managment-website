import React, { useState, useEffect } from "react";
// import "../../../public/css/bill.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Table } from "flowbite-react";

export default function Bill() {
  const [data, setData] = useState({});
  const { token } = useSelector((state) => state.user);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`http://localhost:8080/getbill/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
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
    <div className="bg-white w-1/2 m-auto">
      <div className="bg-blue-500 p-5 text-xl font-semibold text-white">
        Newlife Hospital
      </div>
      <div className="p-5 text-sm">
        <p>Yashkumar Patil</p>
        <p>7291820198</p>
        <p>Add</p>
        <p className="mt-4">Date : </p>
      </div>
      <div className="w-full">
        <Table className="w-full text-gray-600">
          <Table.Head>
            <Table.HeadCell>Product name</Table.HeadCell>
            <Table.HeadCell>Color</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>White</Table.Cell>
              <Table.Cell>Laptop PC</Table.Cell>
            </Table.Row>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell>Black</Table.Cell>
              <Table.Cell>Accessories</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
}
