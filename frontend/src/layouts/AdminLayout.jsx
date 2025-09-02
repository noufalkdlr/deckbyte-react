import React from "react";
import { Outlet, Link } from "react-router-dom";

import Sidebar from "../components/layout/admin/Sidebar";

import Dashboard from "../pages/admin/Dashboard";
import Header from "../components/layout/admin/Header";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      {/* -------------- side bar -------------- */}

      <aside className="hidden md:block w-[280px] bg-[#0a121a]">
        <Sidebar />
      </aside>

      {/* -------------- main contet area -------------- */}

      <div className="flex flex-col flex-1 ">
        <header className="h-16 bg-white">
          <Header />
        </header>

        <main className="flex-1 h-full bg-[#f9fafb] overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
