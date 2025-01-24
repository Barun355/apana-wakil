import { useState } from 'react';
import { FileText, Calendar, MessageSquare, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../../ui/Tabs';

interface CaseDetailsProps {
  caseId: string;
}

export const CaseDetails = ({ caseId }: CaseDetailsProps) => {
  const [status, setStatus] = useState('active');
  console.log(caseId)

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Case Details</h3>
        <div className="mt-4">
          <label className="text-sm text-gray-600 mb-2 block">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="active">Active</option>
            <option value="pending">Pending</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      <Tabs defaultValue="overview">
        <TabsList className="grid grid-cols-4 gap-4 mb-6">
          <TabsTrigger value="overview" className="flex items-center space-x-2">
            <FileText size={16} />
            <span>Overview</span>
          </TabsTrigger>
          <TabsTrigger value="hearings" className="flex items-center space-x-2">
            <Calendar size={16} />
            <span>Hearings</span>
          </TabsTrigger>
          <TabsTrigger value="notes" className="flex items-center space-x-2">
            <MessageSquare size={16} />
            <span>Notes</span>
          </TabsTrigger>
          <TabsTrigger value="timeline" className="flex items-center space-x-2">
            <Clock size={16} />
            <span>Timeline</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Case Type</label>
              <p className="text-sm text-gray-900">Property Dispute</p>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Client</label>
              <p className="text-sm text-gray-900">John Smith</p>
            </div>
            <div>
              <label className="text-sm text-gray-600 mb-1 block">Filed Date</label>
              <p className="text-sm text-gray-900">January 15, 2024</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="hearings" className="space-y-4">
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-lg">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Next Hearing</h4>
                  <p className="text-sm text-gray-500">March 1, 2024 at 10:30 AM</p>
                  <p className="text-sm text-gray-500">Delhi High Court, Room 302</p>
                </div>
                <button className="text-blue-900 hover:text-blue-700 text-sm">
                  Add to Calendar
                </button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notes" className="space-y-4">
          <textarea
            placeholder="Add a note..."
            className="w-full h-32 p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button className="w-full bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200">
            Save Note
          </button>
        </TabsContent>

        <TabsContent value="timeline" className="space-y-4">
          <div className="space-y-4">
            {/* Timeline items */}
            <div className="flex space-x-4">
              <div className="w-2 h-2 mt-2 rounded-full bg-blue-900" />
              <div>
                <p className="text-sm font-medium text-gray-900">Case Filed</p>
                <p className="text-sm text-gray-500">January 15, 2024</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};