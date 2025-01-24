import React from 'react';

const Header: React.FC = () => {
    return (
        <div className="bg-blue-600 text-white p-4 flex justify-between items-center w-full">
            <div className="text-lg font-bold">LegalConnect</div>
            <div className="flex items-center">
                <nav className="space-x-4">
                    <a href="/" className="hover:underline">Home</a>
                    <a href="/services" className="hover:underline">Services</a>
                    <a href="/profile" className="hover:underline">Profile Settings</a>
                </nav>
                <div className="ml-4">🔔</div>
                <div className="ml-4">👤</div>
            </div>
        </div>
    );
};

export default Header;
