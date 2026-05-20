import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LandingNavbar from '../components/landing/LandingNavbar';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';
import SEO from '../components/SEO';
import { useLang } from '../context/LanguageContext';
import { t } from '../translations';

const RepartoSalesPage: React.FC = () => {
  const { lang } = useLang();
  const tr = t[lang].sales;

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="landing-page bg-main text-body">
      <SEO
        title={lang === 'it' ? 'Reparto Sales potenziato dall\'AI per distributori Ho.Re.Ca.' : 'AI-powered Sales Department for Ho.Re.Ca. distributors'}
        description={lang === 'it'
          ? 'NxOrd monitora ogni cliente, anticipa il churn e suggerisce upselling in tempo reale. Dashboard KPI per agenti e direzione commerciale. Scopri come funziona.'
          : 'NxOrd monitors every customer, predicts churn and suggests upselling in real time. KPI dashboard for agents and sales management. See how it works.'}
        canonical="/casi-duso/reparto-sales"
        lang={lang}
      />
      <LandingNavbar />

      {/* Hero */}
      <section style={{ padding: '96px 0 80px', backgroundColor: 'var(--bg-white)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 reveal active">
              <div style={{ display: 'flex', gap: '10px', marginBottom: '16px', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', textDecoration: 'none', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                  Home
                </Link>
                <span style={{ color: 'var(--border-dark)', fontSize: '0.75rem' }}>›</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>
                  {tr.label}
                </span>
              </div>
              <div style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, color: '#10b981', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px' }}>
                {tr.badge}
              </div>
              <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'var(--color-heading)', lineHeight: 1.2, letterSpacing: '-0.03em', marginBottom: '20px' }}>
                {tr.title}
              </h1>
              <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '32px' }}>
                {tr.subtitle}
              </p>
              <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} className="btn-primary-action" style={{ padding: '14px 32px', fontSize: '1rem' }}>
                {tr.ctaBtn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section style={{ padding: '96px 0', backgroundColor: 'var(--bg-main)' }}>
        <div className="container">
          <div className="text-center mb-5 reveal active">
            <p className="text-accent mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {tr.howItWorksLabel}
            </p>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
              {tr.howItWorksTitle}
            </h2>
          </div>

          <div className="row g-4">
            {tr.steps.map((step, i) => (
              <div key={i} className="col-12 col-md-6 reveal active">
                <div style={{ backgroundColor: 'var(--bg-white)', border: '1px solid var(--border-color)', borderRadius: '12px', padding: '36px', height: '100%', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ fontSize: '0.6875rem', fontWeight: 800, color: '#10b981', fontFamily: 'var(--font-heading)', letterSpacing: '0.1em', marginBottom: '16px', textTransform: 'uppercase' }}>
                    Passo {step.num}
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-heading)', letterSpacing: '-0.02em', marginBottom: '12px' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.65, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '80px 0', backgroundColor: '#10b981' }}>
        <div className="container text-center reveal active">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '16px' }}>
            {tr.ctaTitle}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.0625rem', marginBottom: '32px', maxWidth: '520px', margin: '0 auto 32px' }}>
            {tr.ctaSubtitle}
          </p>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ backgroundColor: '#ffffff', color: '#10b981', padding: '14px 36px', borderRadius: '8px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', fontFamily: 'var(--font-heading)', display: 'inline-block' }}>
            {tr.ctaBtn}
          </a>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default RepartoSalesPage;
