import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SignUp from "./signUp";
import Login from "./login";
import Apps from "./App";
import AddTour from "./addTour";
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
   
      <Route exact path="/signup" element={<SignUp />}></Route>
      <Route exact path="/" element={<Login />}></Route>
      <Route exact path="/dashbord" element={<Apps />}></Route>
      <Route exact path="/dashbord/addTour" element={<AddTour />}></Route>
      
    </Routes>
    
  </BrowserRouter>,
  document.getElementById("root")
);
