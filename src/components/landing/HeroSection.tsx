import React from 'react';
import { analytics } from '../../utils/analytics';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" style={{ 
      padding: '80px 0 100px 0', 
      backgroundColor: 'var(--bg-white)', 
      borderBottom: '1px solid var(--border-light)' 
    }}>
      <div className="container text-center">
        
        {/* Pre-Headline Categoria B2B */}
        <p className="reveal active" style={{ 
          fontFamily: 'var(--font-heading)',
          fontWeight: 700, 
          fontSize: '0.8125rem', 
          color: 'var(--color-accent)', 
          textTransform: 'uppercase', 
          letterSpacing: '0.1em',
          marginBottom: '20px'
        }}>
          Sales Intelligence per Distributori Ho.Re.Ca.
        </p>

        {/* Titolo Principale Impattante (Stile Plato + Classic Serif) */}
        <h1 className="reveal active mx-auto" style={{ 
          maxWidth: '920px', 
          fontSize: 'clamp(2.5rem, 5.5vw, 4.25rem)', 
          fontWeight: 800, 
          color: 'var(--color-heading)', 
          lineHeight: 1.15,
          letterSpacing: '-0.03em',
          marginBottom: '24px'
        }}>
          Più ordini, zero errori, totale controllo.
        </h1>

        {/* Sottotitolo Dettagliato */}
        <p className="reveal active mx-auto" style={{ 
          maxWidth: '820px', 
          color: 'var(--text-muted)', 
          fontSize: '1.25rem', 
          lineHeight: 1.6, 
          marginBottom: '40px'
        }}>
          La piattaforma modulare che automatizza la ricezione degli ordini, monitora le performance dei tuoi commerciali e applica la Business Intelligence alla tua distribuzione.
        </p>

        {/* Bottoni d'Azione Minimalisti */}
        <div className="reveal active d-flex flex-wrap justify-content-center gap-3 mb-5">
          <a href="#contact" onClick={() => analytics.trackHeroCTA('Primary Demo')} className="btn-primary-action" style={{ padding: '14px 32px', fontSize: '1rem' }}>
            Prenota una demo
          </a>
          <a href="#benefits" onClick={() => analytics.trackHeroCTA('Secondary Learn More')} className="btn-ghost-primary" style={{ padding: '14px 32px', fontSize: '1rem' }}>
            Scopri di più
          </a>
        </div>

        {/* Visual Mockup A Tutta Larghezza (ERP & Sales Panel) */}
        <div className="reveal active mx-auto mt-4" style={{ maxWidth: '1000px' }}>
          <div className="ui-mockup" style={{ 
            boxShadow: 'var(--shadow-xl)',
            borderRadius: '12px',
            border: '1px solid var(--border-color)',
            overflow: 'hidden',
            backgroundColor: '#ffffff'
          }}>
            {/* Header Finestra */}
            <div className="ui-mockup-header" style={{
              backgroundColor: '#f8fafc',
              borderBottom: '1px solid var(--border-light)',
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center'
            }}>
              <div className="d-flex gap-2">
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#cbd5e1' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#cbd5e1' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#cbd5e1' }} />
              </div>
              <span style={{ 
                marginLeft: 'auto', 
                fontSize: '0.75rem', 
                color: 'var(--text-muted)', 
                fontFamily: 'var(--font-heading)', 
                fontWeight: 700 
              }}>
                NxOrd Sales Platform & ERP Connector
              </span>
            </div>

            {/* Layout Interno Mockup */}
            <div className="p-4" style={{ backgroundColor: '#ffffff', textAlign: 'left' }}>
              <div className="row g-4">
                
                {/* Pannello Email In Entrata */}
                <div className="col-12 col-md-5">
                  <div style={{ 
                    padding: '16px', 
                    borderRadius: '8px', 
                    border: '1px solid var(--border-light)', 
                    backgroundColor: '#f8fafc',
                    height: '100%'
                  }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                      Riconoscimento Ordini
                    </div>
                    <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', lineHeight: 1.6, color: 'var(--text-body)' }}>
                      <div style={{ color: 'var(--color-accent)', fontWeight: 700, marginBottom: '6px' }}>Da: ordini@pizzeriabello.it</div>
                      <div style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '6px' }}>
                        Ciao, per domani ci servono:<br />
                        - 10x Casse Acqua Minerale 1L<br />
                        - 5x Cartoni Olio di Semi 5L<br />
                        - 2x Fusti Birra Bionda 30L
                      </div>
                    </div>
                  </div>
                </div>

                {/* Freccia o Elemento di Processo Centralizzatore */}
                <div className="col-12 col-md-1 d-flex align-items-center justify-content-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="d-none d-md-block">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>

                {/* Pannello Tabella Ordine Strutturato */}
                <div className="col-12 col-md-6">
                  <div style={{ 
                    padding: '16px', 
                    borderRadius: '8px', 
                    border: '1px solid var(--border-light)',
                    height: '100%'
                  }}>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
                      Transazione Elaborata (Normalizzata in ERP)
                    </div>
                    
                    <div className="d-flex flex-column gap-2">
                      <div className="d-flex justify-content-between align-items-center pb-2" style={{ borderBottom: '1px solid var(--border-light)', fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                        <span>Codice Prodotto</span>
                        <span>Qtà</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center" style={{ fontSize: '0.8125rem' }}>
                        <span style={{ color: 'var(--color-heading)', fontWeight: 600 }}>AQ-MIN-1L (Acqua Minerale 1L)</span>
                        <span style={{ fontWeight: 700 }}>10</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center" style={{ fontSize: '0.8125rem' }}>
                        <span style={{ color: 'var(--color-heading)', fontWeight: 600 }}>OL-SEM-5L (Olio di Semi 5L)</span>
                        <span style={{ fontWeight: 700 }}>5</span>
                      </div>
                      <div className="d-flex justify-content-between align-items-center" style={{ fontSize: '0.8125rem' }}>
                        <span style={{ color: 'var(--color-heading)', fontWeight: 600 }}>BI-BIO-30L (Birra Chiara 30L)</span>
                        <span style={{ fontWeight: 700 }}>2</span>
                      </div>
                    </div>

                    {/* Proactive Upsell Overlay */}
                    <div style={{ 
                      marginTop: '16px',
                      padding: '10px 14px',
                      borderRadius: '6px',
                      backgroundColor: 'rgba(16, 185, 129, 0.05)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5.5 5.5 0 0 0 12.5 2.5 5.5 5.5 0 0 0 7 8c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
                        <path d="M9 18h6M10 22h4" />
                      </svg>
                      <div>
                        <div style={{ fontSize: '0.625rem', textTransform: 'uppercase', fontWeight: 800, color: '#10b981' }}>Raccomandazione AI</div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-heading)' }}>
                          Cliente acquista Patatine Fritte solitamente: <span style={{ color: '#10b981' }}>Proponi 1x Sacco 10kg</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
