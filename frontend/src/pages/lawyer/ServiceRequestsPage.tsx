import { useState } from 'react';
import { Calendar, AlertCircle, Filter } from 'lucide-react';

const MainSection = () => {
  const [filterStatus, setFilterStatus] = useState('all');

  const serviceRequests = [
    {
      id: 1,
      client: 'Jane Smith',
      type: 'Contract Review',
      deadline: '2024-03-20',
      priority: 'high',
      status: 'pending',
      description: 'Review of employment contract',
      attachments: 2,
      comments: 3
    },
    {
      id: 2,
      client: 'John Doe',
      type: 'Legal Consultation',
      deadline: '2024-03-25',
      priority: 'medium',
      status: 'in-progress',
      description: 'Initial consultation for business formation',
      attachments: 1,
      comments: 5
    },
    {
      id: 3,
      client: 'Sarah Wilson',
      type: 'Document Preparation',
      deadline: '2024-03-22',
      priority: 'high',
      status: 'pending',
      description: 'Prepare partnership agreement',
      attachments: 4,
      comments: 2
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-500';
      case 'medium': return 'text-orange-500';
      case 'low': return 'text-green-500';
      default: return 'text-gray-500';
    }
  };

  const getStatusBadge = (status: string) => {
    const styles: any = {
      'pending': 'bg-yellow-100 text-yellow-800',
      'in-progress': 'bg-blue-100 text-blue-800',
      'completed': 'bg-green-100 text-green-800'
    };
    return `px-2 py-1 rounded-full text-xs font-medium ${styles[status] || ''}`;
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Service Requests</h2>
          <p className="text-sm text-gray-500">Manage your client service requests</p>
        </div>
        {/* <button className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors">
          New Request
        </button> */}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex items-center gap-2 text-sm">
          <Filter size={16} className="text-gray-400" />
          <span className="text-gray-600">Filter by:</span>
        </div>
        {['all', 'pending', 'in-progress', 'completed'].map((status) => (
          <button
            key={status}
            onClick={() => setFilterStatus(status)}
            className={`px-3 py-1 rounded-full text-sm ${
              filterStatus === status
                ? 'bg-blue-900 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Requests List */}
      <div className="bg-white rounded-xl shadow-sm">
        {serviceRequests.map((request) => (
          <div
            key={request.id}
            className="p-6 border-b border-gray-100 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-medium">
                  {request.client.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{request.client}</h3>
                  <p className="text-sm text-gray-500">{request.type}</p>
                </div>
              </div>
              <span className={getStatusBadge(request.status)}>
                {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4">{request.description}</p>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar size={16} />
                  <span>Due {request.deadline}</span>
                </div>
                <div className={`flex items-center gap-2 text-sm ${getPriorityColor(request.priority)}`}>
                  <AlertCircle size={16} />
                  <span>{request.priority.charAt(0).toUpperCase() + request.priority.slice(1)} Priority</span>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 text-sm text-gray-600 hover:text-blue-900 transition-colors">
                  View Details
                </button>
                <button className="px-4 py-2 bg-blue-900 text-white text-sm rounded-lg hover:bg-blue-800 transition-colors">
                  Start Working
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSection;