import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import LandingNavbar from '../components/landing/LandingNavbar';
import ContactSection from '../components/landing/ContactSection';
import Footer from '../components/landing/Footer';
import OrderFlowDiagram from '../components/landing/OrderFlowDiagram';
import SEO from '../components/SEO';
import { useLang } from '../context/LanguageContext';
import { t } from '../translations';

const GestioneOrdiniPage: React.FC = () => {
  const { lang } = useLang();
  const tr = t[lang].ordini;

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('active'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const kpis = [
    { value: tr.kpi1Value, label: tr.kpi1Label },
    { value: tr.kpi2Value, label: tr.kpi2Label },
    { value: tr.kpi3Value, label: tr.kpi3Label },
  ];

  return (
    <div className="landing-page bg-main text-body">
      <SEO
        title={lang === 'it' ? 'Gestione Ordini automatizzata per distributori Ho.Re.Ca.' : 'Automated Order Management for Ho.Re.Ca. distributors'}
        description={lang === 'it'
          ? 'NxOrd automatizza la ricezione degli ordini da email, WhatsApp e PDF e li inserisce nel tuo ERP. Risparmia 5 ore a settimana per addetto. Scopri come funziona.'
          : 'NxOrd automates order intake from email, WhatsApp and PDF and enters them into your ERP. Save 5 hours per employee per week. See how it works.'}
        canonical="/casi-duso/gestione-ordini"
        lang={lang}
      />

      <LandingNavbar />

      {/* Hero */}
      <section style={{ padding: '96px 0 80px', backgroundColor: 'var(--bg-white)', borderBottom: '1px solid var(--border-light)' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-7 reveal active">
              <div style={{ display: 'flex', gap: '10px', marginBottom: '16px', alignItems: 'center' }}>
                <Link to="/" style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', textDecoration: 'none', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>Home</Link>
                <span style={{ color: 'var(--border-dark)', fontSize: '0.75rem' }}>›</span>
                <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>{tr.label}</span>
              </div>
              <div style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.2)', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', fontFamily: 'var(--font-heading)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px' }}>
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

            {/* KPI column */}
            <div className="col-12 col-lg-5 reveal active">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {kpis.map((kpi, i) => (
                  <div key={i} style={{ padding: '24px 28px', backgroundColor: i === 0 ? 'var(--color-heading)' : 'var(--bg-white)', border: '1px solid ' + (i === 0 ? 'var(--color-heading)' : 'var(--border-color)'), borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '20px', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: i === 0 ? '#ffffff' : 'var(--color-heading)', fontFamily: 'var(--font-heading)', letterSpacing: '-0.04em', minWidth: '80px' }}>
                      {kpi.value}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: i === 0 ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)', fontWeight: 500, lineHeight: 1.4 }}>
                      {kpi.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow diagram – replaces the 4-step cards */}
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

          <div className="reveal active" style={{ padding: '48px 32px', backgroundColor: 'var(--bg-white)', border: '1px solid var(--border-color)', borderRadius: '16px', boxShadow: 'var(--shadow-sm)' }}>
            <OrderFlowDiagram />
          </div>

          {/* Brief step captions below the diagram */}
          <div className="row g-3 mt-4">
            {tr.steps.map((step, i) => (
              <div key={i} className="col-12 col-sm-6 col-lg-3 reveal active">
                <div style={{ padding: '20px', backgroundColor: 'var(--bg-white)', border: '1px solid var(--border-color)', borderRadius: '10px', height: '100%' }}>
                  <div style={{ fontSize: '0.625rem', fontWeight: 800, color: 'var(--color-accent)', fontFamily: 'var(--font-heading)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                    {step.num}
                  </div>
                  <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--color-heading)', marginBottom: '6px', letterSpacing: '-0.01em' }}>
                    {step.title}
                  </h4>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', lineHeight: 1.55, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{ padding: '80px 0', backgroundColor: 'var(--color-heading)' }}>
        <div className="container text-center reveal active">
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', marginBottom: '16px' }}>
            {tr.ctaTitle}
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.0625rem', maxWidth: '520px', margin: '0 auto 32px' }}>
            {tr.ctaSubtitle}
          </p>
          <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ backgroundColor: 'var(--color-accent)', color: '#ffffff', padding: '14px 36px', borderRadius: '8px', fontWeight: 700, fontSize: '1rem', textDecoration: 'none', fontFamily: 'var(--font-heading)', display: 'inline-block' }}>
            {tr.ctaBtn}
          </a>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
};

export default GestioneOrdiniPage;
