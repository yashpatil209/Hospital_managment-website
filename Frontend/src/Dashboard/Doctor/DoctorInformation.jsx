import React from "react";
import { Table } from "flowbite-react";

export default function DoctorInformation({ info }) {
  console.log(info);
  return (
    <>
      {info && (
        <div className="bg-white p-10 w-1/2 m-auto">
          <div className="text-xl font-semibold ml-5 bg-blue-500 p-1 text-white">
            Doctor Information
          </div>

          <div className="overflow-x-auto">
            <Table>
              <Table.Body className=" text-gray-600">
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Doctor Name :
                  </Table.Cell>
                  <Table.Cell>{info.fname + "  " + info.lname}</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Date of Birth :
                  </Table.Cell>
                  <Table.Cell>{info.dob?.toString().split("T")[0]}</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Gender :
                  </Table.Cell>
                  <Table.Cell>{info.sex}</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    city :
                  </Table.Cell>
                  <Table.Cell>{info.city}</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    State :
                  </Table.Cell>
                  <Table.Cell>{info.state}</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Post Code :
                  </Table.Cell>
                  <Table.Cell>{info.postCode}</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Registration Number
                  </Table.Cell>
                  <Table.Cell>{info.regno}</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Qualification
                  </Table.Cell>
                  <Table.Cell>{info.qualification}</Table.Cell>
                </Table.Row>
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    Specialization
                  </Table.Cell>
                  <Table.Cell>{info.specialization}</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
      )}
    </>
  );
}
