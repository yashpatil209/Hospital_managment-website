import React from "react";
import { Datepicker } from "flowbite-react";
import LineChart from "./component/Linechart";

export default function Dashboard() {
  return (
    <div>
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
              src="../../../public/images/time.png"
              alt=""
            />
          </div>
          <div className="text-center">
            <div className="font-semibold text-4xl">601</div>
            <div className="mt-1">Appointment</div>
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
              src="../../../public/images/messsage.png"
              alt=""
            />
          </div>
          <div className="text-center">
            <div className="font-semibold text-4xl">5001</div>
            <div className=" mt-1">Messages</div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-7">
        <div className="bg-white px-5 shadow-md">
              <LineChart/>
        </div>
        <div className="">
          <Datepicker inline />
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}
