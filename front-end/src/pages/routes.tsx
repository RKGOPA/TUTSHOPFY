// src/pages/routes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./login/login";
import Signup from "./sign_up/sign_up";
import ForgotPassword from "./forgot_password/ForgotPassword";
import Home from "./dashboard/home";
import Listing from "./dashboard/listing";
import Messages from "./dashboard/messages"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="/listing" element={<Listing />} />
      <Route path="/messages" element={<Messages />} />
       
    </Routes>
  );
};

export default AppRoutes;
