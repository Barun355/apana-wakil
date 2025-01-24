import { DollarSign } from 'lucide-react';

const earnings = [
  { label: 'Total earnings', amount: 'R$ 20,000' },
  { label: 'Payments Pending', amount: 'R$ 15,000' },
  { label: 'Transactions Completed', amount: 'R$ 10,000' },
];

export function EarningsGlance() {
  return (
    <div className="bg-white rounded-lg shadow-sm">
      <div className="p-4 sm:p-6">
        <div className="flex items-center gap-3 mb-6">
          <DollarSign className="w-6 h-6 text-blue-600" />
          <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Earnings at a Glance</h2>
        </div>
        
        <div className="space-y-6">
          {earnings.map((item, index) => (
            <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0">
              <span className="text-gray-600">{item.label}</span>
              <span className="text-base sm:text-lg font-semibold text-gray-900">{item.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}