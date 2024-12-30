import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import LinkifyPage from "./pages/LinkifyPage.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/linkify/:id" element={<LinkifyPage />} />
    </Routes>
  );
};

export default App;
