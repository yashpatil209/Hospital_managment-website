import React from "react";
import { useLocation } from "react-router-dom";
import { Breadcrumb, Avatar } from "flowbite-react";
import { HiHome } from "react-icons/hi";

export default function DoctorDashNav() {

  const routes = useLocation()
    .pathname.split("/")
    .filter((route) => route);
  const segment = routes.map(
    (route) => route.charAt(0).toUpperCase() + route.slice(1)
  );

  return (
    <div className="w-full flex items-center justify-between bg-white p-1 z-50">
      <div>
        <Breadcrumb
          aria-label="Solid background breadcrumb example"
          className=" px-5 py-3 "
        >
          <Breadcrumb.Item href="#" icon={HiHome}>
            {segment[1]}
          </Breadcrumb.Item>
          <Breadcrumb.Item href="#">{segment[0]}</Breadcrumb.Item>
          {segment[2] && <Breadcrumb.Item>{segment[2]}</Breadcrumb.Item>}
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <i className="bx bx-bell"></i>
        </div>
        <Avatar size="sm" img="../../../public/images/dr.webp" rounded>
          <div className="space-y-1 font-medium dark:text-white mr-5">
            <div>Jese Leos</div>
          </div>
        </Avatar>
      </div>
    </div>
  );
}
