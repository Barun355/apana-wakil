import React from 'react';

const StatsCards: React.FC = () => {
    return (
        <div className="grid grid-cols-4 gap-4">
            <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl">78</h2>
                <p>Total Cases</p>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl">RS 20,000</h2>
                <p>Total Earnings</p>
            </div>
            <div className="bg-red-500 text-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl">15</h2>
                <p>Pending Requests</p>
            </div>
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl">10</h2>
                <p>Upcoming Hearings</p>
            </div>
        </div>
    );
};

export default StatsCards;
