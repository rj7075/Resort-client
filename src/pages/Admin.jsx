import React, { useEffect } from "react";
import { deletusers, get, post } from "../Services/ApiEndpoint";
import { useState } from "react";
import axios from "axios";
import { data, Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { updateUser } from "../../../server/controllers/Admin.js";

export default function Admin() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const GetUsers = async () => {
      try {
        const request = await get("/api/admin/getuser");
        const response = request.data;
        console.log(response);
        if (request.status === 200) {
          console.log("this is users :", response.users);
          setUsers(response.users);
        }
      } catch (error) {
        console.log(error);
      }
    };
    GetUsers();
  }, []);

  const handleupdate = async (id) => {
    navigate(`/admin/updateuser/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const request = await deletusers(`/api/admin/deleteuser/${id}`);
      const response = request.data;
      if (request.status === 200) {
        toast.success(response.message);
        console.log(response);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    }
  };
  return (
    <div className="w-4/5 mx-auto my-6  mt-30 mb-40 p-6 bg-white rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Manage Users</h2>
      <Link className="underline text-blue-500" to={"/register"}>
        Add More Users
      </Link>{" "}
      <table className="w-full border-collapse mt-3">
        <thead>
          <tr className="bg-blue-600 text-white items-center justify-center">
            <th className="p-3 text-left ">Name</th>
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
              <td className="p-3 text-gray-800">{elem.name}</td>
              <td className="p-3 text-gray-600">{elem.email}</td>
              <td className="p-3 text-gray-500">{elem._id}</td>
              <td className="p-3 text-gray-500">{elem.role}</td>
              <td className="p-3 px-3">
                <button
                  onClick={() => handleDelete(elem._id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 mx-1 rounded-md transition"
                >
                  Delete
                </button>
                <button
                  onClick={() => handleupdate(elem._id)}
                  className="bg-amber-950 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
                >
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
