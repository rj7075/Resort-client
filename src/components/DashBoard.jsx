import { useState, useEffect } from "react";
import { Col, Row, Table, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const DashBoard = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  const fetchUsers = async () => {
    try {
      const response = await fetch(
        "https://crud-app-3-02ct.onrender.com/api/user"
      );
      const data = await response.json();
      setUsers(data);
      console.log("user Deleted Successfully");
    } catch (error) {
      console.log("error while deleteing users :", error.message);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleUpdate = (userId) => {
    navigate(`/user/${userId}`);
  };

  const handleDelete = async (userId) => {
    try {
      const response = await fetch(
        `https://crud-app-3-02ct.onrender.com/api/user/${userId}`,
        {
          method: "DELETE",
        }
      );
      console.log(response);
      if (response.ok) {
        fetchUsers();
      }
    } catch (error) {
      console.log("error while fetching usrs:", error.message);
    }
  };
  return (
    <>
      <div className="mt-40 px-6">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-xl p-6">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Dashboard Component
          </h1>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
                  <th className="px-6 py-3 text-left">Name</th>
                  <th className="px-6 py-3 text-left">Email</th>
                  <th className="px-6 py-3 text-left">Phone</th>
                  <th className="px-6 py-3 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users && users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user._id} className="hover:bg-gray-50">
                      <td className="px-6 py-3 text-gray-800">{user.name}</td>
                      <td className="px-6 py-3 text-gray-600">{user.email}</td>
                      <td className="px-6 py-3 text-gray-500">{user.phone}</td>
                      <td className="px-6 py-3 flex gap-3">
                        {/* Update Button */}
                        <button
                          onClick={() => handleUpdate(user._id)}
                          className="px-4 py-2 bg-gray-800 text-white rounded-md text-sm font-medium hover:bg-gray-900 transition"
                        >
                          Update
                        </button>

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(user._id)}
                          className="px-4 py-2 bg-red-500 text-white rounded-md text-sm font-medium hover:bg-red-600 transition"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="4"
                      className="px-6 py-4 text-center text-gray-500 italic"
                    >
                      No users found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashBoard;
