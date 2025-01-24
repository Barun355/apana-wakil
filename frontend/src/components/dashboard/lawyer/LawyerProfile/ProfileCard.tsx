import React from 'react';

interface ProfileCardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  editable?: boolean;
  onEdit?: () => void
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, children, icon, editable, onEdit }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all hover:shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          {icon}
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        </div>
        {editable && (
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium" onClick={onEdit}>
            Edit
          </button>
        )}
      </div>
      {children}
    </div>
  );
};

export default ProfileCard;