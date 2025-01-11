import React, { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { logout } from "../redux/slice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const TokenExpire = () => {
  const { token } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  setInterval(() => {
    if (token) {
      const decodedToken = jwtDecode(token);
      const currentTime = new Date();
      const expDate = new Date(decodedToken.exp * 1000);
      if (expDate < currentTime) {
        dispatch(logout());
        navigate("/");
      }
    }
  }, 1000*60*60);

  return null;
};

export default TokenExpire;