import React from 'react';

const EarningsOverview: React.FC = () => {
    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Earnings at a Glance</h2>
            <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                <p>RS 20,000 Total earnings</p>
                <p>RS 15,000 Payments Pending</p>
                <p>RS 10,000 Transactions Completed</p>
            </div>
        </div>
    );
};

export default EarningsOverview;
