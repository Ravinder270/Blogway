import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

const AuthRoute = ({ children }) => {
  const user = useSelector(state => state?.users);
const { userAuth } = user;
if (!userAuth) return <h1>Access Denied</h1>;
return <div>{children}</div>;
};

export default AuthRoute;
