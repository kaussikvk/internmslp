import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./InternMS/landingpage";
import Login from "./InternMS/Login";
import Register from "./InternMS/Register";
import ForgotPassword from "./InternMS/ForgotPassword";
import VerifyCode from "./InternMS/VerifyCode";
import ResetPassword from "./InternMS/ResetPassword";
import ResetSuccess from "./InternMS/ResetSuccess";
import TwoStepVerification from "./InternMS/TwoStepVerification";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/reset-password-success" element={<ResetSuccess />} />

        
        <Route path="/two-step-verification" element={<TwoStepVerification />} />
      </Routes>
    </BrowserRouter>
  );
}
