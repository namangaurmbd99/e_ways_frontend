import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "components/SignIn/SignIn";
import Home from "components/Home/Home";
import CarrierList from "components/Carrier/CarrierLIst/CarrierList";
import CustomerList from "components/Customers/CustomerList/CustomerList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/carriers" element={<CarrierList />} />
        <Route path="/customers" element={<CustomerList />} />
      </Routes>
    </Router>
  );
}

export default App;
