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

        <div className="grid-3">
          {steps.map((step) => (
            <div className="card" key={step.num} style={{ borderTop: '3px solid var(--color-accent)' }}>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
