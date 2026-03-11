import React from 'react';

const FeaturesSection: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Il cliente invia la solita email',
      desc: 'Nessun cambiamento per i tuoi clienti: continuano a inviare gli ordini come hanno sempre fatto, senza dover imparare nuovi portali o app.',
    },
    {
      num: '02',
      title: 'Estrazione e Normalizzazione',
      desc: "NxOrd analizza il testo dell'email ed estrae automaticamente i dati: codici prodotto esatti, quantità e note, uniformandoli al tuo catalogo.",
    },
    {
      num: '03',
      title: 'Pronto per il tuo gestionale',
      desc: "L'ordine è formattato e direttamente esportabile o integrabile nel tuo gestionale. Nessun copia-incolla, zero errori umani.",
    },
  ];

  return (
    <section id="features" className="bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-accent mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Processo
          </p>
          <h2>Come Funziona</h2>
          <p className="mx-auto" style={{ maxWidth: '600px' }}>
            Un processo trasparente e immediato, progettato per integrarsi senza attriti nel tuo flusso di lavoro.
          </p>
        </div>

        <div className="d-flex flex-column align-items-center position-relative" style={{ maxWidth: '600px', margin: '0 auto' }}>
          {steps.map((step, index) => (
            <React.Fragment key={step.num}>
              <div 
                className="card w-100 text-center" 
                style={{ 
                  borderTop: '3px solid var(--color-accent)',
                  position: 'relative',
                  zIndex: 2,
                  backgroundColor: '#fff' // Ensure it covers the line behind if it overlaps
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '2rem',
                  color: 'var(--color-accent)',
                  opacity: 0.3,
                  lineHeight: 1,
                  marginBottom: '16px',
                  display: 'block',
                }}>
                  {step.num}
                </span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>

              {/* Dotted connecting line between cards, except after the last card */}
              {index !== steps.length - 1 && (
                <div 
                  style={{
                    height: '40px',
                    width: '0',
                    borderLeft: '2px dashed var(--color-accent)',
                    margin: '10px 0',
                    opacity: 0.5
                  }}
                ></div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Video Embed */}
        <div className="mt-5" style={{ maxWidth: '800px', margin: '4rem auto 0 auto' }}>
          <div className="p-2 rounded-4 overflow-hidden shadow-lg bg-white border border-light">
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe 
                src="https://www.youtube.com/embed/SZ4asFQi1tw" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '0.5rem' }}
                title="NextOrder Demo"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
