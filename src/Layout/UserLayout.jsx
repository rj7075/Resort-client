import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function UserLayout() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.Auth.users);
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);
  return <Outlet />;
}

export default UserLayout;
