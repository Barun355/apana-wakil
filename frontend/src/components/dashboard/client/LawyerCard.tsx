import { Star } from 'lucide-react';

interface LawyerCardProps {
  name: string;
  image: string;
  specialization: string;
  location: string;
  experience: string;
  fees: string;
  rating: number;
}

export default function LawyerCard({
  name,
  image,
  specialization,
  location,
  experience,
  fees,
  rating
}: LawyerCardProps) {
  return (
    <div className="bg-yellow-400 p-6 rounded-lg shadow-lg text-center w-full">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-gray-800 mb-1">{specialization}</p>
      <p className="text-gray-800 mb-2">{location}</p>
      <p className="text-gray-800 mb-1">{experience}</p>
      <p className="text-gray-800 mb-2">Fees : {fees}</p>
      <div className="flex items-center justify-center mb-4">
        <span className="text-xl font-bold mr-1">{rating}</span>
        <Star className="h-5 w-5 fill-current" />
      </div>
      <div className="space-y-2">
        {/* <button className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors">
          Book Appointment
        </button> */}
        <button className="w-full bg-white text-blue-900 py-2 px-4 rounded-md hover:bg-gray-100 transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
}