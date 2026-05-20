import React from 'react';

const testimonials = [
  {
    quote: "Abbiamo scelto NxOrd perché ci offre insight guidati dai dati in tempo reale. Ora identifichiamo opportunità e rischi in pochi secondi, tracciando ogni interazione con i clienti.",
    author: "Giorgio R.",
    role: "Direttore Commerciale",
    company: "D&B Distribuzione Bevande",
    initials: "GR"
  },
  {
    quote: "I nostri agenti risparmiano fino a 5 ore alla settimana grazie all'inserimento automatico degli ordini. La comunicazione tra interno, agenti sul campo e logistica è finalmente fluida.",
    author: "Marco B.",
    role: "Titolare",
    company: "Ho.Re.Ca. Distribuzione Nord",
    initials: "MB"
  },
  {
    quote: "L'integrazione con il nostro ERP è stata completata in sole tre settimane. Il progetto software più efficiente e professionale a cui abbiamo mai partecipato.",
    author: "Elena V.",
    role: "Responsabile IT",
    company: "Gruppo Alimentare Sempione",
    initials: "EV"
  }
];

const StarRow: React.FC = () => (
  <div style={{ display: 'flex', gap: '3px', marginBottom: '20px' }}>
    {[...Array(5)].map((_, i) => (
      <svg key={i} width="15" height="15" viewBox="0 0 24 24" fill="var(--color-accent)" stroke="none">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ))}
  </div>
);

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" style={{
      padding: '96px 0',
      backgroundColor: 'var(--bg-main)',
      borderBottom: '1px solid var(--border-light)'
    }}>
      <div className="container">

        <div className="text-center mb-5 reveal active">
          <p className="text-accent mb-2" style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 700,
            fontSize: '0.8125rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em'
          }}>
            Testimonianze
          </p>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
            Cosa dicono i nostri clienti
          </h2>
        </div>

        <div className="row g-4 justify-content-center">
          {testimonials.map((item, index) => (
            <div key={index} className="col-12 col-lg-4 reveal active">
              <div style={{
                backgroundColor: 'var(--bg-white)',
                border: '1px solid var(--border-color)',
                borderRadius: '12px',
                padding: '40px 32px',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <StarRow />

                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.65,
                  color: 'var(--color-heading)',
                  margin: 0,
                  fontWeight: 500,
                  flex: 1
                }}>
                  "{item.quote}"
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  marginTop: '28px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border-light)'
                }}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-heading)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    flexShrink: 0
                  }}>
                    {item.initials}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--color-heading)', fontSize: '0.9375rem' }}>
                      {item.author}
                    </div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', marginTop: '2px' }}>
                      {item.role} · {item.company}
                    </div>
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

export default TestimonialsSection;
