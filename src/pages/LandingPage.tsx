import React, { useEffect } from 'react';
import LandingNavbar from '../components/landing/LandingNavbar';
import HeroSection from '../components/landing/HeroSection';
import AboutSection from '../components/landing/AboutSection';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';
import SEO from '../components/SEO';
import { useLang } from '../context/LanguageContext';
import '../index.css';

const LandingPage: React.FC = () => {
  const { lang } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
      });
    }, { threshold: 0.1 });

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((reveal) => observer.observe(reveal));
    return () => reveals.forEach((reveal) => observer.unobserve(reveal));
  }, []);

  return (
    <div className="landing-page bg-main text-body">
      <SEO
        title={lang === 'it' ? 'NxOrd – Ordini automatici e Sales Intelligence per distributori Ho.Re.Ca.' : 'NxOrd – Automated Orders and Sales Intelligence for Ho.Re.Ca. Distributors'}
        description={lang === 'it'
          ? 'NxOrd è la suite B2B che automatizza la ricezione ordini e potenzia il reparto sales dei distributori Ho.Re.Ca. con AI e Business Intelligence. Zero data entry.'
          : 'NxOrd is the B2B suite that automates order intake and empowers the sales department of Ho.Re.Ca. distributors with AI and Business Intelligence.'}
        canonical="/"
        lang={lang}
      />
      <LandingNavbar />
      <HeroSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
