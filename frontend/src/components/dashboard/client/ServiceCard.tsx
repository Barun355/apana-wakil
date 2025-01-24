import React from 'react';
import { Star } from 'lucide-react';
import { Service } from '../../../lib/types';
import { useNavigate } from 'react-router-dom';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {

  const navigate = useNavigate()

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <span>#{service.serviceTag}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < service.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
              />
            ))}
          </div>
        </div>
        <h3 className="font-semibold mb-1">{service.title}</h3>
        <p className="text-sm text-gray-600 mb-2">Time({service.time})</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-lg font-bold">₹{service.price}</span>
          <div className="space-x-2">
            <button className="text-sm text-blue-600 hover:underline">View more</button>
            <button className="bg-yellow-400 text-white px-4 py-1 rounded-lg hover:bg-yellow-500" onClick={() => navigate('/client/dashboard/payments')}>
              Buy Service
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
