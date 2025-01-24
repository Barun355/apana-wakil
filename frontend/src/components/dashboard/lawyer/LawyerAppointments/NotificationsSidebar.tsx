import { Bell, Check } from 'lucide-react';

export const NotificationsSidebar = () => {
  const notifications = [
    {
      id: '1',
      title: 'New Appointment Request',
      message: 'John Smith requested an appointment for tomorrow at 10:30 AM',
      time: '5 minutes ago',
      isRead: false
    },
    {
      id: '2',
      title: 'Service Request Update',
      message: 'Contract review for Tech Corp Ltd. is pending approval',
      time: '1 hour ago',
      isRead: false
    },
    {
      id: '3',
      title: 'Appointment Reminder',
      message: 'You have an appointment with Sarah Johnson in 2 hours',
      time: '2 hours ago',
      isRead: true
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Notifications</h3>
        <button className="text-sm text-blue-600 hover:text-blue-800">
          Mark all as read
        </button>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`p-4 rounded-lg ${
              notification.isRead ? 'bg-gray-50' : 'bg-blue-50'
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <Bell className={`w-5 h-5 mt-0.5 ${
                  notification.isRead ? 'text-gray-400' : 'text-blue-500'
                }`} />
                <div>
                  <h4 className="text-sm font-medium text-gray-900">
                    {notification.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-1">
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {notification.time}
                  </p>
                </div>
              </div>
              {!notification.isRead && (
                <button className="text-blue-600 hover:text-blue-800">
                  <Check size={16} />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};