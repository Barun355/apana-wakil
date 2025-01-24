// Sidebar.tsx
import { useState } from 'react';
import { MapPin, Clock } from 'lucide-react';
import Slider from '../../ui/slider';

// Types
interface CategoryItem {
  title: string;
  examples: string[];
}

interface FilterState {
  priceRange: [number, number];
  deliveryTime: string;
  location: string;
}

const EnhancedSidebar = () => {
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [500, 5000],
    deliveryTime: '1-3',
    location: 'all',
  });

  const categories: CategoryItem[] = [
    {
      title: 'Affidavits',
      examples: ['Rental Affidavit', 'Birth Certificate Affidavit'],
    },
    {
      title: 'Documentation',
      examples: ['Property Agreement', 'Sale Deed'],
    },
    {
      title: 'Certifications',
      examples: ['Notarization', 'Power of Attorney'],
    },
    {
      title: 'Legal Opinions',
      examples: ['Property Disputes', 'Employment Contracts'],
    },
    {
      title: 'Other Services',
      examples: ['Will Drafting', 'Name Change'],
    },
  ];

  const deliveryTimeOptions = [
    { value: '1-3', label: '1-3 days' },
    { value: '3-7', label: '3-7 days' },
    { value: '7+', label: '7+ days' },
  ];

  return (
    <div className="bg-navy-900 text-white rounded-lg p-4 space-y-6">
      {/* Categories Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Categories</h2>
        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category.title} className="space-y-2">
              <h3 className="font-medium">{category.title}</h3>
              <ul className="space-y-1">
                {category.examples.map((example) => (
                  <li
                    key={example}
                    className="pl-4 py-1 text-sm text-gray-300 hover:text-white hover:bg-navy-800 rounded cursor-pointer"
                  >
                    {example}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Filters Section */}
      <div className="border-t border-navy-800 pt-6">
        <h2 className="text-xl font-semibold mb-4">Filters</h2>

        {/* Price Range Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Price Range</label>
          <div className="px-2">
            <Slider
              max={5000}
              min={500}
              step={100}
              className="text-yellow-400"
              onChange={(value: any) => setFilters({ ...filters, priceRange: value as [number, number] })}
            />
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span>₹{filters.priceRange[0]}</span>
            <span>₹{filters.priceRange[1]}</span>
          </div>
        </div>

        {/* Delivery Time Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            <Clock size={16} className="inline mr-2" />
            Delivery Time
          </label>
          <select
            value={filters.deliveryTime}
            onChange={(e) => setFilters({ ...filters, deliveryTime: e.target.value })}
            className="w-full bg-navy-800 rounded p-2 text-sm"
          >
            {deliveryTimeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Location Filter */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">
            <MapPin size={16} className="inline mr-2" />
            Location
          </label>
          <select
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            className="w-full bg-navy-800 rounded p-2 text-sm"
          >
            <option value="all">All Locations</option>
            <option value="delhi">Delhi NCR</option>
            <option value="mumbai">Mumbai</option>
            <option value="bangalore">Bangalore</option>
            <option value="hyderabad">Hyderabad</option>
          </select>
        </div>

        {/* Apply Filters Button */}
        <button className="w-full bg-yellow-400 text-navy-900 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default EnhancedSidebar;
