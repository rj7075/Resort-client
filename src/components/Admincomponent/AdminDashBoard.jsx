import React, { useEffect, useState } from "react";
import { deletusers, get } from "../../Services/ApiEndpoint.js";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function AdminDashBoard() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const GetUsers = async () => {
      try {
        const request = await get("/api/admin/getuser");
        const response = request.data;
        if (request.status === 200) {
          setUsers(response.users);
        }
      } catch (error) {
        console.log(error);
      }
    };
    GetUsers();
  }, []);

  const handleupdate = (id) => {
    navigate(`/admin/updateuser/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const request = await deletusers(`/api/admin/deleteuser/${id}`);
      const response = request.data;
      if (request.status === 200) {
        toast.success(response.message);
        // refresh list after delete
        setUsers((prev) => prev.filter((u) => u._id !== id));
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed");
    }
  };

  return (
    <div className="relative w-full mx-auto my-3 mb-20 p-2 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        Manage Users
      </h2>

      <div className="mb-4 text-center">
        <Link className="underline text-blue-500" to={"/register"}>
          Register New User
        </Link>
      </div>

      {/* ✅ Responsive wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((elem, i) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-gray-100 transition`}
              >
                <td className="p-3 text-gray-800 whitespace-nowrap">
                  {elem.name}
                </td>
                <td className="p-3 text-gray-600 whitespace-nowrap">
                  {elem.email}
                </td>
                <td className="p-3 text-gray-500 whitespace-nowrap">
                  {elem._id}
                </td>
                <td className="p-3 text-gray-500 whitespace-nowrap">
                  {elem.role}
                </td>
                <td className="p-3 flex flex-wrap gap-2">
                  <button
                    onClick={() => handleDelete(elem._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition text-sm"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => handleupdate(elem._id)}
                    className="bg-amber-950 hover:bg-green-600 text-white px-3 py-1 rounded-md transition text-sm"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
