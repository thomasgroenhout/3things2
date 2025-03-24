import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import { FaHeart, FaFire, FaUser, FaBars } from "react-icons/fa";
import GoodThings from "./pages/GoodThings";
import BadThings from "./pages/BadThings";
import Profile from "./pages/Profile";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Router>
      <div className="relative h-screen w-full bg-gray-100 p-[5%]">
        {/* Fixed Top Bar */}
        <header className="fixed top-0 left-0 w-full bg-orange-500 text-white py-4 px-6 flex justify-between items-center shadow-md z-10" style={{ height: "100px" }}>
          {/* Left Side: 3Things */}
          <h2 className="text-2xl font-bold">3Things</h2>

          {/* Right Side: Hamburger Menu */}
          <button onClick={toggleMenu} className="text-2xl">
            <FaBars />
          </button>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-16 left-0 w-full bg-orange-500 text-white py-4 shadow-md z-20">
            <nav className="flex flex-col items-center">
              <NavLink
                to="/good"
                className="py-2 text-lg"
                onClick={toggleMenu}
              >
                Good
              </NavLink>
              <NavLink
                to="/bad"
                className="py-2 text-lg"
                onClick={toggleMenu}
              >
                Bad
              </NavLink>
              <NavLink
                to="/profile"
                className="py-2 text-lg"
                onClick={toggleMenu}
              >
                Profile
              </NavLink>
            </nav>
          </div>
        )}

        {/* Content Area */}
        <div className="pt-[100px] pb-[70px] overflow-y-auto w-full">
          <div className="px-4">
            <Routes>
              <Route path="/good" element={<GoodThings />} />
              <Route path="/bad" element={<BadThings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<GoodThings />} /> {/* Default route */}
            </Routes>
          </div>
        </div>

        {/* Fixed Bottom Tab Bar */}
        <nav className="fixed bottom-0 left-0 w-full bg-orange-500 text-white py-3 shadow-md z-10">
          <div className="flex justify-between items-center px-6 w-full">
            <NavLink
              to="/good"
              className="w-1/3 flex flex-col items-center text-white transition-all hover:text-yellow-200"
            >
              <FaHeart size={28} />
              <span className="text-xs mt-1">Good</span>
            </NavLink>
            <NavLink
              to="/bad"
              className="w-1/3 flex flex-col items-center text-white transition-all hover:text-yellow-200"
            >
              <FaFire size={28} />
              <span className="text-xs mt-1">Bad</span>
            </NavLink>
            <NavLink
              to="/profile"
              className="w-1/3 flex flex-col items-center text-white transition-all hover:text-yellow-200"
            >
              <FaUser size={28} />
              <span className="text-xs mt-1">Profile</span>
            </NavLink>
          </div>
        </nav>
      </div>
    </Router>
  );
}

export default App;
