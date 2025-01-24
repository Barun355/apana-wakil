import { Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LawyerCardProps {
  lawyer: {
    id: string;
    name: string;
    specialization: string;
    location: string;
    experience: string;
    fees: number;
    rating: number;
    reviews: number;
    imageUrl: string;
  };
}

export const LawyerCard = ({ lawyer }: LawyerCardProps) => {

  const navigate = useNavigate()
  return (
    <div className="bg-amber-400 rounded-lg p-6 hover:bg-amber-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={lawyer.imageUrl}
          alt={lawyer.name}
          className="w-20 h-20 rounded-full object-cover border-2 border-blue-900"
        />
        <div>
          <h3 className="text-xl font-semibold text-blue-900">{lawyer.name}</h3>
          <p className="text-sm text-blue-800">{lawyer.specialization}</p>
          <p className="text-sm text-blue-800">{lawyer.location}</p>
        </div>
      </div>
      
      <div className="space-y-2 text-blue-900">
        <p className="text-sm">{lawyer.experience} experience</p>
        <div className="flex items-center">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${i < Math.floor(lawyer.rating) ? 'text-blue-900 fill-current' : 'text-gray-400'}`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm">
            {lawyer.rating} ({lawyer.reviews} reviews)
          </span>
        </div>
        <p className="text-sm font-medium">Fees: ₹{lawyer.fees.toLocaleString()} per consultation</p>
      </div>

      <div className="mt-4 flex space-x-3">
        <button className="flex-1 bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors duration-200" onClick={() => navigate('/client/dashboard/book-appointment')}>
          Book Appointment
        </button>
        <button className="flex-1 border border-blue-900 text-blue-900 py-2 rounded-lg hover:bg-blue-50 transition-colors duration-200" onClick={() => navigate('/client/dashboard/lawyer-profile')}>
          View Profile
        </button>
      </div>
    </div>
  );
};