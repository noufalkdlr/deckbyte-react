import React from "react";
import { Route, Routes } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";

//public pages
import Home from "../pages/public/Home";
import About from "../pages/public/About";

//admin pages
import Dashboard from "../pages/admin/Dashboard";
import User from "../pages/admin/user";
import NotFound from "../pages/error/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      {/* public routes */}

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>

      {/* admin routes */}

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="users" element={<User />} />
      </Route>

      {/* fallback route */}

      <Route path="*" element={<NotFound />} />

      
    </Routes>
  );
};

export default AppRoutes;
