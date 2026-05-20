import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Abbiamo scelto NxOrd per gestire le nostre operazioni commerciali perché ci offre una piattaforma strategica potenziata da insight guidati dai dati. Ora possiamo identificare opportunità e rischi in pochi secondi, tracciando le interazioni con i clienti in tempo reale.",
      author: "Giorgio R.",
      role: "Direttore Commerciale, D&B Distribuzione Bevande"
    },
    {
      quote: "Grazie alla creazione automatica di ordini ed offerte nel nostro ERP e all'interfaccia estremamente intuitiva, i nostri agenti risparmiano fino a 5 ore alla settimana. La comunicazione tra interno, agenti sul campo e logistica è finalmente fluida ed efficiente.",
      author: "Marco B.",
      role: "Titolare, Ho.Re.Ca. Distribuzione Nord"
    },
    {
      quote: "L'integrazione di NxOrd con il nostro software ERP e di inventario non è stata un incubo informatico: la configurazione è stata rapida, professionale e completata in sole tre settimane. È stato il progetto software più efficiente a cui abbiamo mai partecipato.",
      author: "Elena V.",
      role: "Responsabile IT, Gruppo Alimentare Sempione"
    }
  ];

  return (
    <section id="testimonials" style={{ 
      padding: '80px 0', 
      backgroundColor: 'var(--bg-main)', 
      borderBottom: '1px solid var(--border-light)' 
    }}>
      <div className="container">
        
        {/* Intestazione Sezione */}
        <div className="text-center mb-5 reveal active">
          <p className="text-accent mb-2" style={{ 
            fontFamily: 'var(--font-heading)', 
            fontWeight: 700, 
            fontSize: '0.8125rem', 
            textTransform: 'uppercase', 
            letterSpacing: '0.1em' 
          }}>
            Opinioni
          </p>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Cosa dicono i nostri partner</h2>
        </div>

        {/* Griglia delle Testimonianze (Minimaliste, Plato-Style) */}
        <div className="row g-4 justify-content-center mt-2">
          {testimonials.map((item, index) => (
            <div key={index} className="col-12 col-lg-4 reveal active">
              <div style={{
                backgroundColor: 'var(--bg-white)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '32px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div>
                  {/* Quote icon/bracket SVG */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.5, marginBottom: '20px' }}>
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <p style={{ 
                    fontSize: '0.9375rem', 
                    lineHeight: 1.6, 
                    color: 'var(--color-heading)', 
                    fontStyle: 'italic', 
                    marginBottom: '24px' 
                  }}>
                    "{item.quote}"
                  </p>
                </div>
                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
                  <div style={{ fontWeight: 700, color: 'var(--color-heading)', fontSize: '0.90625rem' }}>{item.author}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', marginTop: '2px' }}>{item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
