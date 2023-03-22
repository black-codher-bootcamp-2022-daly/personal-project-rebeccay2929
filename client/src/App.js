import React, { useState, useEffect } from "react";
import "./App.css";
import Post from "./Post";
import Header from "./Header";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";

// SERVICES THAT CALL OUR API ENDPOINTS
// import { getAllProfiles } from "./services/profileService";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path={"/login"} element={<LoginPage/>} />
        <Route path = "/register" element={<RegisterPage/>}/>
        <Route path = "/create" element={<CreatePost/>}/>
        <Route path="/post/:id" element={<PostPage />} />


      </Route> 
    </Routes>
  );
}
export default App;
