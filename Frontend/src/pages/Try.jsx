import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";

export default function Try() {
  const { token } = useSelector((state) => state.user);
  const handlesubmit = async (event) => {
    event.preventDefault();
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`, // Add the token to the Authorization header
      },
    };

    // Make the request
    axios
      .get("http://localhost:8080/email", config)
      .then((response) => {
        console.log("Response:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <button onClick={handlesubmit}>click</button>
    </>
  );
}
