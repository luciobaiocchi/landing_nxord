import React from 'react';

const ComparisonSection: React.FC = () => {
  const comparisonItems = [
    {
      title: 'Evasione Ordini',
      before: {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ),
        text: 'Ore perse ogni mattina a decifrare PDF sfocati, WhatsApp confusi o note vocali disturbate. Il data entry manuale rallenta l\'azienda ed è fonte continua di piccoli e grandi errori.',
        label: 'Vecchio modo: Lento e manuale'
      },
      after: {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ),
        text: 'Ordini pronti in 3 secondi. La tecnologia estrae in tempo reale codici e quantità, normalizzando il flusso e inserendolo direttamente nel tuo gestionale. Zero tempo perso.',
        label: 'Con NxOrd: Pronto in 3 secondi'
      }
    },
    {
      title: 'Controllo della Rete Vendita',
      before: {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ),
        text: 'Nessun controllo reale sui trend di acquisto se non a fine mese tramite complessi fogli Excel. Ti accorgi che un cliente ha smesso di ordinare solo quando è ormai troppo tardi.',
        label: 'Nessun controllo in tempo reale'
      },
      after: {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ),
        text: 'Business Intelligence in tempo reale direttamente in un\'unica schermata. Alert predittivi di Churn per prevenire l\'abbandono dei clienti e monitoraggio agenti sempre attivo.',
        label: 'BI & Prevenzione Churn live'
      }
    },
    {
      title: 'Strategia di Vendita',
      before: {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ),
        text: 'Ordini passivi. Ti limiti ad accettare e spedire solo quello che i clienti mettono in lista. Nessuno strumento per suggerire promozioni o articoli correlati durante l\'ordine.',
        label: 'Ordini passivi e senza upselling'
      },
      after: {
        icon: (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ),
        text: 'Upselling attivo e Basket Analysis assistita dall\'AI. NxOrd analizza le abitudini del cliente e suggerisce in automatico prodotti correlati o mancanti all\'agente di vendita.',
        label: 'Upselling guidato dall\'AI'
      }
    }
  ];

  return (
    <section id="comparison" className="bg-light" style={{ padding: '80px 0' }}>
      <div className="container">
        
        {/* Intestazione Sezione */}
        <div className="text-center mb-5 reveal active">
          <p className="text-accent mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            A Confronto
          </p>
          <h2>Perché scegliere il nuovo NxOrd?</h2>
          <p className="mx-auto" style={{ maxWidth: '600px' }}>
            Scopri come cambia radicalmente la gestione del tuo business distributivo passando dal vecchio sistema reattivo alla proattività intelligente.
          </p>
        </div>

        {/* Lista dei confronti */}
        <div className="d-flex flex-column gap-5 mt-4" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {comparisonItems.map((item, index) => (
            <div key={index} className="reveal active" style={{
              backgroundColor: '#fff',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-xl)',
              padding: '24px',
              boxShadow: 'var(--shadow-sm)',
            }}>
              
              {/* Titolo Riga */}
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                textAlign: 'center',
                color: 'var(--color-heading)',
                marginBottom: '20px',
                fontFamily: 'var(--font-heading)',
                borderBottom: '1px solid var(--border-light)',
                paddingBottom: '10px'
              }}>
                {item.title}
              </h3>

              {/* Griglia Prima vs Dopo */}
              <div className="row g-4">
                
                {/* Colonna A: Prima (Rosso) */}
                <div className="col-12 col-md-6">
                  <div style={{
                    padding: '20px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'rgba(239, 68, 68, 0.02)',
                    border: '1px solid rgba(239, 68, 68, 0.1)',
                    height: '100%'
                  }}>
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div style={{
                        width: '32px', height: '32px', borderRadius: '50%',
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        {item.before.icon}
                      </div>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                        {item.before.label}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
                      {item.before.text}
                    </p>
                  </div>
                </div>

                {/* Colonna B: Con NxOrd (Verde) */}
                <div className="col-12 col-md-6">
                  <div style={{
                    padding: '20px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'rgba(16, 185, 129, 0.03)',
                    border: '1px solid rgba(16, 185, 129, 0.15)',
                    borderLeft: '4px solid #10b981',
                    height: '100%'
                  }}>
                    <div className="d-flex align-items-center gap-2 mb-3">
                      <div style={{
                        width: '32px', height: '32px', borderRadius: '50%',
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        {item.after.icon}
                      </div>
                      <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
                        {item.after.label}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--color-heading)', fontWeight: 500, lineHeight: 1.6, margin: 0 }}>
                      {item.after.text}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;
