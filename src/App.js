import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cipher from "./components/Cipher";
import Heart from "./components/Heart";
import Password from "./components/Password";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Heart />} />
        <Route path="/password" element={<Password />} />
        <Route path="/cipher" element={<Cipher />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
