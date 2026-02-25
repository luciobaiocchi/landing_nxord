import React, { useEffect } from 'react';
import LandingNavbar from '../components/landing/LandingNavbar';
import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import AboutSection from '../components/landing/AboutSection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';
import '../index.css';

const LandingPage: React.FC = () => {
  useEffect(() => {
    // Scroll Reveal Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, {
      threshold: 0.1
    });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((reveal) => observer.observe(reveal));

    return () => {
      reveals.forEach((reveal) => observer.unobserve(reveal));
    };
  }, []);

  return (
    <div className="landing-page bg-main text-body">
      <LandingNavbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
