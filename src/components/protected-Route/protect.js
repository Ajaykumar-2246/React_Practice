import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function Protected() {
  const userLoggedIn = localStorage.getItem("loggedIn");

  return userLoggedIn ? <Outlet/> : <Navigate to="/login"/>;
}

export default Protected;
