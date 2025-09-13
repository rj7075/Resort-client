import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../../Services/ApiEndpoint";

const UserList = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  // Fetch users from backend
  useEffect(() => {
    const GetUsers = async () => {
      try {
        const request = await get("/api/admin/getadminuser");
        const response = request.data;
        console.log("API Response:", response);

        if (request.status === 200) {
          setUsers(response.users); // set users in state
        }
      } catch (error) {
        console.log(error);
      }
    };

    GetUsers();
  }, []);

  // Placeholder for Delete function
  const handleDelete = (id) => {
    console.log("Delete user with id:", id);
    // Implement delete API call here
  };

  // Placeholder for Update function
  const handleUpdate = (id) => {
    console.log("Update user with id:", id);
    // Implement update navigation or form here
  };

  return (
    <div className="p-6">
      {/* Add User Button */}
      <button
        onClick={() => navigate("/admin/add-user")}
        className="bg-green-600 text-white px-4 py-2 mb-4 rounded"
      >
        Add User
      </button>

      {/* User Table */}
      <div className="overflow-x-auto bg-white shadow rounded-lg">
        <table className="w-full text-sm text-left border-collapse">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Email</th>
              <th className="px-4 py-2 border">Mobile No</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No users found
                </td>
              </tr>
            ) : (
              users.map((elem, i) => (
                <tr
                  key={elem._id}
                  className={`${
                    i % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-gray-100 transition`}
                >
                  <td className="p-3 text-gray-800">{elem.name}</td>
                  <td className="p-3 text-gray-600">{elem.email}</td>
                  <td className="p-3 text-gray-500">{elem.mobile}</td>
                  <td className="p-3 text-gray-500">{elem.role}</td>
                  <td className="p-3 flex gap-2">
                    <button
                      onClick={() => handleDelete(elem._id)}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => handleUpdate(elem._id)}
                      className="bg-amber-950 hover:bg-green-600 text-white px-4 py-2 rounded-md transition"
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
