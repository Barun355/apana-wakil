import { CaseNotes } from "../../components/dashboard/client/ClientCaseDetail/CaseNotes";
import { CaseOverviewCard } from "../../components/dashboard/client/ClientCaseDetail/CaseOverviewCard";
import { CaseTimeline } from "../../components/dashboard/client/ClientCaseDetail/CaseTimeline";
import { DocumentGrid } from "../../components/dashboard/client/ClientCaseDetail/DocumentGrid";
import { NextHearing } from "../../components/dashboard/client/ClientCaseDetail/NextHearing";

export const CaseDetails = () => {
  const caseData = {
    id: "CASE-2024-001",
    title: "Property Dispute Resolution",
    lawyer: "Adv. Jason Smith",
    opponent: "John Doe",
    status: "In Progress",
    nextHearing: {
      date: "2024-03-15",
      time: "10:30 AM",
      location: "Delhi High Court, Room 302",
      judge: "Hon. Justice Kumar",
    },
  };

  return (
    <main className="flex-1 container mx-auto px-4 py-8 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Case Details</h1>
        <button className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200">
          Print Details
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <CaseOverviewCard caseData={caseData} />
          <CaseTimeline />
          <CaseNotes />
        </div>

        <div className="space-y-8">
          <NextHearing hearing={caseData.nextHearing} />
          <DocumentGrid />
        </div>
      </div>
    </main>
  );
};
