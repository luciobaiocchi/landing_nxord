import React, { useState } from 'react';
import { analytics } from '../../utils/analytics';
import thomasImg from '../../assets/thomas.jpeg';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    azienda: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    analytics.trackMailto();
    setSubmitted(true);
    
    // Simulate email dispatch or lead notification
    setTimeout(() => {
      window.location.href = `mailto:thomaskellywork24@gmail.com?subject=Richiesta%20Demo%20NxOrd%20-%20${formData.azienda}&body=Ciao,%20sono%20${formData.nome}%20di%20${formData.azienda}.%20Vorrei%20prenotare%20una%20demo%20per%20NxOrd.%20Email:%20${formData.email}`;
    }, 1000);
  };

  return (
    <section id="contact" style={{ 
      padding: '100px 0', 
      backgroundColor: 'var(--bg-main)', 
      borderTop: '1px solid var(--border-light)' 
    }}>
      <div className="container">
        
        <div className="row g-5 align-items-center">
          
          {/* Colonna Sinistra: Descrizione Benefit Demo */}
          <div className="col-12 col-lg-6 reveal active">
            <p className="text-accent mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Parliamone!
            </p>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-heading)', letterSpacing: '-0.03em', marginBottom: '24px' }}>
              Let’s have a chat!
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '1.125rem', lineHeight: 1.6, marginBottom: '28px' }}>
              Non vediamo l'ora di comprendere i tuoi obiettivi commerciali e le sfide di logistica/magazzino della tua azienda. Parliamo insieme del potenziale di crescita per il tuo team in un colloquio non vincolante.
            </p>

            {/* Founder Card */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              padding: '18px 22px',
              backgroundColor: 'var(--bg-main)',
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
                  Co-Founder, NxOrd · Rispondo personalmente a ogni richiesta.
                </div>
              </div>
            </div>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '20px'
            }}>
              {[
                'Analisi gratuita del potenziale di automazione per te ed il tuo team commerciale.',
                'Condivisione di best practice e casi studio reali di altri distributori B2B Ho.Re.Ca.',
                'Una panoramica completa di NxOrd strutturata su misura per i tuoi interessi.'
              ].map((text, i) => (
                <li key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', fontSize: '0.96875rem', color: 'var(--color-heading)', fontWeight: 600 }}>
                  <span style={{ flexShrink: 0, width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.6875rem', fontWeight: 800, color: 'var(--color-accent)', fontFamily: 'var(--font-heading)', marginTop: '1px' }}>
                    {i + 1}
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonna Destra: Modulo Contatti Premium */}
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
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--color-heading)', marginBottom: '8px' }}>Richiesta in preparazione!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', margin: 0 }}>
                    Ti stiamo reindirizzando alla tua casella e-mail per inviare la richiesta a <strong>thomaskellywork24@gmail.com</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                  <div style={{ textAlign: 'left' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>
                      Nome Completo
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Esempio: Lucio Baiocchi" 
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.9375rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        transition: 'border-color 0.15s ease'
                      }}
                    />
                  </div>

                  <div style={{ textAlign: 'left' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>
                      Email Aziendale
                    </label>
                    <input 
                      type="email" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Esempio: lucio@azienda.it" 
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.9375rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        transition: 'border-color 0.15s ease'
                      }}
                    />
                  </div>

                  <div style={{ textAlign: 'left' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '6px' }}>
                      Nome Azienda
                    </label>
                    <input 
                      type="text" 
                      required 
                      value={formData.azienda}
                      onChange={(e) => setFormData({ ...formData, azienda: e.target.value })}
                      placeholder="Esempio: Rossi Distribuzione SRL" 
                      style={{
                        width: '100%',
                        padding: '12px 16px',
                        borderRadius: '8px',
                        border: '1px solid var(--border-color)',
                        fontSize: '0.9375rem',
                        fontFamily: 'var(--font-body)',
                        outline: 'none',
                        transition: 'border-color 0.15s ease'
                      }}
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary-action w-100 mt-2" 
                    style={{ padding: '14px 24px', fontSize: '0.96875rem' }}
                  >
                    Prenota la mia demo &rarr;
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
