import React from 'react';
import { globalState } from '../../../../store/store';

const DashboardHeader: React.FC = () => {
    const { user } = globalState()
    
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold">Hello, {user?.firstName}</h1>
            <p>Here’s an overview of your activities today.</p>
        </div>
    );
};

export default DashboardHeader;
