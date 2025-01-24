import { motion } from 'framer-motion';
import { Linkedin, Mail, Globe } from 'lucide-react';
import Navbar from '../components/Navbar';
interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Barun Tiwary',
    role: 'Full Stack Developer',
    image: '/images/barun.jpg',
    linkedin: 'https://linkedin.com/in/barun-tiwary',
    email: 'baruntiwary620@gmail.com',
  },
  {
    id: '1',
    name: 'Poorva Gupta',
    role: 'Frontend Developer',
    image: '/images/shivi.jpg',
    linkedin: 'https://www.linkedin.com/in/poorva-gupta-934a25222/',
    email: 'pgupta02082003@gmail.com',
  },
  {
    id: '1',
    name: 'Divyansh Goel',
    role: 'Backend Developer',
    image: '/images/divyansh.jpg',
    linkedin: 'https://www.linkedin.com/in/divyansh-goel-535522314/',
    email: 'divyanshgoel90840@gmail.com',
  },
  {
    id: '2',
    name: 'Poem Dabur',
    role: 'Frontend Developer',
    image: '/images/poem.jpg',
    linkedin: 'https://www.linkedin.com/in/poem-dabur-5a6616220',
    email: 'daburpoem24@gmail.com',
  },
  {
    id: '3',
    name: 'Tanishka Rana',
    role: 'UI/UX Designer',
    image: '/images/tanishka.jpg',
    linkedin: 'https://in.linkedin.com/in/tanishka-rana240',
    email: 'tanishkarana240@gmail.com',
  },
];

export const AboutUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Hero Section */}
      <div 
        className="relative h-[400px] bg-cover bg-center"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200)',
        }}
      >
        <div className="absolute inset-0 bg-blue-900/75">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
              <p className="text-xl text-blue-100">Connecting Justice with Innovation</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At LegalConnect, we're revolutionizing the way legal services are accessed and delivered. 
              Our mission is to make quality legal assistance accessible to everyone through technology 
              while maintaining the highest standards of professional service.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p>
                Founded in 2023, LegalConnect emerged from a simple yet powerful idea: 
                to bridge the gap between legal professionals and those seeking legal assistance. 
                We recognized the challenges people face when trying to find the right legal help, 
                and we set out to create a solution.
              </p>
              <p>
                Today, we're proud to have built a platform that connects thousands of clients 
                with qualified legal professionals, making the legal process more transparent, 
                efficient, and accessible than ever before.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="bg-white rounded-lg shadow-md overflow-hidden group"
              >
                <div className="aspect-square relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 flex space-x-2">
                      {member.linkedin && (
                        <a href={member.linkedin} className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors">
                          <Linkedin size={20} className="text-white" />
                        </a>
                      )}
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="p-2 bg-white/20 rounded-full hover:bg-white/40 transition-colors">
                          <Mail size={20} className="text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">Accessibility</h3>
                <p className="text-gray-600">Making legal services available to everyone</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Trust</h3>
                <p className="text-gray-600">Building relationships based on transparency</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-gray-600">Leveraging technology for better legal services</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

