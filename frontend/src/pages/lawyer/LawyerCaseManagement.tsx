import { useState } from 'react';
import { HearingCalendar } from '../../components/dashboard/lawyer/LawyerCaseManagement/HearingCalendar';
import { CaseDetails } from '../../components/dashboard/lawyer/LawyerCaseManagement/CaseDetails';
import { CaseList } from '../../components/dashboard/lawyer/LawyerCaseManagement/CaseList';

export const LawyerCaseManagement = () => {
  const [selectedCase, setSelectedCase] = useState<string | null>('1');
  const [activeTab, setActiveTab] = useState('list'); // 'list' | 'calendar'

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">      
      <main className="flex-1 px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Case Management</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab('list')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                activeTab === 'list'
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Case List
            </button>
            <button
              onClick={() => setActiveTab('calendar')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                activeTab === 'calendar'
                  ? 'bg-blue-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              Hearing Calendar
            </button>
          </div>
        </div>

        <div className="animate-fade-in">
          {activeTab === 'list' ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <CaseList onCaseSelect={setSelectedCase} selectedCase={selectedCase} />
              </div>
              <div>
                {selectedCase && <CaseDetails caseId={selectedCase} />}
              </div>
            </div>
          ) : (
            <HearingCalendar />
          )}
        </div>
      </main>
    </div>
  );
};