import React from "react";
import { Card } from "flowbite-react";
import "../../public/css/home.css";

export default function Home() {
  return (
    <>
      <div className="home_container">
        <div>
          <img
            className="img-bg"
            src="../../../public/images/home_front.jpg"
            alt=""
          />
        </div>
        <div className="schedule_cont">
          <div className="schedule">
            <div className="flex gap-3">
              <div className="shadow-md rounded-md overflow-hidden">
                <img
                  className="h-12"
                  src="../../../public/images/ambulance.gif"
                  alt=""
                />
              </div>
              <div className="mt-3">
                <h2 className="font-semibold text-2xl">Emergency Cases</h2>
              </div>
            </div>
            <p className="mt-2 text-gray-200">
              {" "}
              Immediate medical attention for critical situations like trauma,
              heart attack, stroke, and accidents, handled by trained emergency
              teams.
            </p>
          </div>
          <div className="schedule">
            <div className="flex gap-3">
              <div className="shadow-md rounded-md overflow-hidden">
                <img
                  className="h-12"
                  src="../../../public/images/social-care.gif"
                  alt=""
                />
              </div>
              <div className="mt-3">
                <h2 className="font-semibold text-2xl">Specialized Care</h2>
              </div>
            </div>
            <p className="mt-2 text-gray-200">
              {" "}
              Specialized departments like cardiology, oncology, orthopedics,
              pediatrics, and dedicated units for neonatal care, dialysis,
              stroke, and palliative care.
            </p>
          </div>
          <div className="schedule">
            <div className="flex gap-3">
              <div className="shadow-md rounded-md overflow-hidden">
                <img
                  className="h-12"
                  src="../../../public/images/appointment.gif"
                  alt=""
                />
              </div>
              <div className="mt-3">
                <h2 className="font-semibold text-2xl">Book Appointment</h2>
              </div>
            </div>
            <p className="mt-2 text-gray-200">
              {" "}
              Book an appointment with our specialists in cardiology, oncology,
              orthopedics, pediatrics, and specialized units like neonatal,
              dialysis, and stroke care.
            </p>
          </div>
        </div>
        <section className="Feautes section">
          <div className="featur_cont">
            <div className="section-title">
              <h2>We Are Always Ready to Help You & Your Family</h2>
              <img
                className="img-bg"
                src="../../../public/images/section-img.png"
                alt=""
              />
              <p>
                Personal care, professional approach. It's all about how we
                treat you.
              </p>
            </div>
            <div className="feature_container">
              <div className="single-features feture_dot">
                <div className="signle-icon">
                  <i className="fa-solid fa-truck-medical"></i>
                </div>
                <h3>Emergency Help</h3>
                <p className="p-3">
                  Immediate support and assistance in critical situations to
                  ensure safety and well-being.
                </p>
              </div>
              <div className="single-features">
                <div className="signle-icon feture_dot">
                  <i className="fa-solid fa-hospital"></i>
                </div>
                <h3>Enriched Pharmecy</h3>
                <p className="p-3">
                  Providing advanced healthcare solutions with quality medicines
                  and personalized care.
                </p>
              </div>
              <div className="single-features last">
                <div className="signle-icon">
                  <i className="fa-solid fa-stethoscope"></i>
                </div>
                <h3>Medical Treatment</h3>
                <p className="p-3">
                  Comprehensive care and tailored therapies for optimal health
                  and recovery.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="count_container flex flex-wrap justify-start gap-5 ">
          <div className="count_content flex-1">
            <div className="count_icon">
              <i className="fa-solid fa-house"></i>
            </div>
            <div className="my-auto">
              <h1 className="text-2xl font-semibold">150</h1>
              <p>Hospital Rooms</p>
            </div>
          </div>
          <div className="count_content flex-1">
            <div className="count_icon">
              <i className="fa-solid fa-user-doctor"></i>
            </div>
            <div className="my-auto">
              <h1 className="text-2xl font-semibold">50</h1>
              <p>Specialist Doctors</p>
            </div>
          </div>
          <div className="count_content flex-1">
            <div className="count_icon">
              <i className="fa-regular fa-face-smile"></i>
            </div>
            <div className="my-auto">
              <h1 className="text-2xl font-semibold">1500</h1>
              <p>Happy Patients</p>
            </div>
          </div>
          <div className="count_content flex-1">
            <div className="count_icon">
              <i className="fa-regular fa-calendar-days"></i>
            </div>
            <div className="my-auto">
              <h1 className="text-2xl font-semibold">32</h1>
              <p>Year of Experience</p>
            </div>
          </div>
        </div>

        <div className="dignostic">
          <h2>Diagnostics</h2>
          <div className="dig_cont flex flex-wrap gap-8 text-center">
            <div className="dig_box flex-1">
              <div className="dig_icons">
                <img src="../../../public/images/physician.png" alt="" />
                <p>Phisicyans</p>
              </div>
            </div>
            <div className="dig_box flex-1">
              <div className="dig_icons">
                <img src="../../../public/images/heart.png" alt="" />
                <p>Cardiology</p>
              </div>
            </div>
            <div className="dig_box flex-1">
              <div className="dig_icons">
                <img src="../../../public/images/neural-circuit.png" alt="" />
                <p>Neurology</p>
              </div>
            </div>
            <div className="dig_box flex-1">
              <div className="dig_icons">
                <img src="../../../public/images/skin.png" alt="" />
                <p>Dermatology</p>
              </div>
            </div>
            <div className="dig_box flex-1">
              <div className="dig_icons">
                <img src="../../../public/images/maternity.png" alt="" />
                <p>Gynacology</p>
              </div>
            </div>
            <div className="dig_box flex-1">
              <div className="dig_icons">
                <img src="../../../public/images/x-ray.png" alt="" />
                <p>Radiology</p>
              </div>
            </div>
          </div>
        </div>

        <div className="blogs_cont">
          <h2 className="text-3xl font-semibold mb-3">Read our daily blog</h2>
          <div className="blog_box">
            <Card
              className="max-w-sm"
              renderImage={() => (
                <img
                  width={500}
                  height={500}
                  src="https://images.unsplash.com/photo-1549560826-4b7bfe23f37b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvc3BpdGFsJTIwcGF0aWVudHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="image 1"
                />
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
            <Card
              className="max-w-sm"
              renderImage={() => (
                <img
                  width={500}
                  height={500}
                  src="https://images.unsplash.com/photo-1549560826-4b7bfe23f37b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvc3BpdGFsJTIwcGF0aWVudHxlbnwwfHwwfHx8MA%3D%3D"
                  alt="image 1"
                />
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
            <Card
              className="max-w-sm"
              renderImage={() => (
                <img
                  width={500}
                  height={500}
                  src="https://media.istockphoto.com/id/530684779/photo/two-doctors-preparing-elderly-patient-before-medical-procedure.webp?b=1&s=170667a&w=0&k=20&c=9Ek2ILhWmoUn9KD_xM9OBudQIgqAcFUs7FlR_NBpmWY="
                />
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </div>
      </div>

      <div className=" bg-white p-8">
        <div className="text-center min-[500px]:w-1/2 m-auto">
          <h2 className="text-2xl font-semibold">Do you need Emergency Medical Care? Call @ 1234 56789</h2>
          <p className="mt-2">
            &nbsp;&nbsp;&nbsp;&nbsp;Are you facing a medical emergency? Don’t
            wait—get the care you need immediately! Our expert team is ready to
            assist you 24/7. Call us now at 1234 56789 for quick and reliable
            emergency medical support.{" "}
          </p>
          <div className="e_buttons">
            <button className="button-9" role="button">
              Contact Now
            </button>
            <button className="button-9" role="button">
              Learn More &nbsp;&nbsp;
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
