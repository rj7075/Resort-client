import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { post } from "../Services/ApiEndpoint";
import { Logout } from "../Redux/Authslice";

import { assets } from "../assets/assets.js";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAppContext } from "../Context/useAppContext.jsx";

const Navbar = () => {
  const user = useSelector((state) => state.Auth.users);
  const dispatch = useDispatch();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    {
      name: "Hotels",
      path: "/hotels",
      submenu: [{ name: "AllRooms", path: "/hotels/allrooms" }],
    },
    { name: "Experience", path: "/experience" },
    { name: "My Booking", path: "/my-bookings" },
    {
      name: "About",
      path: "/about",
      submenu: [
        { name: "Our Services", path: "/about/services" },
        { name: "Our Portfolio", path: "/about/portfolio" },
        { name: "Our Location", path: "/about/location" },
      ],
    },
  ];

  const ref = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // for desktop hover
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null); // for mobile toggle

  const { navigate, setShowHotelReg } = useAppContext();
  const closeTimer = useRef(null);

  // Scroll effect
  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolled(true);
      return;
    } else {
      setIsScrolled(false);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  // Hover dropdown handlers (desktop)
  const handleMouseEnter = (name) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  // Logout
  const handlelogout = async () => {
    try {
      const request = await post("/api/auth/logout");
      const response = request.data;
      if (request.status === 200) {
        toast.success(response.message);
        dispatch(Logout());
        navigate("/login");
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <nav
      ref={ref}
      className={`h-20 fixed top-0 bg-transparant left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
          : " py-4 md:py-6 text-white"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src={assets.logo}
          alt="logo"
          className={`h-9 ${isScrolled && "invert opacity-80"}`}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8 relative">
        {navLinks.map((link, i) => (
          <div
            key={i}
            className="relative"
            onMouseEnter={() => handleMouseEnter(link.name)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              to={link.path}
              className={`group flex flex-col gap-0.5 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link.name}
              <div
                className={`${
                  isScrolled ? "bg-gray-700" : "bg-white"
                } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
              />
            </Link>

            {/* Dropdown for submenu */}
            {link.submenu && activeDropdown === link.name && (
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-white text-black rounded shadow-lg z-10"
                onMouseEnter={() => handleMouseEnter(link.name)}
                onMouseLeave={handleMouseLeave}
              >
                {link.submenu.map((sub, j) => (
                  <Link
                    key={j}
                    to={sub.path}
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    {sub.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {user && (
          <button
            className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${
              isScrolled ? "text-black" : "text-white"
            } transition-all`}
            onClick={() => {
              if (user.role === "hotelowner") {
                navigate("/owner");
              } else if (user.role === "admin") {
                navigate("/admin");
              } else {
                setShowHotelReg(true);
              }
            }}
          >
            {user.role === "hotelowner"
              ? "DashBoard"
              : user.role === "admin"
              ? "Admin Panel"
              : "List Your Hotel"}
          </button>
        )}
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4">
        <svg
          className={`h-6 w-6 ${isScrolled ? "invert" : ""}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>

        {user ? (
          <button
            onClick={handlelogout}
            className={`px-8 py-2.5 rounded-full cursor-pointer ml-4 transition-all duration-500 ${
              isScrolled ? "text-white bg-black" : "bg-white text-black"
            }`}
          >
            Logout
          </button>
        ) : (
          <button
            className={`px-8 py-2.5 cursor-pointer rounded-full ml-4 transition-all duration-500 ${
              isScrolled ? "text-white bg-black" : "bg-white text-black"
            }`}
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 md:hidden">
        <img
          src={assets.menuIcon}
          alt="menuicon"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-amber-900 text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={assets.closeIcon} alt="closeIcon" className="h-6 w-6" />
        </button>

        {/* {navLinks.map((link, i) => (
          <div key={i} className="text-center w-full">
            {link.submenu ? (
              <>
                <button
                  className=" py-2 w-full text-lg font-medium flex items-center justify-center gap-2"
                  onClick={() =>
                    setActiveMobileDropdown(
                      activeMobileDropdown === link.name ? null : link.name
                    )
                  }
                >
                  {link.name}
                  <span>{activeMobileDropdown === link.name ? "▲" : "▼"}</span>
                </button>

                {activeMobileDropdown === link.name && (
                  <div className="flex flex-col gap-1">
                    {link.submenu.map((sub, j) => (
                      <Link
                        key={j}
                        to={sub.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm text-gray-500 py-1"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2"
              >
                {link.name}
              </Link>
            )}
          </div>
        ))} */}

        {navLinks.map((link, i) => (
          <div key={i} className="text-center w-[80%]">
            {link.submenu ? (
              <>
                {/* Parent link + dropdown toggle */}
                <div className="flex items-center justify-center gap-2">
                  <Link
                    to={link.path} // parent link now works
                    onClick={() => setIsMenuOpen(false)}
                    className="py-2 w-full text-lg font-medium text-center"
                  >
                    {link.name}
                  </Link>

                  {/* Dropdown toggle button */}
                  <button
                    type="button"
                    onClick={() =>
                      setActiveMobileDropdown(
                        activeMobileDropdown === link.name ? null : link.name
                      )
                    }
                    className="mx-[-4px]"
                  >
                    {activeMobileDropdown === link.name ? "▲" : "▼"}
                  </button>
                </div>

                {/* Submenu items */}
                {activeMobileDropdown === link.name && (
                  <div className="flex flex-col gap-1">
                    {link.submenu.map((sub, j) => (
                      <Link
                        key={j}
                        to={sub.path}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm text-gray-500 py-1"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block py-2"
              >
                {link.name}
              </Link>
            )}
          </div>
        ))}

        {/* User Role Menu */}
        {user && (
          <button
            className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${
              isScrolled ? "text-black" : "text-white"
            } transition-all`}
            onClick={() => {
              if (user.role === "hotelowner") {
                navigate("/owner");
              } else if (user.role === "admin") {
                navigate("/admin");
              } else {
                setShowHotelReg(true);
              }
              setIsMenuOpen(false);
            }}
          >
            {user.role === "hotelowner"
              ? "DashBoard"
              : user.role === "admin"
              ? "Admin Panel"
              : "List Your Hotel"}
          </button>
        )}

        {/* Auth Buttons */}
        {user ? (
          <button
            onClick={() => {
              handlelogout();
              setIsMenuOpen(false);
            }}
            className={`px-8 py-2.5 rounded-full cursor-pointer ml-4 transition-all duration-500 ${
              isScrolled ? "text-white bg-black" : "bg-white text-black"
            }`}
          >
            Logout
          </button>
        ) : (
          <button
            className={`px-8 py-2.5 cursor-pointer rounded-full ml-4 transition-all duration-500 ${
              isScrolled ? "text-white bg-black" : "bg-white text-black"
            }`}
            onClick={() => {
              navigate("/login");
              setIsMenuOpen(false);
            }}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
