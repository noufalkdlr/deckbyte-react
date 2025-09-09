import React from "react";
import { Route, Routes } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";

//public pages
import Home from "../pages/public/Home";
import About from "../pages/public/About";

//admin pages
import Dashboard from "../pages/admin/Dashboard";
import User from "../pages/admin/User";
import NotFound from "../pages/error/NotFound";
import AdminLogin from "../pages/admin/AdminLogin";

const AppRoutes = () => {
  return (
    <Routes>
      {/* public routes */}

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* Admin login */}
      <Route path="/admin/login" element={<AdminLogin />} />

      {/* Protected admin routes */}

      <Route path="/admin" element={<ProtectedRoute />}>
        <Route element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<User />} />
        </Route>
      </Route>

      {/* fallback route */}

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
