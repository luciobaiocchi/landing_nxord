import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-tech-dots position-relative overflow-hidden" style={{ padding: '80px 0 72px' }}>
      <div className="container">
        <div className="hero-grid">

          {/* === COLONNA SINISTRA: Testo === */}
          <div style={{ textAlign: 'left', borderLeft: '4px solid var(--color-accent)', paddingLeft: '24px' }}>

            {/* Headline */}
            <h1 className="mb-3" style={{ fontWeight: 800 }}>
              Da un'email confusa a un ordine pronto in{' '}
              <span style={{ color: 'var(--color-accent)' }}>pochi secondi</span>
            </h1>

            {/* Paragrafo */}
            <p style={{ color: 'var(--text-muted)', maxWidth: '480px', fontSize: '1.0625rem', lineHeight: 1.6 }}>
              NxOrd legge le email dei tuoi clienti Ho.Re.Ca., estrae codici prodotto e quantità, e genera ordini pronti per il tuo gestionale. Zero data entry, zero errori.
            </p>

            {/* CTA */}
            <a href="#contact" className="btn-primary-action">
              Richiedi accesso Early Access
            </a>
          </div>

          {/* === COLONNA DESTRA: UI Mockup === */}
          <div className="ui-mockup">
            {/* Finta barra titolo finestra */}
            <div className="ui-mockup-header">
              <div className="ui-mockup-dot" style={{ backgroundColor: '#ef4444' }} />
              <div className="ui-mockup-dot" style={{ backgroundColor: '#f59e0b' }} />
              <div className="ui-mockup-dot" style={{ backgroundColor: '#22c55e' }} />
              <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--text-muted)', fontFamily: 'var(--font-heading)', fontWeight: 600 }}>NxOrd Dashboard</span>
            </div>

            {/* Blocco Email in entrata */}
            <div className="ui-mockup-label">📩 Email ricevuta</div>
            <div className="ui-mockup-row" style={{ display: 'block', fontFamily: 'monospace', fontSize: '0.75rem', lineHeight: 1.7, color: 'var(--text-body)' }}>
              <div style={{ color: 'var(--text-muted)', marginBottom: '4px' }}>Da: ordini@ristorantedamarco.it</div>
              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '6px' }}>
                Buongiorno, vi invio l'ordine per domani:<br />
                - 3 casse Acqua Panna 1L<br />
                - 2 cartoni Coca Cola 33cl<br />
                - Mezzo bancale becks 33<br />
                Grazie, Marco
              </div>
            </div>

            {/* Freccia */}
            <div className="ui-mockup-arrow">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>

            {/* Blocco Tabella Ordine */}
            <div className="ui-mockup-label">✅ Ordine strutturato</div>
            {/* Header riga */}
            <div className="ui-mockup-row" style={{ fontSize: '0.6875rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' as const, letterSpacing: '0.05em', background: 'transparent', border: 'none', padding: '4px 12px', marginBottom: '4px' }}>
              <span style={{ flex: '1' }}>Codice</span>
              <span style={{ flex: '2' }}>Prodotto</span>
              <span style={{ flex: '0.5', textAlign: 'right' }}>Qtà</span>
            </div>
            <div className="ui-mockup-row" style={{ fontSize: '0.8125rem' }}>
              <span style={{ flex: '1', color: 'var(--color-accent)', fontWeight: 600, fontFamily: 'monospace' }}>AP-1L</span>
              <span style={{ flex: '2', color: 'var(--color-heading)' }}>Acqua Panna 1L</span>
              <span style={{ flex: '0.5', textAlign: 'right', fontWeight: 700 }}>3</span>
            </div>
            <div className="ui-mockup-row" style={{ fontSize: '0.8125rem' }}>
              <span style={{ flex: '1', color: 'var(--color-accent)', fontWeight: 600, fontFamily: 'monospace' }}>CC-33</span>
              <span style={{ flex: '2', color: 'var(--color-heading)' }}>Coca Cola 33cl</span>
              <span style={{ flex: '0.5', textAlign: 'right', fontWeight: 700 }}>2</span>
            </div>
            <div className="ui-mockup-row" style={{ fontSize: '0.8125rem' }}>
              <span style={{ flex: '1', color: 'var(--color-accent)', fontWeight: 600, fontFamily: 'monospace' }}>BK-04</span>
              <span style={{ flex: '2', color: 'var(--color-heading)' }}>Becks 33clx24</span>
              <span style={{ flex: '0.5', textAlign: 'right', fontWeight: 700 }}>63</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
