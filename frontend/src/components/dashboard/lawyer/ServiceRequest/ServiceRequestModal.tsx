import { X, User, Calendar, FileText, Paperclip } from 'lucide-react';

interface ServiceRequestModalProps {
  requestId: string;
  onClose: () => void;
  onAction: (id: string, action: 'accept' | 'reject' | 'complete') => void;
}

export const ServiceRequestModal = ({
  requestId,
  onClose,
  onAction
}: ServiceRequestModalProps) => {
  // Mock service request data
  const request = {
    id: requestId,
    clientName: 'John Smith',
    email: 'john@example.com',
    phone: '+1 234 567 8900',
    serviceType: 'Contract Review',
    submissionDate: '2024-02-28',
    description: 'Need review of employment contract with detailed analysis of terms and conditions.',
    attachments: [
      { name: 'contract.pdf', size: '2.5 MB' },
      { name: 'terms.docx', size: '1.2 MB' }
    ],
    status: 'pending'
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-2xl mx-4 animate-fade-in">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Service Request Details</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Client Name</p>
                  <p className="text-sm font-medium text-gray-900">{request.clientName}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Submission Date</p>
                  <p className="text-sm font-medium text-gray-900">{request.submissionDate}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm text-gray-500">Service Type</p>
                  <p className="text-sm font-medium text-gray-900">{request.serviceType}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-sm font-medium text-gray-900">{request.email}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="text-sm font-medium text-gray-900">{request.phone}</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">Description</p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-900">{request.description}</p>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">Attachments</p>
            <div className="space-y-2">
              {request.attachments.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center space-x-3">
                    <Paperclip className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-900">{file.name}</span>
                    <span className="text-xs text-gray-500">({file.size})</span>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end space-x-4 p-6 border-t border-gray-200">
          {request.status === 'pending' && (
            <>
              <button
                onClick={() => onAction(requestId, 'reject')}
                className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 transition-colors duration-200"
              >
                Reject
              </button>
              <button
                onClick={() => onAction(requestId, 'accept')}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors duration-200"
              >
                Accept
              </button>
              <button
                onClick={() => onAction(requestId, 'complete')}
                className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors duration-200"
              >
                Mark as Complete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};