import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "components/SignIn/SignIn";
import Home from "components/Home/Home";
import CarrierList from "components/Carrier/CarrierLIst/CarrierList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Home />} />
        <Route path="/carriers" element={<CarrierList />} />
      </Routes>
    </Router>
  );
}

export default App;
