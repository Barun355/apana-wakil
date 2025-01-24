import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Lawyer {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  fees: number;
  rating: number;
  imageUrl: string;
}

const lawyers: Lawyer[] = [
  {
    id: '1',
    name: 'Adv. Jason',
    specialization: 'Corporate Lawyer',
    experience: 5,
    fees: 5000,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '2',
    name: 'Adv. Jhon',
    specialization: 'Corporate Lawyer',
    experience: 5,
    fees: 5000,
    rating: 4.8,
    imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: '3',
    name: 'Adv. Brown',
    specialization: 'Corporate Lawyer',
    experience: 5,
    fees: 5000,
    rating: 4.9,
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80'
  }
];

export const RecommendedLawyers = () => {
  const navigate = useNavigate()
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {lawyers.map((lawyer) => (
        <div key={lawyer.id} className="bg-amber-400 rounded-lg p-6 hover:bg-amber-300 transition-all duration-200">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={lawyer.imageUrl}
              alt={lawyer.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-lg font-semibold text-blue-900">{lawyer.name}</h3>
              <p className="text-sm text-blue-800">{lawyer.specialization}</p>
            </div>
          </div>
          
          <div className="space-y-2 text-blue-900">
            <p className="text-sm">{lawyer.experience} years experience</p>
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-current text-blue-900" />
              <span className="ml-1 text-sm">{lawyer.rating}</span>
            </div>
            <p className="text-sm">Fees: ₹ {lawyer.fees.toLocaleString()}</p>
          </div>

          <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200" onClick={() => navigate('/client/dashboard/lawyer-profile')}>
            View Profile
          </button>
        </div>
      ))}
    </div>
  );
};