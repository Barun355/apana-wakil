import { Briefcase, User, Users, Calendar } from 'lucide-react';

interface CaseData {
  id: string;
  title: string;
  lawyer: string;
  opponent: string;
  status: string;
}

interface CaseOverviewCardProps {
  caseData: CaseData;
}

export const CaseOverviewCard = ({ caseData }: CaseOverviewCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">{caseData.title}</h2>
          <p className="text-sm text-gray-500 mt-1">Case ID: {caseData.id}</p>
        </div>
        <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium">
          {caseData.status}
        </span>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Briefcase className="w-5 h-5 text-blue-900" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Lawyer</p>
            <p className="text-sm font-medium text-gray-900">{caseData.lawyer}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-50 rounded-lg">
            <Users className="w-5 h-5 text-blue-900" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Opponent</p>
            <p className="text-sm font-medium text-gray-900">{caseData.opponent}</p>
          </div>
        </div>
      </div>
    </div>
  );
};