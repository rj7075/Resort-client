import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AdminLayout() {
  // console.log(state.Auth);
  const user = useSelector((state) => state.Auth.users);
  console.log("adminlayout:", user);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      console.log("Redirecting to login because user is undefined...");
      navigate("/login");
    } else if (user.role !== "admin") {
      console.log("Redirecting to login because user is not an admin...");
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <>
      <Outlet />
    </>
  );
}
