import React, { useState } from "react";
import SearchBar from "../../components/dashboard/client/SearchBar";
import ServicesGrid from "../../components/dashboard/client/ServicesGrid";
import RightSidebar from "../../components/dashboard/client/RightSidebar";

const LegalServicesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-7">
            <ServicesGrid searchQuery={searchQuery} />
          </div>
          <div className="col-span-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalServicesPage;
