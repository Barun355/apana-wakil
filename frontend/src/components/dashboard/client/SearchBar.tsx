import React from 'react';
import { Filter } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex gap-4 mb-8">
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Search Our Services"
          className="w-full p-2 pl-4 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-yellow-400 text-white px-4 py-1 rounded-lg">
          Search
        </button>
      </div>
      <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
        <Filter size={20} />
        Filter
      </button>
    </div>
  );
};

export default SearchBar;
