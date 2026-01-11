import React, { useEffect, useLayoutEffect } from 'react';
import LandingNavbar from '../components/landing/LandingNavbar';
import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import AboutSection from '../components/landing/AboutSection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';
import DynamicBackground from '../components/landing/DynamicBackground';
import '../styles/landing.css';

const LandingPage: React.FC = () => {
  useLayoutEffect(() => {
    // 1. Force Dark Mode for Landing Page
    document.body.classList.add('dark-mode');
    document.documentElement.setAttribute('data-theme', 'dark');

    return () => {
      // 2. Restore User Preference on Unmount
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'light') {
        document.body.classList.remove('dark-mode');
        document.documentElement.setAttribute('data-theme', 'light');
      }
    };
  }, []);

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
    <div className="landing-page">
      <DynamicBackground />
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
