import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GeneralContextProvider from "./components/GeneralContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VideoPage from "./components/VideoPage.jsx";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GeneralContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/home" element={<App />} />
        <Route path="/video" element={<VideoPage />} />
      </Routes>
    </GeneralContextProvider>
  </BrowserRouter>
);
