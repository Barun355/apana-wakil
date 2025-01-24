import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const HearingCalendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const padding = Array.from({ length: firstDayOfMonth }, (_, i) => null);

  const hearings = {
    '2024-03-01': [
      { time: '10:30 AM', client: 'John Smith', type: 'Property Dispute' },
      { time: '2:30 PM', client: 'Tech Corp Ltd.', type: 'Contract Review' }
    ],
    '2024-03-15': [
      { time: '11:00 AM', client: 'Sarah Johnson', type: 'Family Matter' }
    ]
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  };

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={prevMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="bg-gray-50 p-2 text-center text-sm font-medium text-gray-600">
            {day}
          </div>
        ))}
        
        {[...padding, ...days].map((day, index) => {
          const date = day ? new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day) : null;
          const dateString = date?.toISOString().split('T')[0];
          const hasHearings = dateString && hearings[dateString];

          return (
            <div
              key={index}
              className={`bg-white p-2 min-h-[100px] ${
                hasHearings ? 'bg-blue-50' : ''
              }`}
            >
              {day && (
                <>
                  <div className="text-right text-sm text-gray-600">{day}</div>
                  {hasHearings && (
                    <div className="mt-1 space-y-1">
                      {hearings[dateString].map((hearing, i) => (
                        <div
                          key={i}
                          className="text-xs p-1 bg-blue-100 text-blue-900 rounded"
                        >
                          {hearing.time} - {hearing.client}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};