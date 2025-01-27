import { Header } from "../../components/dashboard/client/ClientDashboard/Header";
import { Sidebar } from "../../components/dashboard/client/ClientDashboard/Sidebar";
import { Outlet } from "react-router-dom";
import { globalState } from "../../store/store";

export default function ClientDashboard() {

  const { user } = globalState()

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header userName={user?.firstName! + user?.lastName!} notificationCount={3} />
        <div className="flex overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
