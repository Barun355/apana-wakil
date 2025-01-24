import React from 'react';

interface AvailabilityToggleProps {
  isAvailable: boolean;
  onToggle: () => void;
}

const AvailabilityToggle: React.FC<AvailabilityToggleProps> = ({ isAvailable, onToggle }) => {
  return (
    <div className="flex items-center space-x-3">
      <button
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          isAvailable ? 'bg-green-500' : 'bg-gray-300'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isAvailable ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <span className={`font-medium ${isAvailable ? 'text-green-500' : 'text-gray-500'}`}>
        {isAvailable ? 'Available' : 'Not Available'}
      </span>
    </div>
  );
};

export default AvailabilityToggle;