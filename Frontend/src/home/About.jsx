import React from "react";

export default function About() {
  return (
    <div className="sm:p-32">
      <div className="flex">
        <div className="sm:block hidden flex-1 rounded-lg overflow-hidden">
          <img className=" " src="../../public/images/operation.jpg" alt="" />
        </div>
        <div className="flex-1 p-10">
          <div className="text-4xl font-bold mb-5">About Us</div>
          <div className="text-lg">
            Welcome to Newlife Hospital, a trusted center for advanced medical
            care and compassionate healing. Located in the heart of Pune, we
            have been dedicated to serving our community with exceptional
            healthcare services for over 32 years.
          </div>
          <div className="text-lg mt-5">
            Our hospital is equipped with state-of-the-art technology and
            facilities, ensuring the highest standard of diagnosis, treatment,
            and care. We specialize in e.g., cardiology, orthopedics, oncology,
            pediatrics offering a comprehensive range of medical services
            tailored to meet the unique needs of each patient.
          </div>
        </div>
      </div>
    </div>
  );
}
