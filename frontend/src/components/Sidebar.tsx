import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
    return (
        <div className="bg-gray-800 text-white w-64 h-full p-4">
            <h2 className="text-lg font-bold mb-4">LegalConnect</h2>
            <ul>
                <li><Link to="/" className="block py-2 hover:bg-gray-700 rounded">Dashboard</Link></li>
                <li><Link to="/cases" className="block py-2 hover:bg-gray-700 rounded">Cases</Link></li>
                <li><Link to="/earnings" className="block py-2 hover:bg-gray-700 rounded">Earnings</Link></li>
                <li><Link to="/client-requests" className="block py-2 hover:bg-gray-700 rounded">Client Requests</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
