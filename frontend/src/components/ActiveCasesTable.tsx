import React from 'react';

const ActiveCasesTable: React.FC = () => {
    const cases = [
        { id: 1, client: 'Steve', title: 'Domestic', status: 'Progress', date: '22 May 9:30' },
        { id: 2, client: 'Nathan', title: 'Property Dispute', status: 'Progress', date: '22 May 10:30' },
        { id: 3, client: 'Jason', title: 'Divorce', status: 'Progress', date: '22 May 11:00' },
        { id: 4, client: 'Phillips', title: 'Domestic', status: 'Pending', date: '22 May 12:00' },
    ];

    return (
        <div className="mt-6">
            <h2 className="text-xl font-bold mb-2">Your Active Cases</h2>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Case ID</th>
                        <th className="border px-4 py-2">Client Name</th>
                        <th className="border px-4 py-2">Case Title</th>
                        <th className="border px-4 py-2">Current Status</th>
                        <th className="border px-4 py-2">Next Hearing Date</th>
                    </tr>
                </thead>
                <tbody>
                    {cases.map((caseItem) => (
                        <tr key={caseItem.id} className="hover:bg-gray-100">
                            <td className="border px-4 py-2">{caseItem.id}</td>
                            <td className="border px-4 py-2">{caseItem.client}</td>
                            <td className="border px-4 py-2">{caseItem.title}</td>
                            <td className="border px-4 py-2">{caseItem.status}</td>
                            <td className="border px-4 py-2">{caseItem.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ActiveCasesTable;
