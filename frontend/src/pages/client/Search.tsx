import { useState } from 'react';
import { FilterPanel } from '../../components/dashboard/client/SearchLawyer/FilterPanel';
import { SearchResults } from '../../components/dashboard/client/SearchLawyer/SearchResults';

export const LawyerSearch = () => {
  const [filters, setFilters] = useState({});

  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Header userName="Chris" notificationCount={3} /> */}
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">Find a Lawyer</h1>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-80 flex-shrink-0">
            <FilterPanel onFilterChange={setFilters} />
          </div>
          
          <div className="flex-1">
            <SearchResults filters={filters} />
          </div>
        </div>
      </div>
    </div>
  );
};