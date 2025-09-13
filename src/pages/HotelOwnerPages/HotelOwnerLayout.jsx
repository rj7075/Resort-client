import { React, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import OwnerSidebar from "./OwnerSidebar.jsx";
import Navbar from "../../components/Navbar.jsx";
import { useState } from "react";

const HotelOwnerLayout = () => {
  const user = useSelector((state) => state.Auth.users);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!user || user.role != "hotelowner") {
      navigate("/"); // redirect non-admin users
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      <div className="flex flex-1 mt-[64px]">
        {/* Sidebar sticky below navbar */}
        <div
          className={`bg-white shadow-md overflow-auto transition-all duration-300 z-40
          h-[calc(100vh-64px)] sticky top-[64px]
          ${sidebarOpen ? "w-64" : "w-16"} 
          md:w-64
          `}
        >
          <OwnerSidebar isCollapsed={window.innerWidth < 768 && !sidebarOpen} />
        </div>

        {/* Main content scrollable */}
        <div className="flex-1 overflow-auto p-6 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HotelOwnerLayout;
