import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

export const CaseTimeline = () => {
  const timelineSteps = [
    { 
      title: 'Case Registered',
      date: '2024-01-15',
      status: 'completed',
      description: 'Case successfully registered in the system'
    },
    {
      title: 'Initial Hearing',
      date: '2024-02-01',
      status: 'completed',
      description: 'First hearing completed with preliminary arguments'
    },
    {
      title: 'Evidence Submission',
      date: '2024-02-15',
      status: 'current',
      description: 'All relevant documents and evidence to be submitted'
    },
    {
      title: 'Final Hearing',
      date: '2024-03-15',
      status: 'pending',
      description: 'Scheduled for final arguments and judgment'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'current':
        return <Clock className="w-6 h-6 text-amber-500" />;
      default:
        return <AlertCircle className="w-6 h-6 text-gray-300" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">Case Timeline</h3>
      
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200" />

        {/* Timeline Steps */}
        <div className="space-y-8">
          {timelineSteps.map((step, index) => (
            <div key={index} className="relative flex items-start">
              <div className="absolute left-0 w-12 flex items-center justify-center">
                {getStatusIcon(step.status)}
              </div>
              <div className="ml-16">
                <div className="flex items-center">
                  <h4 className="text-sm font-medium text-gray-900">{step.title}</h4>
                  <span className="ml-2 text-xs text-gray-500">{step.date}</span>
                </div>
                <p className="mt-1 text-sm text-gray-500">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};