import { useState } from 'react';
import { Search, MapPin, Briefcase, Clock, DollarSign, Star, CheckCircle } from 'lucide-react';

interface FilterPanelProps {
  onFilterChange: (filters: {
    keyword: string;
    location: string;
    specialization: string[];
    experience: string;
    feeRange: number[];
    rating: number;
    availableNow: boolean;
  }) => void;
}

export const FilterPanel = ({ onFilterChange }: FilterPanelProps) => {
  const [filters, setFilters] = useState({
    keyword: '',
    location: '',
    specialization: [] as string[],
    experience: '',
    feeRange: [1000, 10000],
    rating: 0,
    availableNow: false
  });

  const handleFilterChange = (key: string, value: string | string[] | [number, number] | number | boolean) => {
    if (key === 'feeRange' && !Array.isArray(value)) {
      value = [1000, value as number];
    }
    const newFilters = { ...filters, [key]: key === 'feeRange' ? value as [number, number] : value };
    setFilters(newFilters);
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const locations = ['Delhi', 'Mumbai', 'Bangalore', 'Kolkata', 'Chennai'];
  const specializations = ['Corporate', 'Criminal', 'Civil', 'Family', 'Property'];
  const experienceRanges = ['0-3 years', '3-5 years', '5-10 years', '10+ years'];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm space-y-6 animate-fade-in">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Enter lawyer name or keyword"
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          value={filters.keyword}
          onChange={(e) => handleFilterChange('keyword', e.target.value)}
        />
      </div>

      <div className="space-y-4">
        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <MapPin size={18} className="mr-2" />
            Location
          </label>
          <select
            className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
          >
            <option value="">Select Location</option>
            {locations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Briefcase size={18} className="mr-2" />
            Specialization
          </label>
          <div className="space-y-2">
            {specializations.map((spec) => (
              <label key={spec} className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-900 focus:ring-blue-500"
                  checked={filters.specialization.includes(spec)}
                  onChange={(e) => {
                    const newSpecs = e.target.checked
                      ? [...filters.specialization, spec]
                      : filters.specialization.filter(s => s !== spec);
                    handleFilterChange('specialization', newSpecs);
                  }}
                />
                <span className="ml-2 text-sm text-gray-600">{spec}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Clock size={18} className="mr-2" />
            Experience
          </label>
          <select
            className="w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            value={filters.experience}
            onChange={(e) => handleFilterChange('experience', e.target.value)}
          >
            <option value="">Select Experience</option>
            {experienceRanges.map((range) => (
              <option key={range} value={range}>{range}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <DollarSign size={18} className="mr-2" />
            Fee Range
          </label>
          <div className="px-2">
            <input
              type="range"
              min="1000"
              max="10000"
              step="500"
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              value={filters.feeRange[1]}
              onChange={(e) => handleFilterChange('feeRange', [1000, parseInt(e.target.value)])}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>₹1,000</span>
              <span>₹{filters.feeRange[1].toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700 mb-2">
            <Star size={18} className="mr-2" />
            Minimum Rating
          </label>
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => handleFilterChange('rating', rating)}
                className={`p-1 rounded-full transition-colors duration-200 ${
                  filters.rating >= rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              >
                <Star size={20} fill={filters.rating >= rating ? 'currentColor' : 'none'} />
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="flex items-center text-sm font-medium text-gray-700">
            <input
              type="checkbox"
              className="rounded border-gray-300 text-blue-900 focus:ring-blue-500 mr-2"
              checked={filters.availableNow}
              onChange={(e) => handleFilterChange('availableNow', e.target.checked)}
            />
            <CheckCircle size={18} className="mr-2" />
            Available Now
          </label>
        </div>
      </div>
    </div>
  );
};