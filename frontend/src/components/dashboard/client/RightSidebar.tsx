import React from 'react';

const RightSidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-4">Top services</h3>
        {/* Add top services content */}
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-4">Featured Lawyers</h3>
        {/* Add featured lawyers content */}
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h3 className="font-semibold mb-4">FAQ / SUPPORT</h3>
        {/* Add FAQ content */}
      </div>
    </div>
  );
};

export default RightSidebar;
