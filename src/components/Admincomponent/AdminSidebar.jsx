import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminSidebar = () => {
  const user = useSelector((state) => state.Auth.users);
  const SidebarLinks = [
    {
      name: "AdminDashBoard",
      path: "/admin",
      icon: assets.dashboardIcon,
    },

    {
      name: "Add Room",
      path: "/admin/add-room",
      icon: assets.addIcon,
    },
    {
      name: "List Room",
      path: "/admin/list-room",
      icon: assets.listIcon,
    },
    {
      name: "Add User",
      path: "/admin/add-user",
      icon: assets.addIcon,
    },
    {
      name: "Get AdminUser",
      path: "/admin/user-list",
      icon: assets.addIcon,
    },
  ];
  return (
    <div
      className="flex flex-col  md:w-64 w-16 h-full text-base pt-4
      py-3 transition-all duration-300 bg-[#F6F9FC] text-gray-800"
    >
      {SidebarLinks.map((item, index) => (
        <NavLink
          to={item.path}
          key={index}
          end="/admin"
          className={({ isActive }) =>
            `flex items-center py-3 px-4 md:px-8 gap-3 ${
              isActive
                ? "border-r-4 md:border-r-[6px] bg-blue-600/10 border-blue-600  text-blue-600"
                : "hover:bg-gray-100/90 border-white text-gray-700"
            }`
          }
        >
          <img src={item.icon} alt={item.name} className="min-h-6 min-w-6" />
          <p className="md:block hidden text-center">{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default AdminSidebar;
