import { Calendar, Clock, MapPin, User } from 'lucide-react';

interface HearingData {
  date: string;
  time: string;
  location: string;
  judge: string;
}

interface NextHearingProps {
  hearing: HearingData;
}

export const NextHearing = ({ hearing }: NextHearingProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Next Hearing</h3>
      
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Calendar className="w-5 h-5 text-blue-900" />
          <div>
            <p className="text-sm text-gray-500">Date</p>
            <p className="text-sm font-medium text-gray-900">{hearing.date}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <Clock className="w-5 h-5 text-blue-900" />
          <div>
            <p className="text-sm text-gray-500">Time</p>
            <p className="text-sm font-medium text-gray-900">{hearing.time}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <MapPin className="w-5 h-5 text-blue-900" />
          <div>
            <p className="text-sm text-gray-500">Location</p>
            <p className="text-sm font-medium text-gray-900">{hearing.location}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <User className="w-5 h-5 text-blue-900" />
          <div>
            <p className="text-sm text-gray-500">Judge</p>
            <p className="text-sm font-medium text-gray-900">{hearing.judge}</p>
          </div>
        </div>

        <button className="w-full mt-4 bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200">
          Add to Calendar
        </button>
      </div>
    </div>
  );
};