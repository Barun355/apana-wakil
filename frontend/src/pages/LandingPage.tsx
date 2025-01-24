import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Statistics from '../components/Statistics';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';
import FAQ from '../components/FAQ';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Features />
      <Statistics />
      <HowItWorks />
      <CallToAction />
      <FAQ />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default LandingPage;
