import React from 'react';

const SidebarNav: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Lawyers</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Small Legal Services</h3>
          <ul className="space-y-2">
            {['Affidavit', 'Property Agreement', 'Certificates', 'Legal Opinion', 'Other Services'].map(item => (
              <li key={item} className="pl-4 py-1 hover:bg-navy-800 rounded cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-2">Cases Management</h3>
          <ul className="space-y-2">
            {['Active Cases', 'Ongoing Cases'].map(item => (
              <li key={item} className="pl-4 py-1 hover:bg-navy-800 rounded cursor-pointer">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
