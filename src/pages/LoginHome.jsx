import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../components/login/Login";
import LoginEmail from "../components/login/LoginEmail";

export default function LoginHome() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<LoginEmail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
