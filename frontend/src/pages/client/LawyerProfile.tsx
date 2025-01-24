import { Star, Calendar, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({
  title,
  price,
  description,
  icon: Icon,
}: {
  title: string;
  price: string;
  description: string;
  icon: any;
}) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all">
    <Icon className="h-8 w-8 text-blue-600 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 mb-4">{description}</p>
    <p className="text-blue-600 font-bold">₹{price}</p>
  </div>
);

const TestimonialCard = ({
  name,
  rating,
  review,
  date,
}: {
  name: string;
  rating: number;
  review: string;
  date: string;
}) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? "fill-current" : ""}`}
          />
        ))}
      </div>
      <span className="ml-2 text-gray-600">{rating}/5</span>
    </div>
    <p className="text-gray-700 mb-4">"{review}"</p>
    <div className="flex justify-between text-sm text-gray-500">
      <span>{name}</span>
      <span>{date}</span>
    </div>
  </div>
);

const ClientLawyerProfile = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <ClientHeader /> */}

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
              alt="Chris Evans"
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-xl mb-8 md:mb-0 md:mr-12"
            />
            <div>
              <div className="flex items-center mb-4">
                <h1 className="text-4xl font-bold mr-4">Chris Evans</h1>
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                  Currently Available
                </span>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current" />
                  ))}
                </div>
                <span>4.8/5 (120+ reviews)</span>
              </div>
              <p className="text-lg opacity-90">
                Specializing in family law with over 8 years of experience in
                resolving cases related to custody, divorce, and prenuptial
                agreements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Services Offered
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ServiceCard
            title="Divorce Consultation"
            price="5,000"
            description="Initial consultation for divorce cases including property division and alimony discussions."
            icon={Calendar}
          />
          <ServiceCard
            title="Child Custody"
            price="8,000"
            description="Expert guidance and representation in child custody and visitation matters."
            icon={Calendar}
          />
          <ServiceCard
            title="Prenuptial Agreement"
            price="10,000"
            description="Drafting and reviewing prenuptial agreements to protect your interests."
            icon={Calendar}
          />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Client Testimonials
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="John Doe"
              rating={5}
              review="Chris handled my divorce case with utmost professionalism and care. Highly recommended!"
              date="March 2024"
            />
            <TestimonialCard
              name="Jane Smith"
              rating={5}
              review="Excellent service and communication throughout my custody case."
              date="February 2024"
            />
            <TestimonialCard
              name="Mike Johnson"
              rating={4}
              review="Very knowledgeable and efficient in handling complex legal matters."
              date="January 2024"
            />
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
        <button
          className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          onClick={() => navigate("/client/dashboard/book-appointment")}
        >
          Book an Appointment
        </button>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Contact Information
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-blue-600" />
                <span>chris.evans@legalconnect.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-blue-600" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClientLawyerProfile;
