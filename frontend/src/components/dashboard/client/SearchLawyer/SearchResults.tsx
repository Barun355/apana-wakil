import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { LawyerCard } from './LawyerCard';

const lawyers = [
  {
    id: '1',
    name: 'Adv. Jason',
    specialization: 'Corporate Law',
    location: 'Delhi High Court',
    experience: '5 years',
    fees: 5000,
    rating: 4.9,
    reviews: 120,
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '2',
    name: 'Adv. Sarah',
    specialization: 'Family Law',
    location: 'Mumbai High Court',
    experience: '8 years',
    fees: 6000,
    rating: 4.8,
    reviews: 95,
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '3',
    name: 'Adv. Michael',
    specialization: 'Criminal Law',
    location: 'Bangalore High Court',
    experience: '12 years',
    fees: 8000,
    rating: 4.9,
    reviews: 150,
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  },
  // Add more lawyers as needed
];

interface SearchResultsProps {
  filters: {
    keyword?: string;
    location?: string;
    rating?: number;
  };
}

export const SearchResults = ({ filters }: SearchResultsProps) => {
  const [sortBy, setSortBy] = useState('rating');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Apply filters and sorting
  let filteredLawyers = [...lawyers];
  if (filters.keyword) {
    filteredLawyers = filteredLawyers.filter(lawyer =>
      lawyer.name.toLowerCase().includes(filters.keyword?.toLowerCase() || '') ||
      lawyer.specialization.toLowerCase().includes(filters.keyword?.toLowerCase() || '')
    );
  }
  if (filters.location) {
    filteredLawyers = filteredLawyers.filter(lawyer =>
      filters.location && lawyer.location.includes(filters.location)
    );
  }
  if (filters.rating) {
    filteredLawyers = filteredLawyers.filter(lawyer =>
      lawyer.rating >= (filters.rating ?? 0)
    );
  }

  // Sort results
  filteredLawyers.sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'experience':
        return parseInt(b.experience) - parseInt(a.experience);
      case 'fees':
        return a.fees - b.fees;
      default:
        return 0;
    }
  });

  // Pagination
  const totalPages = Math.ceil(filteredLawyers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedLawyers = filteredLawyers.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          {filteredLawyers.length} lawyers found
        </p>
        <select
          className="rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="rating">Sort by Rating</option>
          <option value="experience">Sort by Experience</option>
          <option value="fees">Sort by Fees</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {paginatedLawyers.map((lawyer) => (
          <LawyerCard key={lawyer.id} lawyer={lawyer} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center space-x-2">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`w-8 h-8 rounded-lg ${
                currentPage === i + 1
                  ? 'bg-blue-900 text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {i + 1}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </div>
  );
};