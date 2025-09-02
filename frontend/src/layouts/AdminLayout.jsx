import React from "react";
import { Outlet, Link } from "react-router-dom";

import Sidebar from "../components/layout/admin/Sidebar";

import Dashboard from "../pages/admin/Dashboard";
import Header from "../components/layout/admin/Header";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      {/* -------------- side bar -------------- */}

      <aside className="w-64  bg-yellow-300 overflow-y-auto ">
        <Sidebar />
      </aside>

      {/* -------------- main contet area -------------- */}

      <div className="flex flex-col flex-1 ">
        <header className="h-16 bg-neutral-300  flex items-center px-4">
          <Header />
        </header>

        <main className="#flex-1 h-full bg-cyan-300 overflow-auto">
          <Outlet />
        </main>
      </div>

    </div>
  );
};

export default AdminLayout;
