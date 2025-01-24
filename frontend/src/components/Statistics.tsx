import React from 'react';

interface Stat {
  number: string;
  label: string;
}

const Statistics: React.FC = () => {
  const stats: Stat[] = [
    { number: '1.1M+', label: 'Lawyers in Our Network' },
    { number: '65M+', label: 'Annual Advisors' },
    { number: '17M+', label: 'Legal Solutions Awarded' }
  ];

  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Thousands Worldwide
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Discover the key metrics that highlight the reliability and excellence of our platform.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-lg p-8 text-center hover:bg-blue-100 transition-colors duration-300 transform hover:scale-105 shadow-lg"
            >
              <div className="text-4xl font-bold text-blue-600">{stat.number}</div>
              <div className="mt-2 text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Statistics;