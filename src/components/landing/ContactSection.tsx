import React, { useState } from 'react';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../translations';
import { analytics } from '../../utils/analytics';
import thomasImg from '../../assets/thomas.jpeg';

const ContactSection: React.FC = () => {
  const { lang } = useLang();
  const tr = t[lang].contact;

  const [formData, setFormData] = useState({ nome: '', email: '', azienda: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    analytics.trackMailto();
    setSubmitted(true);
    setTimeout(() => {
      window.location.href = `mailto:thomaskellywork24@gmail.com?subject=Richiesta%20Demo%20NxOrd%20-%20${formData.azienda}&body=Ciao,%20sono%20${formData.nome}%20di%20${formData.azienda}.%20Vorrei%20prenotare%20una%20demo%20per%20NxOrd.%20Email:%20${formData.email}`;
    }, 1000);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid var(--border-color)',
    fontSize: '0.9375rem',
    fontFamily: 'var(--font-body)',
    outline: 'none',
    transition: 'border-color 0.15s ease'
  };

  const labelStyle: React.CSSProperties = {
    fontSize: '0.75rem',
    fontWeight: 700,
    color: 'var(--text-muted)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    display: 'block',
    marginBottom: '6px'
  };

  return (
    <section id="contact" style={{
      padding: '100px 0',
      backgroundColor: 'var(--bg-main)',
      borderTop: '1px solid var(--border-light)'
    }}>
      <div className="container">
        <div className="row g-5 align-items-center">

          {/* Left: description + benefits */}
          <div className="col-12 col-lg-6 reveal active">
            <p className="text-accent mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              {tr.label}
            </p>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-heading)', letterSpacing: '-0.03em', marginBottom: '20px' }}>
              {tr.title}
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '28px' }}>
              {tr.subtitle}
            </p>

            {/* Founder Card */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '18px 22px',
              backgroundColor: 'var(--bg-white)',
              border: '1px solid var(--border-color)',
              borderRadius: '10px',
              marginBottom: '28px'
            }}>
              <img
                src={thomasImg}
                alt="Thomas Kelly"
                style={{ width: '52px', height: '52px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }}
              />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9375rem', color: 'var(--color-heading)' }}>
                  Thomas Kelly
                </div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {tr.founderNote}
                </div>
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[tr.benefit1, tr.benefit2, tr.benefit3].map((text, i) => (
                <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', fontSize: '0.96875rem', color: 'var(--color-heading)', fontWeight: 600 }}>
                  <span style={{
                    flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%',
                    backgroundColor: 'var(--bg-white)', border: '1px solid var(--border-color)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.6875rem', fontWeight: 800, color: 'var(--color-accent)',
                    fontFamily: 'var(--font-heading)', marginTop: '1px'
                  }}>
                    {i + 1}
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div className="col-12 col-lg-6 reveal active">
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '40px',
              boxShadow: 'var(--shadow-lg)'
            }}>
              {submitted ? (
                <div className="text-center py-4">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '16px' }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-heading)', marginBottom: '8px' }}>
                    {tr.successTitle}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>
                    {tr.successText}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                  <div style={{ textAlign: 'left' }}>
                    <label style={labelStyle}>{tr.labelName}</label>
                    <input type="text" required value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} placeholder={tr.placeholderName} style={inputStyle} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <label style={labelStyle}>{tr.labelEmail}</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder={tr.placeholderEmail} style={inputStyle} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <label style={labelStyle}>{tr.labelCompany}</label>
                    <input type="text" required value={formData.azienda} onChange={(e) => setFormData({ ...formData, azienda: e.target.value })} placeholder={tr.placeholderCompany} style={inputStyle} />
                  </div>
                  <button type="submit" className="btn-primary-action w-100 mt-2" style={{ padding: '14px 24px', fontSize: '0.96875rem' }}>
                    {tr.submit}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
