import React, { useState, useEffect } from "react";

import { toast } from "react-hot-toast";
import { roomsDummyData } from "../../assets/assets";
import TitleSubtitle from "../../components/TitleSubtitle";
import { get, post } from "../../Services/ApiEndpoint";
import { useAppContext } from "../../Context/useAppContext";

const OwnerRoomList = () => {
  const [rooms, setRooms] = useState([]);
  const { axios, getToken, currency, user } = useAppContext();

  //Fetch room for the Hotel owner

  const fetchRooms = async () => {
    try {
      const { data } = await get("api/rooms/owner", {
        headers: { Authorization: `Bearer ${await getToken()}` },
      });
      if (data.success) {
        setRooms(data.rooms);
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  //Toggle Availability of the Room

  const toggleAvailability = async (roomId) => {
    const { data } = await post(
      "/api/rooms/toggle-availability",
      { roomId },
      {
        headers: {
          Authorization: `Bearer ${await getToken()}`,
        },
      }
    );
    if (data.success) {
      toast.success(data.message);
      fetchRooms();
    } else {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (user) {
      fetchRooms();
    }
  }, [user]);
  return (
    <div>
      <TitleSubtitle
        align="left"
        font="outfit"
        title="Room Listings"
        subTitle="View, Edit,or manage all listed rooms. Keep the information
         up-to-date to provide the best expirience for users"
      />
      <p className="text-gray-500 mt-8">All Rooms</p>
      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll mt-3">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium ">Name</th>
              <th className="py-3 px-4 text-gray-800 font-medium max-sm:hidden">
                Facility
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium ">
                Price/Night
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Availability
              </th>
            </tr>
          </thead>
          <tbody className="text-xs">
            {rooms.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 ">
                  {item.roomType}
                </td>

                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden">
                  {item.amenities.join(", ")}
                </td>

                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 ">
                  ${item.pricePerNight}
                </td>

                <td className="py-3 px-4 border-t border-gray-300 text-sm text-red-500 text-center">
                  <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                    <input
                      onChange={() => toggleAvailability(item._id)}
                      type="checkbox"
                      className="sr-only peer"
                      checked={item.isAvailable}
                    />
                    <div
                      className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors
                    duration-200"
                    ></div>
                    <span
                      className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform
                    duration-300 ease-in-out peer-checked:translate-x-5"
                    ></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OwnerRoomList;
