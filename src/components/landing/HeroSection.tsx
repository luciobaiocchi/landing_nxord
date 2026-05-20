import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../translations';
import { analytics } from '../../utils/analytics';

const HeroSection: React.FC = () => {
  const { lang } = useLang();
  const tr = t[lang].hero;

  return (
    <section id="hero" style={{
      padding: '96px 0 80px',
      backgroundColor: 'var(--bg-white)',
      borderBottom: '1px solid var(--border-light)'
    }}>
      <div className="container text-center">

        <p className="reveal active" style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 700,
          fontSize: '0.8125rem',
          color: 'var(--color-accent)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '20px'
        }}>
          {tr.label}
        </p>

        <h1 className="reveal active mx-auto" style={{
          maxWidth: '860px',
          fontSize: 'clamp(2.5rem, 5.5vw, 4rem)',
          fontWeight: 800,
          color: 'var(--color-heading)',
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
          marginBottom: '24px'
        }}>
          {tr.title}
        </h1>

        <p className="reveal active mx-auto" style={{
          maxWidth: '680px',
          color: 'var(--text-muted)',
          fontSize: '1.1875rem',
          lineHeight: 1.65,
          marginBottom: '40px'
        }}>
          {tr.subtitle}
        </p>

        <div className="reveal active d-flex flex-wrap justify-content-center gap-3 mb-5">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); analytics.trackHeroCTA('Primary Demo'); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary-action"
            style={{ padding: '14px 32px', fontSize: '1rem' }}
          >
            {tr.ctaPrimary}
          </a>
          <a
            href="#use-cases"
            onClick={(e) => { e.preventDefault(); analytics.trackHeroCTA('Secondary Use Cases'); document.getElementById('use-cases')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-ghost-primary"
            style={{ padding: '14px 32px', fontSize: '1rem' }}
          >
            {tr.ctaSecondary}
          </a>
        </div>

        {/* Product module cards */}
        <div id="use-cases" className="reveal active row g-4 mt-2">

          <div className="col-12 col-md-6">
            <div style={{
              backgroundColor: 'var(--bg-main)',
              border: '1px solid var(--border-color)',
              borderRadius: '14px',
              padding: '36px 32px',
              textAlign: 'left',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              transition: 'box-shadow 0.2s ease, transform 0.2s ease'
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-md)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
            >
              <div style={{
                width: '40px', height: '40px',
                backgroundColor: 'rgba(99,102,241,0.1)',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1.1875rem', fontWeight: 800, color: 'var(--color-heading)', marginBottom: '10px', letterSpacing: '-0.02em' }}>
                  {tr.module1Title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
                  {tr.module1Desc}
                </p>
              </div>
              <Link
                to="/casi-duso/gestione-ordini"
                style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', marginTop: 'auto', fontFamily: 'var(--font-heading)' }}
              >
                {tr.module1Cta}
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div style={{
              backgroundColor: 'var(--color-heading)',
              border: '1px solid var(--color-heading)',
              borderRadius: '14px',
              padding: '36px 32px',
              textAlign: 'left',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              transition: 'box-shadow 0.2s ease, transform 0.2s ease'
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-lg)'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
            >
              <div style={{
                width: '40px', height: '40px',
                backgroundColor: 'rgba(255,255,255,0.12)',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                  <polyline points="16 7 22 7 22 13" />
                </svg>
              </div>
              <div>
                <h3 style={{ fontSize: '1.1875rem', fontWeight: 800, color: '#ffffff', marginBottom: '10px', letterSpacing: '-0.02em' }}>
                  {tr.module2Title}
                </h3>
                <p style={{ fontSize: '0.9375rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, margin: 0 }}>
                  {tr.module2Desc}
                </p>
              </div>
              <Link
                to="/casi-duso/reparto-sales"
                style={{ color: 'var(--color-accent)', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none', marginTop: 'auto', fontFamily: 'var(--font-heading)' }}
              >
                {tr.module2Cta}
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
