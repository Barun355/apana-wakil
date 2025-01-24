import React from 'react';

const NewClientRequestsTable: React.FC = () => {
    const requests = [
        { id: 1, client: 'Steve', title: 'Domestic', date: '22 May 9:30' },
        { id: 2, client: 'Nathan', title: 'Property Dispute', date: '22 May 10:30' },
        { id: 3, client: 'Jason', title: 'Divorce', date: '22 May 11:00' },
        { id: 4, client: 'Phillips', title: 'Domestic', date: '22 May 12:00' },
    ];

    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">New Client Requests</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Case ID</th>
                        <th className="border px-4 py-2">Client Name</th>
                        <th className="border px-4 py-2">Case Title</th>
                        <th className="border px-4 py-2">Submitted Date</th>
                    </tr>
                </thead>
                <tbody>
                    {requests.map((request) => (
                        <tr key={request.id} className="hover:bg-gray-100">
                            <td className="border px-4 py-2">{request.id}</td>
                            <td className="border px-4 py-2">{request.client}</td>
                            <td className="border px-4 py-2">{request.title}</td>
                            <td className="border px-4 py-2">{request.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NewClientRequestsTable;
