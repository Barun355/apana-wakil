import { Bell, Upload, Calendar } from "lucide-react";
import { Button } from "../../components/ui/button";
import { CaseOverview } from "../../components/dashboard/client/ClientDashboard/CaseOverview";
import { AppointmentList } from "../../components/dashboard/client/ClientDashboard/AppointmentList";
import { RecommendedLawyers } from "../../components/dashboard/client/ClientDashboard/RecommendedLawyers";
import { useNavigate } from "react-router-dom";
import { globalState } from "../../store/store";

export const ClientDashboard = () => {

  const navigate = useNavigate()

  const { user } = globalState()

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto space-y-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            Welcome back, <span>{user?.firstName}</span> <span>{user?.lastName}</span>
          </h1>

          <div className="flex flex-wrap gap-4 mb-8">
            <Button onClick={() => navigate('/client/dashboard/search')}>Find a Lawyer</Button>
            <Button onClick={() => navigate('/client/dashboard/book-appointment')} variant="secondary">Book Appointment</Button>
            <Button onClick={() => navigate('/client/dashboard/services')} variant="secondary">Request Legal Service</Button>
          </div>
        </div>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Your Cases at a Glance
          </h2>
          <CaseOverview />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Your Next Steps
          </h2>
          <AppointmentList />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recent Updates
          </h2>
          <div className="bg-amber-400 rounded-lg p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Bell className="text-blue-900" size={24} />
              <span className="text-blue-900">New messages from lawyers</span>
            </div>
            <div className="flex items-center space-x-3">
              <Upload className="text-blue-900" size={24} />
              <span className="text-blue-900">Updates on case progress</span>
            </div>
            <div className="flex items-center space-x-3 justify-between">
              <div className="flex items-center space-x-3">
                <Bell className="text-blue-900" size={24} />
                <span className="text-blue-900">
                  Alerts for next hearing dates
                </span>
              </div>
              <button className="text-sm text-blue-900 hover:text-blue-800">
                View All Notifications
              </button>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Recommended Lawyers for You
          </h2>
          <RecommendedLawyers />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Your Schedule
          </h2>
          <div className="bg-amber-400 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-3">
                <Calendar className="text-blue-900" size={24} />
                <span className="text-blue-900 font-medium">
                  Monthly calendar view
                </span>
              </div>
              <button className="text-sm text-blue-900 hover:text-blue-800">
                View All
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-blue-900">22 May 9:30 am</p>
              <p className="text-blue-900">22 May 10:30 am</p>
              <p className="text-blue-900">22 May 11:00 am</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Upload Case Documents
          </h2>
          <div className="bg-amber-400 rounded-lg p-6">
            <div className="flex items-center justify-center h-32 border-2 border-blue-900 border-dashed rounded-lg">
              <div className="text-center">
                <Upload className="mx-auto text-blue-900" size={24} />
                <p className="mt-2 text-sm text-blue-900">
                  Drag and drop files here or click to upload
                </p>
              </div>
            </div>
            <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200">
              Upload
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};
