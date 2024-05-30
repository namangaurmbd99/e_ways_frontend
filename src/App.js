import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "components/SignIn/SignIn";
import Home from "components/Home/Home";
import CarriersList from "components/Carrier/CarriersLIst/CarriersList";
import CustomersList from "components/Customer/CustomersList/CustomersList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/carriers" element={<CarriersList />} />
        <Route path="/customers" element={<CustomersList />} />
      </Routes>
    </Router>
  );
}

export default App;
