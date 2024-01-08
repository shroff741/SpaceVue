import React from "react";
import { useAuth } from "../contexts/auth";
import { Navigate } from "react-router-dom";

function RequireAuth({ children }) {
  const auth = useAuth();
  if (!auth.authState) {
    //console.log(auth.authState);
    return <Navigate to="/" />;
  }
  return <div>{children}</div>;
}

export default RequireAuth;
