import React from 'react';
import DashboardHeader from '../../components/dashboard/lawyer/LawyerDashboard/DashboardHeader';
import StatsCards from '../../components/dashboard/lawyer/LawyerDashboard/StatsCards';
import ActiveCasesTable from '../../components/dashboard/lawyer/LawyerDashboard/ActiveCasesTable';
import EarningsOverview from '../../components/dashboard/lawyer/LawyerDashboard/EarningsOverview';
import NewClientRequestsTable from '../../components/dashboard/lawyer/LawyerDashboard/NewClientRequestsTable';

const Dashboard: React.FC = () => {
    return (
        <div className="flex">
            <div className="flex-1 flex-col p-6 gap-4">
                <DashboardHeader />
                <StatsCards />
                <ActiveCasesTable />
                <EarningsOverview />
                <NewClientRequestsTable />
            </div>
        </div>
    );
};

export default Dashboard;
