import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../modules/dashboard/pages/HomePage";
import Login from "../modules/dashboard/pages/Login";
import SignUp from "../modules/dashboard/pages/SignUp";
import ProfilePage from "../modules/dashboard/pages/ProfilePage";

const AppRoutes = () => (
  <Router>
    <Routes>
         <Route path="/login" element={<Login />} />
         <Route path="/signup" element={<SignUp />} />

      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />

    </Routes>
  </Router>
);

export default AppRoutes;
