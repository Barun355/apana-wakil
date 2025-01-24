import { useState } from 'react';
import { Clock, CreditCard, Star, Upload, MapPin, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TimeSlot {
  value: string;
  label: string;
}

const timeSlots: TimeSlot[] = [
  { value: "09:00", label: "09:00 AM" },
  { value: "10:00", label: "10:00 AM" },
  { value: "11:00", label: "11:00 AM" },
  { value: "14:00", label: "02:00 PM" },
  { value: "15:00", label: "03:00 PM" }
];

function BookAppointmentPage() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");


  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-[#f8f9fa] p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Form section remains unchanged */}
        <div className="lg:col-span-2">
          {/* Previous form code remains exactly the same */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800">Appointment Form</h2>
              <p className="text-gray-600 mt-1">Schedule a consultation with our legal experts</p>
            </div>
            
            <div className="p-6 space-y-6">
              {/* All form elements remain exactly the same */}
              {/* Advocate Selection */}
              <div className="space-y-2">
                <label htmlFor="advocate" className="block text-sm font-medium text-gray-700">
                  Select Advocate
                </label>
                <select
                  id="advocate"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                >
                  <option value="">Select an advocate</option>
                  {/* <option value="adv-rohit">Adv. Rohit</option> */}
                  <option value="adv-jason">Adv. Jason</option>
                </select>
              </div>

              {/* Client Info */}
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="clientName" className="block text-sm font-medium text-gray-700">
                    Client Name
                  </label>
                  <input
                    type="text"
                    id="clientName"
                    placeholder="Enter your full name"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Date & Time */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Appointment Date & Time
                </label>
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot.value} value={slot.value}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Case Title */}
              <div className="space-y-2">
                <label htmlFor="caseTitle" className="block text-sm font-medium text-gray-700">
                  Case Title
                </label>
                <input
                  type="text"
                  id="caseTitle"
                  placeholder="Enter case title"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Case Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Please provide details about your case"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Upload Documents */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Upload Documents
                </label>
                <div className="mt-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-600">
                    Drag and drop your files here, or click to browse
                  </p>
                  <input type="file" className="hidden" />
                </div>
              </div>

              {/* Payment */}
              <div className="space-y-2">
                <label htmlFor="payment" className="block text-sm font-medium text-gray-700">
                  Payment Details
                </label>
                <div className="flex items-center space-x-2 border border-gray-300 rounded-lg p-4">
                  <CreditCard className="h-5 w-5 text-gray-500" />
                  <span className="text-sm text-gray-600">Secure payment gateway</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#1a237e] text-white py-2 px-4 rounded-md hover:bg-[#1a237e]/90 focus:outline-none focus:ring-2 focus:ring-[#1a237e] focus:ring-offset-2 transition-colors"
              >
                Submit Appointment Request
              </button>
            </div>
          </div>
        </div>

        {/* Modernized Lawyer Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-br from-[#ffd700] to-[#ffc400] rounded-xl shadow-lg overflow-hidden">
            <div className="relative">
              <div className="absolute inset-0 bg-black/10"></div>
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=200"
                alt="Background"
                className="w-full h-32 object-cover"
              />
              <div className="absolute -bottom-16 inset-x-0 flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200&h=200"
                  alt="Adv. Jason"
                  className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
                />
              </div>
            </div>
            
            <div className="pt-20 p-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">Adv. Jason</h3>
                <div className="flex items-center justify-center gap-2 mt-2 text-gray-800">
                  <Briefcase className="h-4 w-4" />
                  <span className="font-medium">Corporate Lawyer</span>
                </div>
                <div className="flex items-center justify-center gap-2 mt-1 text-gray-700">
                  <MapPin className="h-4 w-4" />
                  <span>Delhi</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3">
                  <Clock className="h-5 w-5 mx-auto mb-1 text-gray-700" />
                  <span className="block text-sm font-medium text-gray-900">5 Years</span>
                  <span className="text-xs text-gray-600">Experience</span>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3">
                  <div className="flex items-center justify-center mb-1">
                    <Star className="h-5 w-5 text-amber-500 fill-current" />
                  </div>
                  <span className="block text-sm font-medium text-gray-900">4.9/5.0</span>
                  <span className="text-xs text-gray-600">Rating</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center">
                  <span className="text-sm text-gray-600">Consultation Fee</span>
                  <p className="text-xl font-bold text-gray-900">₹5,000</p>
                </div>
              </div>

              <button className="mt-6 w-full bg-gray-900 text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2" onClick={() => navigate('/client/dashboard/lawyer-profile')}>
                View Full Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookAppointmentPage;