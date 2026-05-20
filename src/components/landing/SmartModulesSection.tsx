import React from 'react';

const SmartModulesSection: React.FC = () => {
  return (
    <section id="smart-modules" className="bg-tech-dots accent-top-bar" style={{ padding: '96px 0', backgroundColor: 'var(--bg-main)' }}>
      <div className="container">
        
        {/* Intestazione Sezione */}
        <div className="text-center mb-5 reveal active">
          <p className="text-accent mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            La Svolta Smart
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 800 }}>I Nuovi Moduli Intelligenti</h2>
          <p className="mx-auto mt-3" style={{ maxWidth: '680px', color: 'var(--text-muted)', fontSize: '1.125rem' }}>
            NxOrd non si limita ad inserire gli ordini. Gestisci la tua azienda distributrice con la bento-box intelligente: Business Intelligence, Upselling predittivo e Rete Agenti in tempo reale.
          </p>
        </div>

        {/* Bento Grid Layout (Bento Box iOS-Style) */}
        <div className="bento-grid">
          
          {/* CARD 1: Business Intelligence (8/12 colonne) */}
          <div className="bento-card bento-col-8 reveal active">
            <div className="row align-items-center h-100 g-4">
              {/* Copywriting */}
              <div className="col-12 col-lg-6 d-flex flex-column justify-content-between h-100">
                <div>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '50%',
                      backgroundColor: 'rgba(14, 165, 233, 0.1)',
                      color: 'var(--color-accent)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="20" x2="18" y2="10" />
                        <line x1="12" y1="20" x2="12" y2="4" />
                        <line x1="6" y1="20" x2="6" y2="14" />
                      </svg>
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Business Intelligence
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-heading)', marginBottom: '12px' }}>
                    Il controllo totale della tua azienda, in un'unica schermata
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0 }}>
                    Non limitarti a raccogliere ordini passivamente. Scopri in tempo reale cosa acquistano i tuoi clienti, anticipa le loro esigenze commerciali e previeni le perdite prima che accadano.
                  </p>
                </div>
              </div>

              {/* Visual Mockup Isolato con Glassmorphism */}
              <div className="col-12 col-lg-6">
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '220px',
                  backgroundColor: '#f1f5f9',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(226, 232, 240, 0.6)',
                  padding: '20px'
                }}>
                  {/* Sfondo Sfocato (Finto grafico vendite) */}
                  <div className="blur-bg-content d-flex flex-column gap-3 h-100 justify-content-center">
                    <div className="d-flex justify-content-between align-items-end h-75 gap-2 px-3">
                      <div style={{ width: '20px', height: '40%', backgroundColor: 'var(--border-dark)', borderRadius: '4px' }}></div>
                      <div style={{ width: '20px', height: '65%', backgroundColor: 'var(--border-dark)', borderRadius: '4px' }}></div>
                      <div style={{ width: '20px', height: '50%', backgroundColor: 'var(--border-dark)', borderRadius: '4px' }}></div>
                      <div style={{ width: '20px', height: '85%', backgroundColor: 'var(--border-dark)', borderRadius: '4px' }}></div>
                      <div style={{ width: '20px', height: '60%', backgroundColor: 'var(--border-dark)', borderRadius: '4px' }}></div>
                    </div>
                    <div style={{ height: '2px', backgroundColor: 'var(--border-dark)', width: '100%' }}></div>
                  </div>

                  {/* Glassmorphic Floating Panel (Churn Prevention Alert) */}
                  <div className="glass-floating-panel p-3" style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    borderLeft: '4px solid #ef4444',
                    boxShadow: '0 15px 35px rgba(239, 68, 68, 0.1)'
                  }}>
                    <div className="d-flex align-items-center gap-2">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0zM12 9v4M12 17h.01" />
                      </svg>
                      <div style={{ textAlign: 'left' }}>
                        <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 800, color: '#ef4444', display: 'block', letterSpacing: '0.05em' }}>
                          Alert Prevenzione Churn
                        </span>
                        <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-heading)' }}>
                          Pizzeria Marco: fermo da 14 giorni!
                        </span>
                        <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'block', marginTop: '2px' }}>
                          Fatturato a rischio: €1,240/mese. Contatta ora.
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* CARD 2: Basket Analysis & Upselling (4/12 colonne) */}
          <div className="bento-card bento-col-4 reveal active" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'between' }}>
            {/* Copywriting */}
            <div className="mb-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <div style={{
                  width: '36px', height: '36px', borderRadius: '50%',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  color: '#10b981',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                </div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Upselling Automatico
                </span>
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--color-heading)', marginBottom: '10px' }}>
                Vendi di più, senza sforzo
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.5, margin: 0 }}>
                Il sistema analizza le abitudini del cliente: se ordina Patatine ma manca la Birra bionda che acquista solitamente, lo segnala all'agente aumentando la marginalità media dell'ordine.
              </p>
            </div>

            {/* Visual Mockup Isolato con Glassmorphism */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '160px',
              backgroundColor: '#f1f5f9',
              borderRadius: '16px',
              overflow: 'hidden',
              border: '1px solid rgba(226, 232, 240, 0.6)',
              padding: '16px'
            }}>
              {/* Sfondo Sfocato (Finto scontrino spesa) */}
              <div className="blur-bg-content d-flex flex-column gap-2" style={{ fontSize: '0.6875rem', fontFamily: 'monospace' }}>
                <div style={{ borderBottom: '1px dashed var(--border-dark)', paddingBottom: '4px' }}>ORDINE PIZZERIA BELLO</div>
                <div className="d-flex justify-content-between"><span>- 10x Patatine 10kg</span><span>€150</span></div>
                <div className="d-flex justify-content-between"><span>- 5x Olio Frittura</span><span>€120</span></div>
                <div className="d-flex justify-content-between"><span>- 2x Sale Fino</span><span>€10</span></div>
              </div>

              {/* Glassmorphic Floating Panel (Upsell Alert) */}
              <div className="glass-floating-panel p-3" style={{
                position: 'absolute',
                bottom: '12px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '92%',
                borderLeft: '4px solid #10b981',
                boxShadow: '0 10px 25px rgba(16, 185, 129, 0.1)'
              }}>
                <div className="d-flex align-items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5.5 5.5 0 0 0 12.5 2.5 5.5 5.5 0 0 0 7 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
                    <path d="M9 18h6M10 22h4" />
                  </svg>
                  <div style={{ textAlign: 'left' }}>
                    <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 800, color: '#10b981', display: 'block' }}>
                      Upselling Consigliato
                    </span>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-heading)' }}>
                      Manca Birra Chiara Bionda X
                    </span>
                    <span style={{ fontSize: '0.625rem', color: '#10b981', fontWeight: 700, display: 'block', marginTop: '1px' }}>
                      +12% sul carrello
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* CARD 3: Performance Agenti (12/12 colonne) */}
          <div className="bento-card bento-col-12 reveal active">
            <div className="row align-items-center g-4">
              
              {/* Visual Mockup Isolato con Glassmorphism (A Sinistra) */}
              <div className="col-12 col-lg-6 order-2 order-lg-1">
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '220px',
                  backgroundColor: '#f1f5f9',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(226, 232, 240, 0.6)',
                  padding: '20px'
                }}>
                  {/* Sfondo Sfocato (Leaderboard agenti) */}
                  <div className="blur-bg-content d-flex flex-column gap-2" style={{ fontSize: '0.75rem' }}>
                    <div className="d-flex justify-content-between p-2 rounded" style={{ backgroundColor: '#fff' }}>
                      <span>1. Matteo Bianchi</span><span>€28,400</span><span>74% promo</span>
                    </div>
                    <div className="d-flex justify-content-between p-2 rounded" style={{ backgroundColor: '#fff' }}>
                      <span>2. Anna Neri</span><span>€24,150</span><span>62% promo</span>
                    </div>
                    <div className="d-flex justify-content-between p-2 rounded" style={{ backgroundColor: '#fff' }}>
                      <span>3. Francesco Rossi</span><span>€19,800</span><span>55% promo</span>
                    </div>
                  </div>

                  {/* Glassmorphic Floating Panel (Top Agent Card) */}
                  <div className="glass-floating-panel p-3" style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    borderLeft: '4px solid var(--color-accent)',
                    boxShadow: '0 15px 35px rgba(14, 165, 233, 0.1)'
                  }}>
                    <div className="d-flex align-items-center gap-3">
                      <div style={{
                        width: '40px', height: '40px', borderRadius: '50%',
                        background: 'linear-gradient(135deg, var(--color-brand), var(--color-accent))',
                        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 800, fontSize: '0.875rem'
                      }}>
                        LR
                      </div>
                      <div style={{ textAlign: 'left', flex: 1 }}>
                        <span style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 800, color: 'var(--color-accent)', display: 'block' }}>
                          Miglior Agente del Mese
                        </span>
                        <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-heading)' }}>
                          Luca Rossi ( +18% vendite )
                        </span>
                        <span style={{ fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'block' }}>
                          Fatturato: €32,850 | Tasso Conv. Promo: 88%
                        </span>
                      </div>
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34M12 2a4 4 0 0 0-4 4v5c0 2.2 1.8 4 4 4s4-1.8 4-4V6a4 4 0 0 0-4-4z" />
                      </svg>
                    </div>
                  </div>

                </div>
              </div>

              {/* Copywriting (A Destra) */}
              <div className="col-12 col-lg-6 order-1 order-lg-2 d-flex flex-column justify-content-between h-100">
                <div style={{ paddingLeft: '12px' }}>
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div style={{
                      width: '36px', height: '36px', borderRadius: '50%',
                      backgroundColor: 'rgba(30, 58, 138, 0.1)',
                      color: 'var(--color-brand)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-brand)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Performance Agenti
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-heading)', marginBottom: '12px' }}>
                    Guida la tua rete vendita con i dati
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0 }}>
                    Monitora i fatturati dei tuoi agenti, analizza le loro performance sul campo ed offri loro strumenti predittivi di vendita. Scopri chi sta proponendo i prodotti in promozione, chi converte di più e chi sta perdendo clienti a rischio.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SmartModulesSection;
