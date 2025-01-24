import React from 'react';

const DashboardHeader: React.FC = () => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold">Hello, Jason</h1>
            <p>Here’s an overview of your activities today.</p>
        </div>
    );
};

export default DashboardHeader;
