import React, { useState } from 'react';

interface BenefitDetail {
  title: string;
  points: string[];
  illustration: React.ReactNode;
}

const BenefitsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const tabs = [
    { label: 'Aumenta le vendite', id: 'sales' },
    { label: 'Ottimizza i costi', id: 'costs' },
    { label: 'Aumenta la trasparenza', id: 'transparency' },
    { label: 'Ottimizza il servizio', id: 'service' },
    { label: 'Unica soluzione', id: 'solution' }
  ];

  const details: BenefitDetail[] = [
    {
      title: "Incrementa il valore della tua clientela attuale",
      points: [
        "Non perdere mai più un'opportunità commerciale: riattiva subito i clienti a rischio abbandono grazie agli alert predittivi di Churn.",
        "Aumenta la dimensione media degli ordini promuovendo offerte mirate e articoli correlati in base allo storico d'acquisto.",
        "Usa le raccomandazioni intelligenti per indicare all'agente la prossima migliore azione di vendita da compiere."
      ],
      illustration: (
        <div style={{ padding: '24px', backgroundColor: '#f8fafc', border: '1px solid var(--border-color)', borderRadius: '8px', textAlign: 'left' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
            Alert Vendite & Prevenzione Perdite
          </div>
          <div className="d-flex flex-column gap-3">
            <div className="d-flex align-items-center gap-3 p-3 bg-white border border-light rounded">
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-heading)' }}>Rischio Churn Rilevato</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Bar Rossi: nessun ordine da 14 giorni (Solito: ogni 5 giorni)</div>
              </div>
            </div>
            <div className="d-flex align-items-center gap-3 p-3 bg-white border border-light rounded">
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-heading)' }}>Upselling Raccomandato</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Proponi Birra Premium: +15% margine su questo carrello</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Riduci i costi operativi ed elimina il lavoro manuale",
      points: [
        "Fai risparmiare fino a 5 ore alla settimana a ciascun addetto eliminando il data entry manuale e automatizzando le routine gestionali.",
        "Genera preventivi e bozze d'ordine in automatico direttamente dalle email o dai messaggi dei clienti.",
        "Consenti al tuo team di interagire facilmente con i dati aziendali attraverso un'interfaccia moderna e intuitiva."
      ],
      illustration: (
        <div style={{ padding: '24px', backgroundColor: '#f8fafc', border: '1px solid var(--border-color)', borderRadius: '8px', textAlign: 'left' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
            Statistiche Efficienza Operativa
          </div>
          <div className="row g-3 text-center">
            <div className="col-6">
              <div className="p-3 bg-white border border-light rounded">
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--color-heading)' }}>5 ore</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Risparmiate / addetto</div>
              </div>
            </div>
            <div className="col-6">
              <div className="p-3 bg-white border border-light rounded">
                <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#10b981' }}>100%</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px' }}>Inserimento automatico</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Ottieni la massima trasparenza sulle performance",
      points: [
        "Tieni traccia dell'andamento di tutti i tuoi clienti, agenti commerciali sul campo, magazzini e fornitori.",
        "Informa immediatamente il tuo team di coordinamento sui cambiamenti delle vendite senza report complessi o incomprensibili.",
        "Fornisci alla tua forza vendita una soluzione chiara per comunicare in modo asincrono, evitando sovrapposizioni e incomprensioni."
      ],
      illustration: (
        <div style={{ padding: '24px', backgroundColor: '#f8fafc', border: '1px solid var(--border-color)', borderRadius: '8px', textAlign: 'left' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
            Analisi Trasparenza Rete Vendita
          </div>
          <div className="d-flex flex-column gap-2" style={{ fontSize: '0.8125rem' }}>
            <div className="d-flex justify-content-between p-2 rounded bg-white border border-light">
              <span>Agente Rossi (Fatturato Mese)</span>
              <span style={{ fontWeight: 700, color: 'var(--color-heading)' }}>€32,850</span>
            </div>
            <div className="d-flex justify-content-between p-2 rounded bg-white border border-light">
              <span>Agente Bianchi (Fatturato Mese)</span>
              <span style={{ fontWeight: 700, color: 'var(--color-heading)' }}>€28,400</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Ottimizza il servizio e fidelizza la clientela Ho.Re.Ca.",
      points: [
        "Ottieni una panoramica completa a 360 gradi sulle esigenze e sui trend di acquisto di ciascun punto vendita.",
        "Utilizza i suggerimenti automatici basati sullo storico degli ordini per interazioni commerciali estremamente mirate.",
        "Rafforza la collaborazione tra commerciali interni (back-office) ed esterni (agenti sul campo) per lavorare come un unico team."
      ],
      illustration: (
        <div style={{ padding: '24px', backgroundColor: '#f8fafc', border: '1px solid var(--border-color)', borderRadius: '8px', textAlign: 'left' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
            Vista a 360 Gradi Cliente
          </div>
          <div style={{ fontSize: '0.8125rem', padding: '12px 16px', backgroundColor: 'var(--bg-white)', border: '1px solid var(--border-light)', borderRadius: '6px' }}>
            <div style={{ fontWeight: 700, color: 'var(--color-heading)', marginBottom: '8px' }}>Ristorante Da Giorgio</div>
            <div className="d-flex justify-content-between text-muted" style={{ fontSize: '0.75rem' }}>
              <span>Ultimo ordine: Ieri</span>
              <span>Margine Medio: 28%</span>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "La soluzione ideale costruita per la distribuzione",
      points: [
        "Sviluppata in stretta collaborazione con i migliori distributori e grossisti Ho.Re.Ca. B2B.",
        "Siamo pronti ad integrare la piattaforma in tempi record con i tuoi database gestionali ERP ed inventario.",
        "Siamo sempre disponibili: offriamo supporto continuo per l'implementazione del software ed affiancamento diretto per la formazione del tuo team."
      ],
      illustration: (
        <div style={{ padding: '24px', backgroundColor: '#f8fafc', border: '1px solid var(--border-color)', borderRadius: '8px', textAlign: 'left' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px' }}>
            Garanzia Integrazione
          </div>
          <div style={{ fontSize: '0.8125rem', padding: '16px', backgroundColor: 'var(--color-brand)', color: '#ffffff', borderRadius: '6px', textAlign: 'center', fontWeight: 700 }}>
            Implementazione ed Assistenza On-Site Garantita
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="benefits" style={{ 
      padding: '96px 0', 
      backgroundColor: 'var(--bg-white)', 
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
            Vantaggi
          </p>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.03em' }}>
            I benefici di scegliere NxOrd
          </h2>
          <p className="mx-auto mt-3" style={{ maxWidth: '640px', color: 'var(--text-muted)' }}>
            Una soluzione di sales intelligence che si affianca al tuo gestionale ERP per incrementare l'efficienza aziendale, eliminare i colli di bottiglia e spingere le vendite.
          </p>
        </div>

        {/* Layout Selettore a 2 Colonne (Tab Sidebar a Sinistra, Dettagli a Destra) */}
        <div className="row g-5 mt-2">
          
          {/* Menu Tab a Sinistra */}
          <div className="col-12 col-lg-4 d-flex flex-column gap-2 justify-content-center reveal active">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                style={{
                  textAlign: 'left',
                  padding: '16px 24px',
                  borderRadius: '8px',
                  border: '1px solid ' + (activeTab === index ? 'var(--color-heading)' : 'var(--border-color)'),
                  backgroundColor: activeTab === index ? 'var(--color-heading)' : '#ffffff',
                  color: activeTab === index ? '#ffffff' : 'var(--color-heading)',
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease-in-out'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Dettagli Contenuto a Destra */}
          <div className="col-12 col-lg-8 reveal active">
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid var(--border-color)',
              borderRadius: '12px',
              padding: '40px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div className="row g-4 align-items-center">
                
                {/* Elenco Punti Testo */}
                <div className="col-12 col-md-7">
                  <h3 style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 800, 
                    color: 'var(--color-heading)', 
                    letterSpacing: '-0.02em',
                    marginBottom: '20px' 
                  }}>
                    {details[activeTab].title}
                  </h3>
                  
                  <ul style={{ 
                    listStyle: 'none', 
                    padding: 0, 
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                  }}>
                    {details[activeTab].points.map((pt, i) => (
                      <li key={i} style={{ 
                        fontSize: '0.9375rem', 
                        lineHeight: 1.6, 
                        color: 'var(--text-body)',
                        display: 'flex',
                        gap: '12px',
                        alignItems: 'flex-start'
                      }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '3px', flexShrink: 0 }}>
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Grafica/Illustrazione di Destra */}
                <div className="col-12 col-md-5">
                  {details[activeTab].illustration}
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;
