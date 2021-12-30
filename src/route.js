import React from "react";
import signUp from "./signUp";
import login from "./login";
import Apps from "./App";
import { Routes ,Route } from 'react-router-dom';function App() {
  return (
    <>
      <Routes>
        <Route Path="/" component={signUp} />
        <Route Path="/login" component={login} />
        <Route Path="/Dashbord" component={Apps} />
      </Routes>
    </>
  );
}

export default App;
