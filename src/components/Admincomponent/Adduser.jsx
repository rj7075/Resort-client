import { useState } from "react";
import { toast } from "react-hot-toast";
import { post } from "../../Services/ApiEndpoint";
import { useNavigate } from "react-router-dom";

const AddUserPopup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    role: "user",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await post("/api/admin/createuser", formData);
      const response = request.data;

      if (request.status === 200 || request.status === 201) {
        toast.success(response.message);
        navigate("/admin/user-list"); // go back to admin dashboard
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-2">
      <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg">
        <h2 className="text-2xl mb-6">Add User</h2>

        <form onSubmit={handleSubmit} className="space-y-2">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            onChange={handleChange}
            className="border p-2 w-full rounded"
            required
          />
          <select
            name="role"
            onChange={handleChange}
            className="border p-2 w-full rounded"
            defaultValue="user"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>

          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => navigate("/admin")} // go back to admin dashboard
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUserPopup;
