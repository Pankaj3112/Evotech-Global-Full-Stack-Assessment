import React from "react";
import { Navigate } from "react-router-dom";

function RediectLogin({ isSignedIn, children }) {
  if (!isSignedIn) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
}
export default RediectLogin;
