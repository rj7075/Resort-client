import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { post } from "../Services/ApiEndpoint";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { SetUser } from "../Redux/Authslice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const request = await post("/api/auth/login", {
        email,
        password,
      });
      const response = request.data;
      if (request.status === 200) {
        dispatch(SetUser(response.user));
        console.log("User Role:", response.user.role);
        localStorage.setItem("token", response.token); // ✅ Ensure Redux stores user

        navigate(response.user.role === "admin" ? "/admin" : "/user");
        toast.success(response.message);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-cols relative mt-40 md:mt-25 py-4 px-6 items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white text-gray-500 w-full max-w-[340px] mx-4 md:p-6 p-4 py-8 text-left text-sm rounded-lg shadow-[0px_0px_10px_0px] shadow-black/10"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Sign IN
        </h2>

        <input
          id="email"
          className="w-full border mt-1 bg-indigo-500/5 mb-2 border-gray-500/10 outline-none rounded py-2.5 px-3"
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          id="password"
          className="w-full border mt-1 bg-indigo-500/5 mb-7 border-gray-500/10 outline-none rounded py-2.5 px-3"
          type="text"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="w-full mb-3 bg-indigo-500 hover:bg-indigo-600 transition-all active:scale-95 py-2.5 rounded text-white font-medium">
          Sign In
        </button>

        <p className="text-center mt-4">
          Do not have an account?{" "}
          <Link to="/register" className="text-blue-500 underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
