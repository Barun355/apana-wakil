import React, { useState } from 'react';
import { Calendar, Clock, Upload, CreditCard } from 'lucide-react';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    lawyer: 'Adv. Rohit',
    clientName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    caseTitle: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Appointment Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="bg-white p-4 rounded-md">
          <input
            type="text"
            name="lawyer"
            value={formData.lawyer}
            readOnly
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="bg-white p-4 rounded-md">
          <input
            type="text"
            name="clientName"
            placeholder="Client Name"
            value={formData.clientName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="bg-white p-4 rounded-md">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="bg-white p-4 rounded-md">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="bg-white p-4 rounded-md flex items-center">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <Calendar className="ml-2 text-gray-400" />
        </div>

        <div className="bg-white p-4 rounded-md flex items-center">
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
          <Clock className="ml-2 text-gray-400" />
        </div>

        <div className="bg-white p-4 rounded-md">
          <input
            type="text"
            name="caseTitle"
            placeholder="Case Title"
            value={formData.caseTitle}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="bg-white p-4 rounded-md">
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="bg-white p-4 rounded-md flex items-center justify-between">
          <span className="text-gray-600">Upload Documents</span>
          <Upload className="text-gray-400" />
        </div>

        <div className="bg-white p-4 rounded-md flex items-center justify-between">
          <span className="text-gray-600">Payment</span>
          <CreditCard className="text-gray-400" />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}