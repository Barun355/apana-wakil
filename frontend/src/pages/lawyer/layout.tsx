// import { useState } from "react";
import { Outlet } from "react-router-dom";
import { LawyerHeader } from "../../components/dashboard/lawyer/Header";
import Sidebar from "../../components/dashboard/lawyer/Sidebar";

export default function Layout() {
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-gray-50 flex flex-col min-h-screen overflow-hidden">
      {/* Main Content */}
      <LawyerHeader />
      <div className="flex overflow-hidden h-screen">
        <Sidebar />
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
