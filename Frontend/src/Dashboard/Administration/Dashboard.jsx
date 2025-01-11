import React from "react";
import BarChart from "./component/BarChart";
import DonutChart from "./component/DonutChart";
import { Datepicker } from "flowbite-react";
import ChartComponent from "./component/BarChart";

export default function Dashboard() {
  return (
    <div className="overflow-hidden">
      <div className="flex flex-wrap gap-3 text-white">
        <div className="card flex-1 flex gap-10 p-4 items-center justify-center shadow-lg rounded-lg bg-gradient-to-br from-indigo-700 to-indigo-500">
          <div>
            <img
              className="h-20"
              src="../../../public/images/patient.png"
              alt=""
            />
          </div>
          <div className="text-center">
            <div className="font-semibold text-4xl">501</div>
            <div className=" mt-1">Patients</div>
          </div>
        </div>
        <div className="card flex-1 flex gap-10 p-4 items-center justify-center shadow-lg rounded-lg bg-gradient-to-br from-fuchsia-700 to-fuchsia-500">
          <div>
            <img
              className="h-20"
              src="../../../public/images/doctorlogo.png"
              alt=""
            />
          </div>
          <div className="text-center">
            <div className="font-semibold text-4xl">601</div>
            <div className="mt-1">Doctors</div>
          </div>
        </div>
        <div className="card flex-1 flex gap-10 p-4 items-center justify-center shadow-lg rounded-lg bg-gradient-to-br from-cyan-700 to-cyan-500">
          <div>
            <img
              className="h-20"
              src="../../../public/images/nurse.png"
              alt=""
            />
          </div>
          <div className="text-center">
            <div className="font-semibold text-4xl">701</div>
            <div className=" mt-1">Nurses</div>
          </div>
        </div>
        <div className="card flex-1 flex gap-10 p-4 items-center justify-center shadow-lg rounded-lg bg-gradient-to-br from-pink-700 to-pink-500">
          <div>
            <img
              className="h-20"
              src="../../../public/images/revenue.png"
              alt=""
            />
          </div>
          <div className="text-center">
            <div className="font-semibold text-4xl">5001</div>
            <div className=" mt-1">Revenue</div>
          </div>
        </div>
      </div>
      {/* section-2 */}
      <div className="flex  mt-7">
        <div className=" w-[45rem] bg-white p-auto shadow-lg px-10 py-10">
          <ChartComponent />
        </div>
        <div className="ml-16 ">
          <Datepicker inline />
        </div>
      </div>
    </div>
  );
}
