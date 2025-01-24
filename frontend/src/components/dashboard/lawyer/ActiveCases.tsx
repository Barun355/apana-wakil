import { Briefcase, CircleDot } from 'lucide-react';
import { ClientRequest } from '../../../lib/types';

interface ActiveCasesProps {
  cases: ClientRequest[];
}

export function ActiveCases({ cases }: ActiveCasesProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-blue-600" />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Your Active Cases</h2>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">View All</button>
        </div>
        
        <div className="overflow-x-auto -mx-4 sm:-mx-6">
          <div className="inline-block min-w-full align-middle">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Case ID</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Client Name</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Case Title</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Status</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Next Hearing</th>
                </tr>
              </thead>
              <tbody>
                {cases.map((request) => (
                  <tr 
                    key={request.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4 text-sm text-gray-500">#{request.id}</td>
                    <td className="py-3 px-4 text-sm text-blue-600 font-medium">{request.clientName}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{request.caseTitle}</td>
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        request.status === 'Progress' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        <CircleDot className="w-3 h-3" />
                        {request.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-500">{request.nextHearingDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}