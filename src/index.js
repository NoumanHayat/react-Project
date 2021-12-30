import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SignUp from "./signUp";
import Login from "./login";
import Apps from "./App";
import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      {/* <Route Path="/" caseSensitive={false} component={SignUp} />
      <Route Path="/login" caseSensitive={false} component={Login} />
      <Route Path="/Dashbord" caseSensitive={false} component={Apps} /> */}
      <Route exact path="/signup" element={<SignUp />}></Route>
      <Route exact path="/" element={<Login />}></Route>
      <Route exact path="/dashbord" element={<Apps />}></Route>
    </Routes>
    
  </BrowserRouter>,
  document.getElementById("root")
);
