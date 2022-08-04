import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import * as React from 'react';

import { Route, Routes } from 'react-router-dom';

import Admin from './pages/Admin/Admin.js';
import AdminBills from './components/layout/Admin/AdminBills/AdminBills.js';
import AdminDashboard from './components/layout/Admin/AdminDashboard/AdminDashboard.js';
import AdminProduct from './components/layout/Admin/AdminProduct/AdminProduct.js';
import AdminUsers from './components/layout/Admin/AdminUsers/AdminUsers.js';
import Authenticate from './pages/Authenticate/Authenticate.js';
import Home from './pages/Home/Home.js';
import ResetPassword from './pages/Authenticate/ResetPassword.js';
import Shop from './pages/Shop/Shop.js';
import Cart from './pages/Cart/Cart.js';
import Details from './pages/Details/Details.js';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    if (window.location.pathname === '/admin') {
      window.location.href = '/admin/dashboard';
    }
    console.clear();
  }, []);

  return (
    <Routes>
      {/* Route Config For Main Page */}
      <Route path="/" element={<Home />} />

      {/* Route Config For Shop Page */}
      <Route path="/shop" element={<Shop />} />

      {/* Route Config For Detail */}
      <Route path="/shop/:id" element={<Details />} />

      {/* Route Config For Cart */}
      <Route path="/cart" element={<Cart />} />

      {/* Route Config For Authenticate */}
      <Route path="/smember" element={<Authenticate />} />

      {/* Route Config For Reset Password */}
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Route Config For Admin Page */}
      <Route path="/admin/dashboard" element={<Admin layout={<AdminDashboard />} />} />
      <Route path="/admin/products" element={<Admin layout={<AdminProduct />} />} />
      <Route path="/admin/bills" element={<Admin layout={<AdminBills />} />} />
      <Route path="/admin/users" element={<Admin layout={<AdminUsers />} />} />
    </Routes>
  );
}

export default App;
