import React, { useState, useRef } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Award,
  Shield,
  Calendar,
  UserCircle,
  Check,
  X,
} from "lucide-react";
import AvailabilityToggle from "../../components/dashboard/lawyer/LawyerProfile/AvailabilityToggle";
import ProfileCard from "../../components/dashboard/lawyer/LawyerProfile/ProfileCard";
import { Button } from "@mui/material";
import { globalState } from "../../store/store";

interface PersonalInfo {
  email: string;
  phone: string;
  location: string;
}

interface ProfessionalInfo {
  specialization: string;
  barId: string;
  certifications: number;
}

const LawyerProfile = () => {
  const [isAvailable, setIsAvailable] = useState(true);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [showSave, setShowSave] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const { user } = globalState()

  const { reset } = globalState()

  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>({
    email: "chris.evans@legalconnect.com",
    phone: "+1 (555) 123-4567",
    location: "New York, NY",
  });

  const [professionalInfo, setProfessionalInfo] = useState<ProfessionalInfo>({
    specialization: "Family Law",
    barId: "NY123456",
    certifications: 3,
  });

  const [schedule, setSchedule] = useState({
    Mon: "9 AM - 5 PM",
    Tue: "9 AM - 5 PM",
    Wed: "9 AM - 5 PM",
    Thu: "9 AM - 5 PM",
    Fri: "9 AM - 5 PM",
    Sat: "9 AM - 5 PM",
    Sun: "9 AM - 5 PM",
  });

  const handleEditField = (field: string, value: string) => {
    if (field.includes("personal")) {
      const key = field.split(".")[1] as keyof PersonalInfo;
      setPersonalInfo((prev) => ({ ...prev, [key]: value }));
    } else if (field.includes("professional")) {
      const key = field.split(".")[1] as keyof ProfessionalInfo;
      setProfessionalInfo((prev) => ({ ...prev, [key]: value }));
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Here you would typically upload the file to a server
      alert(
        `Certificate "${file.name}" selected for upload. In a production environment, this would be uploaded to a server.`
      );
      setProfessionalInfo((prev) => ({
        ...prev,
        certifications: prev.certifications + 1,
      }));
    }
  };

  const handleScheduleEdit = (day: string) => {
    const newTime = prompt(
      'Enter new time (e.g., "9 AM - 5 PM"):',
      schedule[day as keyof typeof schedule]
    );
    if (newTime) {
      setSchedule((prev) => ({
        ...prev,
        [day]: newTime,
      }));
    }
  };

  const handleSaveChanges = () => {
    // Here you would typically save all changes to a server
    alert("Changes saved successfully!");
    setShowSave(false);
    setEditingField(null);
  };

  const renderEditableField = (label: string, value: string, field: string) => {
    const isEditing = editingField === field;

    return (
      <div className="flex items-center space-x-3">
        {label === "Email" && <Mail className="h-5 w-5 text-gray-400" />}
        {label === "Phone" && <Phone className="h-5 w-5 text-gray-400" />}
        {label === "Location" && <MapPin className="h-5 w-5 text-gray-400" />}

        {isEditing ? (
          <div className="flex-1 flex items-center space-x-2">
            <input
              type="text"
              value={value}
              onChange={(e) => handleEditField(field, e.target.value)}
              className="flex-1 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
            <button
              onClick={() => setEditingField(null)}
              className="p-1 text-green-500 hover:text-green-600"
            >
              <Check className="h-4 w-4" />
            </button>
            <button
              onClick={() => setEditingField(null)}
              className="p-1 text-red-500 hover:text-red-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-between">
            <span>{value}</span>
            <button
              onClick={() => setEditingField(field)}
              className={`text-blue-600 text-sm hover:text-blue-700`}
            >
              Edit
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <main className="px-4 pb-12">
      <section className="text-center mb-12">
        <div className="relative inline-block mb-6">
          <img
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          >
            <Mail className="h-4 w-4" />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                alert(
                  `Profile picture "${file.name}" selected. In a production environment, this would be uploaded and updated.`
                );
              }
            }}
          />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{user?.firstName!} {user?.lastName!}</h1>
        <p className="text-gray-600 mb-4">{user?.Lawyer?.specialization! || "Family Lawyer"} | {user?.Lawyer?.yoe! || 0} Years Experience</p>
        <div className="flex justify-center">
          <AvailabilityToggle
            isAvailable={isAvailable}
            onToggle={() => setIsAvailable(!isAvailable)}
          />
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <ProfileCard
          onEdit={() => setShowSave((prev) => !prev)}
          title="Personal Information"
          icon={<UserCircle className="h-5 w-5 text-blue-600" />}
          editable
        >
          <div className="space-y-4">
            {renderEditableField("Email", user?.email! || personalInfo.email, "personal.email")}
            {renderEditableField("Phone", user?.phone_number! || personalInfo.phone, "personal.phone")}
            {renderEditableField(
              "Location",
              user?.address! || personalInfo.location,
              "personal.location"
            )}
            <Button
              color="error"
              onClick={() => {reset()}}
              variant="outlined"
              size="large"
            >
              Log out
            </Button>
          </div>
        </ProfileCard>

        <ProfileCard
          title="Professional Details"
          icon={<Award className="h-5 w-5 text-blue-600" />}
          editable
        >
          <div className="space-y-4">
            <p>
              <strong>Specialization:</strong> {user?.Lawyer?.specialization! || professionalInfo.specialization}
            </p>
            <p>
              <strong>Bar ID:</strong> {user?.Lawyer?.bar_association_membership || professionalInfo.barId}
            </p>
            <p>
              <strong>Certifications:</strong> {professionalInfo.certifications}
            </p>
            <input
              type="file"
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleFileUpload}
              id="certificate-upload"
            />
            <button
              onClick={() =>
                document.getElementById("certificate-upload")?.click()
              }
              className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              Upload Certificate
            </button>
          </div>
        </ProfileCard>

        <ProfileCard
          onEdit={() => setShowSave((prev) => !prev)}
          title="Availability Schedule"
          icon={<Calendar className="h-5 w-5 text-blue-600" />}
          editable
        >
          <div className="grid grid-cols-7 gap-2 text-sm">
            {Object.entries(schedule).map(([day, time]) => (
              <div key={day} className="text-center">
                <div className="font-medium mb-2">{day}</div>
                <div
                  className="bg-blue-100 rounded p-2 cursor-pointer hover:bg-blue-200"
                  onClick={() => handleScheduleEdit(day)}
                >
                  {time}
                </div>
              </div>
            ))}
          </div>
        </ProfileCard>

        <ProfileCard
          onEdit={() => setShowSave((prev) => !prev)}
          title="Security Settings"
          icon={<Shield className="h-5 w-5 text-blue-600" />}
          editable
        >
          <div className="space-y-4">
            <button
              onClick={() =>
                alert("Password change functionality would be implemented here")
              }
              className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition-colors"
            >
              Change Password
            </button>
            <div className="flex items-center justify-between">
              <span>Two-Factor Authentication</span>
              <AvailabilityToggle
                isAvailable={false}
                onToggle={() => alert("2FA toggle would be implemented here")}
              />
            </div>
          </div>
        </ProfileCard>
      </div>

      <div
        className={`fixed bottom-8 right-8 ${showSave ? "block" : "hidden"}`}
      >
        <button
          onClick={handleSaveChanges}
          className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-600 transition-colors"
        >
          Save Changes
        </button>
      </div>
    </main>
  );
};

export default LawyerProfile;
