import React, { useState, useEffect } from "react";
import { Table } from "flowbite-react";
import axios from "axios";
import { useSelector } from "react-redux";

export default function BillList() {
  const [data, setData] = useState([]);
  const { token } = useSelector((state) => state.user);
  const totalSum = data.reduce((acc, data) => acc + data.total, 0);
  console.log(totalSum);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get("http://localhost:8080/administration/getbillingdetails", {
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
    <div>
      {data ? (
        <div className="overflow-x-auto mt-6">
          <Table hoverable className="shadow-lg">
            <Table.Head>
              <Table.HeadCell>Patient username</Table.HeadCell>
              <Table.HeadCell>Room Rent</Table.HeadCell>
              <Table.HeadCell>Medication</Table.HeadCell>
              <Table.HeadCell>MedicalService</Table.HeadCell>
              <Table.HeadCell>Surgical Service</Table.HeadCell>
              <Table.HeadCell>labTest</Table.HeadCell>
              <Table.HeadCell>foodDiet</Table.HeadCell>
              <Table.HeadCell>Total</Table.HeadCell>
            </Table.Head>
            {data.map((bill) => (
              <Table.Body className="divide-y">
                <Table.Row className="bg-white text-gray-600 dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell>{bill.patientCred.username}</Table.Cell>
                  <Table.Cell>{bill.roomRent}</Table.Cell>
                  <Table.Cell>{bill.medication}</Table.Cell>
                  <Table.Cell>{bill.medicalService}</Table.Cell>
                  <Table.Cell>{bill.medicalService}</Table.Cell>
                  <Table.Cell>{bill.labTest}</Table.Cell>
                  <Table.Cell>{bill.foodDiet}</Table.Cell>
                  <Table.Cell>{bill.total}</Table.Cell>
                </Table.Row>
              </Table.Body>
            ))}
          </Table>
        </div>
      ) : (
        <div className="mt-5">No Data Found</div>
      )}
      <div className="flex justify-end items-center m-5">
        <p>Total -</p>
        <i class="bx bx-rupee"></i>
        <p className="font-semibold">{totalSum}</p>
      </div>
    </div>
  );
}
