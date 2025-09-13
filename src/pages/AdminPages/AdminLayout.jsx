import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import AdminNavbar from "../../components/Admincomponent/AdminNavabar";
import AdminSidebar from "../../components/Admincomponent/AdminSidebar";

const AdminLayout = () => {
  const user = useSelector((state) => state.Auth.users);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!user || user.role !== "admin") {
      navigate("/"); // redirect non-admin users
    }
  }, [user, navigate]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar with sidebar toggle */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <AdminNavbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
      </div>

      <div className="flex flex-1 mt-[64px]">
        {/* Sidebar */}
        <div
          className={`bg-white shadow-md overflow-auto transition-all duration-300 z-40
          h-[calc(100vh-64px)] sticky top-[64px]
          ${sidebarOpen ? "w-64" : "w-16"} 
          md:w-64
          `}
        >
          {/* ✅ On md+ screens always expanded, on mobile it uses sidebarOpen */}
          <AdminSidebar isCollapsed={window.innerWidth < 768 && !sidebarOpen} />
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto p-4 md:p-6 bg-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
