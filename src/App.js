import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/web/Home";
import Dashboard from "./pages/admin/Dashboard";
import AdminHome from "./pages/admin/AdminHome";
import Login from "./pages/oauth/Login";
import Register from "./pages/oauth/Register";
import AdminPayment from "./pages/admin/AdminPayment";
import Payment from "./pages/payment/Payment";

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/dashboard" element={<Dashboard/>}/>
            <Route exact path="/adminHome" element={<AdminHome/>}/>
            <Route exact path="/login" element={<Login/>}/>
            <Route exact path="/register" element={<Register/>}/>
            <Route exact path="/adminPayment" element={<AdminPayment/>}/>
            <Route exact path="/payment" element={<Payment/>}/>
          </Routes> 
      </Router>
    </div>
  );
}

export default App;
