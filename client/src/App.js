import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import Header from "./Header";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

// SERVICES THAT CALL OUR API ENDPOINTS
// import { getAllProfiles } from "./services/profileService";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={"/login"} element={<LoginPage/>} />
        <Route path = "/register" element={<RegisterPage/>}/>
      </Route> 
    </Routes>
  );
}
export default App;
