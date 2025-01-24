import { Users } from 'lucide-react';
import { ClientRequest } from '../../../lib/types';

interface NewClientRequestsProps {
  requests: ClientRequest[];
}

export function NewClientRequests({ requests }: NewClientRequestsProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <Users className="w-6 h-6 text-blue-600" />
            <h2 className="text-lg sm:text-xl font-semibold text-gray-900">New Client Requests</h2>
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
                  <th className="text-left py-3 px-4 text-sm font-semibold text-gray-600">Submitted Date</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request) => (
                  <tr 
                    key={request.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="py-3 px-4 text-sm text-gray-500">#{request.id}</td>
                    <td className="py-3 px-4 text-sm text-blue-600 font-medium">{request.clientName}</td>
                    <td className="py-3 px-4 text-sm text-gray-900">{request.caseTitle}</td>
                    <td className="py-3 px-4 text-sm text-gray-500">{request.submittedDate}</td>
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