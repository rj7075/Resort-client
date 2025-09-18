import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./index.css";
// import "./App.css";

import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import HomeAuth from "./pages/Homeauth.jsx";
import About from "./pages/About.jsx";
import Experience from "./pages/Expirience.jsx";
import Hotels from "./pages/Hotels.jsx";
import Services from "./pages/Services.jsx";
import Portfolio from "./pages/Portfolio.jsx";

import Login from "./components/SignIn.jsx";
import Register from "./components/SignUp.jsx";
import Footer from "./components/Footer.jsx";
import { Toaster } from "react-hot-toast";
import UserLayout from "./Layout/UserLayout.jsx";

import Admin from "./pages/Admin.jsx";
import UpdateUser from "./components/UpdateUser.jsx";
import OurPortFolio from "./components/OurPortfolio.jsx";
import OurServices from "./components/OurServices.jsx";
import OurLocation from "./pages/OurLocation.jsx";
import AboutMain from "./pages/AboutMain.jsx";
import AdminDashBoard from "./components/Admincomponent/AdminDashBoard.jsx";
import AdminNavbar from "./components/Admincomponent/AdminNavabar.jsx";
import AdminLayout from "./pages/AdminPages/AdminLayout.jsx";
import AddRoom1 from "./pages/AdminPages/AddRoom1.jsx";
import ListRoom from "./pages/AdminPages/ListRoom.jsx";
import UserList from "./components/Admincomponent/Listuser.jsx";
import AddUserPopup from "./components/Admincomponent/Adduser.jsx";
import BookingDashBoard from "./pages/AdminPages/BookingDAshBoard.jsx";
import Allrooms from "./pages/AllRooms.jsx";
import HotelPage from "./pages/Hotelpage.jsx";
import RoomDetails from "./pages/RoomDetails.jsx";
import HotelOwnerLayout from "./pages/HotelOwnerPages/HotelOwnerLayout.jsx";
import AddHotelRoom from "./pages/HotelOwnerPages/AddHotelRoom.jsx";
import MyBooking from "./pages/MyBooking.jsx";
import HotelReg from "./pages/HotelReg.jsx";
import { useAppContext } from "./Context/useAppContext.jsx";
import OwnerDashBoard from "./pages/HotelOwnerPages/OwnerDashBoard.jsx";
import OwnerRoomList from "./pages/HotelOwnerPages/OwnersRoomList.jsx";
import Loader from "./components/Loader.jsx";

function App() {
  const isOwnerPath = useLocation().pathname.includes("owner");
  const isAdmin = useLocation().pathname.includes("admin");
  const { showHotelReg, setShowHotelReg } = useAppContext();
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      {isAdmin && <AdminNavbar />}
      <div className="min-h-[70vh]">
        <Toaster />
        {showHotelReg && <HotelReg />}
        <Routes>
          <Route path="/user" element={<UserLayout />}>
            <Route index element={<HomeAuth />} />
            <Route path="/user/mybooking" element={<MyBooking />} />
            <Route path="/user/updateprofile" element={<UpdateUser />} />
          </Route>
          <Route path="/admin/login" element={<Admin />}></Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashBoard />} />
            <Route path="/admin/add-room" element={<AddRoom1 />} />
            <Route path="/admin/list-room" element={<ListRoom />} />
            <Route path="/admin/user-list" element={<UserList />} />
            <Route path="/admin/add-user" element={<AddUserPopup />} />
            <Route path="/admin/updateuser/:id" element={<UpdateUser />} />
          </Route>

          <Route path="/owner" element={<HotelOwnerLayout />}>
            <Route index element={<OwnerDashBoard />} />
            <Route path="add-room" element={<AddRoom1 />} />
            <Route path="list-room" element={<OwnerRoomList />} />
            <Route path="user-list" element={<UserList />} />
          </Route>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/hotels" element={<Hotels />}>
            <Route index element={<HotelPage />} />
            <Route path="allrooms" element={<Allrooms />} />
            <Route path="allrooms/:id" element={<RoomDetails />} />
          </Route>
          <Route path="/rooms" element={<Allrooms />} />
          <Route path="/my-bookings" element={<MyBooking />} />
          <Route path="/loader/:nextUrl" element={<Loader />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />}>
            <Route index element={<AboutMain />} />
            <Route path="services" element={<OurServices />} />
            <Route path="portfolio" element={<OurPortFolio />} />
            <Route path="location" element={<OurLocation />} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
