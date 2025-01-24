import { useState } from 'react';
import { Search } from 'lucide-react';

interface Case {
  id: string;
  title: string;
  clientName: string;
  status: string;
  lastUpdated: string;
  nextHearing: string;
}

interface CaseListProps {
  onCaseSelect: (id: string) => void;
  selectedCase: string | null;
}

export const CaseList = ({ onCaseSelect, selectedCase }: CaseListProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  const cases: Case[] = [
    {
      id: '1',
      title: 'Property Dispute Resolution',
      clientName: 'John Smith',
      status: 'Active',
      lastUpdated: '2024-02-15',
      nextHearing: '2024-03-01'
    },
    {
      id: '2',
      title: 'Corporate Contract Review',
      clientName: 'Tech Corp Ltd.',
      status: 'Pending',
      lastUpdated: '2024-02-14',
      nextHearing: '2024-03-05'
    },
    {
      id: '3',
      title: 'Family Law Matter',
      clientName: 'Sarah Johnson',
      status: 'Closed',
      lastUpdated: '2024-02-10',
      nextHearing: '-'
    }
  ];

  const filteredCases = cases.filter(c => 
    (statusFilter === 'all' || c.status.toLowerCase() === statusFilter) &&
    (c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     c.clientName.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Filters */}
      <div className="p-4 border-b border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search cases..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>

          <div className="flex space-x-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="closed">Closed</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="date">Sort by Date</option>
              <option value="name">Sort by Name</option>
              <option value="status">Sort by Status</option>
            </select>
          </div>
        </div>
      </div>

      {/* Case List */}
      <div className="divide-y divide-gray-200">
        {filteredCases.map((case_) => (
          <div
            key={case_.id}
            onClick={() => onCaseSelect(case_.id)}
            className={`p-4 hover:bg-gray-50 cursor-pointer transition-colors duration-200 ${
              selectedCase === case_.id ? 'bg-blue-50' : ''
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-medium text-gray-900">{case_.title}</h3>
                <p className="text-sm text-gray-500">Client: {case_.clientName}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                case_.status === 'Active' ? 'bg-green-100 text-green-800' :
                case_.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {case_.status}
              </span>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <span>Last updated: {case_.lastUpdated}</span>
              <span className="mx-2">•</span>
              <span>Next hearing: {case_.nextHearing}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};