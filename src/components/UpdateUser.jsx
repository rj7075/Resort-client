// import { useParams } from "react-router-dom";

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const UpdateUser = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => setIsOpen(true);
//   const closeModal = () => setIsOpen(false);
//   const { id } = useParams();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     role: "",
//   });
//   const Navigate = useNavigate();
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const response = await fetch(
//           `http://localhost:3000/api/admin/updateuser/${id}`
//         );
//         const data = await response.json();
//         setFormData(data);
//       } catch (error) {
//         console.log("error while fetching usrs:", error.message);
//       }
//     };
//     fetchUser();
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Form submitted:", formData);
//     setFormData({ name: "", email: "", phone: "" });
//     try {
//       const response = await fetch(
//         `http://localhost:3000/api/admin/updateuser/${id}`,
//         {
//           method: "PATCH",
//           headers: {
//             "content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         }
//       );
//       const data = await response.json(response);
//       console.log(data);
//       Navigate("/");
//     } catch (error) {
//       console.log("internal error :", error.message);
//     }
//   };

//   return (
//     <>
//       {/* Update Button (trigger) */}
//       <button
//         onClick={openModal}
//         className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
//       >
//         Update User
//       </button>

//       {/* Modal */}
//       {isOpen && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//           <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative">
//             {/* Close Button */}
//             <button
//               onClick={closeModal}
//               className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-2xl"
//             >
//               &times;
//             </button>

//             <h2 className="text-xl font-bold text-center text-gray-800 mb-6">
//               Update User
//             </h2>

//             <form
//               onSubmit={(e) => {
//                 handleSubmit(e);
//                 closeModal();
//               }}
//               className="space-y-4"
//             >
//               {/* Name */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 />
//               </div>

//               {/* Email */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 />
//               </div>

//               {/* Phone */}
//               <div>
//                 <label className="block text-gray-700 font-medium mb-1">
//                   role
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//                 />
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="w-full py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
//               >
//                 Update
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default UpdateUser;

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"; // or your API instance
import { toast } from "react-hot-toast";
import { get, patch } from "../Services/ApiEndpoint";

const UpdateUser = () => {
  const { id } = useParams(); // get user id from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  // ✅ Fetch user details by ID
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await get(`/api/admin/getuser/${id}`);
        setFormData({
          name: res.data.name,
          email: res.data.email,
          role: res.data.role,
        });
      } catch (error) {
        toast.error("Failed to fetch user details");
      }
    };
    fetchUser();
  }, [id]);

  // ✅ Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await patch(`/api/admin/updateuser/${id}`, formData);
      toast.success(res.data.message);
      navigate("/admin"); // redirect back to admin page
    } catch (error) {
      toast.error("Failed to update user");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Update User</h2>

      {/* Show User ID */}
      <p className="mb-2 text-gray-600">User ID: {id}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        >
          <option value="">Select Role</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
          <option value="hotelowner">HotelOwner</option>
        </select>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
