import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../../src/pages/customer/CustomerHomePage";
import RegistrationPage from "../../src/pages/customer/RegistrationPage";
import CustomerHomePage from "../../src/pages/customer/CustomerHomePage";
import CartPage from "../../src/pages/customer/CartPage";
import OrderPage from "../../src/pages/customer/OrderPage";
import AdminLogin from "../../src/pages/admin/AdminLogin"; 
import AdminDashboard from "../../src/pages/admin/AdminDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />
      <Route path="/customerhome" element={<CustomerHomePage />} />
      <Route path="/UserCartPage" element={<CartPage />} />
      <Route path="/orders" element={<OrderPage />} />
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admindashboard" element={<AdminDashboard />} />
    </Routes>
  );
};

export default AppRoutes;