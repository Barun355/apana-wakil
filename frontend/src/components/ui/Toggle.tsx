import { FC } from 'react';

interface ToggleProps {
  options: [string, string];
  selected: string;
  onChange: (value: string) => void;
}

export const Toggle: FC<ToggleProps> = ({ options, selected, onChange }) => {

  console.log(selected)
  return (
    <div className="bg-gray-100 p-1 rounded-lg inline-flex">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option.toUpperCase())}
          className={`
            px-6 py-2 rounded-md text-sm font-medium transition-all duration-200
            ${selected.toLowerCase() === option.toLowerCase() 
              ? 'bg-white text-blue-900 shadow-sm' 
              : 'text-gray-600 hover:text-gray-900'
            }
          `}
        >
          {option}
        </button>
      ))}
    </div>
  );
};