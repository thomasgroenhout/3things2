import React from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from './aws-exports';

import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import GoodThings from "./pages/GoodThings.jsx";
import BadThings from "./pages/BadThings.jsx";
import Profile from "./pages/Profile.jsx";

Amplify.configure(awsExports);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation Bar */}
        <nav className="bg-blue-500 text-white p-4 flex justify-around">
          <NavLink className="font-bold" to="/good" activeClassName="underline">Good Things</NavLink>
          <NavLink className="font-bold" to="/bad" activeClassName="underline">Bad Things</NavLink>
          <NavLink className="font-bold" to="/profile" activeClassName="underline">Profile</NavLink>
        </nav>

        {/* Page Content */}
        <div className="p-6">
          <Routes>
            <Route path="/good" element={<GoodThings />} />
            <Route path="/bad" element={<BadThings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<GoodThings />} /> {/* Default route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default withAuthenticator(App);
