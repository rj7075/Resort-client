import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { post } from "../Services/ApiEndpoint";
import { Logout } from "../Redux/Authslice";

function HomeAuth() {
  const user = useSelector((state) => state.Auth.users);
  console.log(user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlelogout = async () => {
    try {
      const request = await post("/api/auth/logout");
      const response = request.data;
      if (request.status == 200) {
        dispatch(Logout());
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const gotoAdmin = () => {
    navigate("/admin");
  };
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white w-80 p-8 rounded-2xl shadow-lg text-center">
          {/* Heading */}
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Welcome, {user && user.name}
          </h2>

          {/* Logout Button */}
          <button
            onClick={handlelogout}
            className="w-full py-2 mt-3 text-lg rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 shadow-sm transition"
          >
            Logout
          </button>

          {/* Admin Button - visible only for admin */}
          {user && user.role === "admin" && (
            <button
              onClick={gotoAdmin}
              className="w-full py-2 mt-3 text-lg rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 shadow-sm transition"
            >
              Go to Admin
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default HomeAuth;
