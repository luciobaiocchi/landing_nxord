import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" style={{ backgroundColor: 'var(--bg-white)', padding: '96px 0' }}>
      <div className="container">
        
        {/* BLOCCO 1: Vendite Proattive (Testo a Sinistra, Grafico a Destra) */}
        <div className="row align-items-center g-5 mb-5 pb-5 reveal active">
          <div className="col-12 col-lg-6">
            <p className="text-accent mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Sales Intelligence
            </p>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-heading)', letterSpacing: '-0.03em', marginBottom: '20px' }}>
              Gestisci le vendite in modo proattivo
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '1.0625rem', lineHeight: 1.6, marginBottom: '24px' }}>
              L'intelligenza artificiale di NxOrd analizza migliaia di segnali di acquisto ed identifica in automatico le opportunità commerciali più rilevanti per la tua rete vendita.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0 }}>
              I tuoi agenti sul campo possono agire proattivamente conoscendo in anticipo quali clienti stanno riducendo gli acquisti (rischio churn) e quali prodotti alternativi o in promozione proporre per aumentare il fatturato.
            </p>
          </div>
          
          <div className="col-12 col-lg-6">
            <div style={{
              backgroundColor: '#f8fafc',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                Rilevazione Opportunità Commerciali (Live)
              </div>
              <div className="d-flex flex-column gap-3">
                <div style={{ padding: '12px 16px', backgroundColor: '#ffffff', border: '1px solid var(--border-light)', borderRadius: '6px', borderLeft: '4px solid var(--color-accent)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-heading)' }}>Pizzeria Da Franco</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>Frequenza acquisto birre diminuita del 40%. Contattare subito.</div>
                </div>
                <div style={{ padding: '12px 16px', backgroundColor: '#ffffff', border: '1px solid var(--border-light)', borderRadius: '6px', borderLeft: '4px solid #10b981' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--color-heading)' }}>Ristorante Centrale</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>Acquista regolarmente Hamburger ma non ha ordinato Patatine.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BLOCCO 2: Automazione Manuale (Grafico a Sinistra, Testo a Destra) */}
        <div className="row align-items-center g-5 mb-5 pb-5 reveal active">
          <div className="col-12 col-lg-6 order-2 order-lg-1">
            <div style={{
              backgroundColor: '#f8fafc',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
                Flusso Automazione Risparmio Tempo
              </div>
              <div className="d-flex flex-column gap-2" style={{ fontSize: '0.8125rem' }}>
                <div className="d-flex justify-content-between p-2 rounded bg-white border border-light">
                  <span style={{ fontWeight: 600 }}>Decodifica PDF / WhatsApp</span>
                  <span style={{ color: '#10b981', fontWeight: 700 }}>Completato (3s)</span>
                </div>
                <div className="d-flex justify-content-between p-2 rounded bg-white border border-light">
                  <span style={{ fontWeight: 600 }}>Normalizzazione Codici Prodotto</span>
                  <span style={{ color: '#10b981', fontWeight: 700 }}>Completato</span>
                </div>
                <div className="d-flex justify-content-between p-2 rounded bg-white border border-light">
                  <span style={{ fontWeight: 600 }}>Inserimento in ERP Gestionale</span>
                  <span style={{ color: '#10b981', fontWeight: 700 }}>Sincronizzato</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 order-1 order-lg-2">
            <p className="text-accent mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Efficienza
            </p>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-heading)', letterSpacing: '-0.03em', marginBottom: '20px' }}>
              Automatizza le attività amministrative
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '1.0625rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Dai più tempo alla tua rete vendita per vendere e riduci drasticamente il lavoro di inserimento manuale degli ordini.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0 }}>
              NxOrd riconosce ed estrae gli ordini in tempo reale da email, messaggi e documenti inviati dai clienti, compila le proposte e le inserisce direttamente nel tuo ERP. Ogni addetto del tuo team risparmia fino a 5 ore di lavoro manuale ogni settimana.
            </p>
          </div>
        </div>

        {/* BLOCCO 3: Piattaforma Tutto-in-Uno (Testo a Sinistra, Grafico a Destra) */}
        <div className="row align-items-center g-5 reveal active">
          <div className="col-12 col-lg-6">
            <p className="text-accent mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Integrazione ERP
            </p>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-heading)', letterSpacing: '-0.03em', marginBottom: '20px' }}>
              Piattaforma integrata senza sostituire il tuo ERP
            </h2>
            <p style={{ color: 'var(--text-body)', fontSize: '1.0625rem', lineHeight: 1.6, marginBottom: '24px' }}>
              Ottieni l'accesso alle più moderne tecnologie di automazione delle vendite senza la necessità di sostituire i tuoi software gestionali o di cambiare le abitudini operative del tuo team.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem', lineHeight: 1.6, margin: 0 }}>
              NxOrd si posiziona come un add-on intelligente sopra il tuo sistema ERP o di magazzino attuale. L'integrazione è rapida, sicura e indolore, assicurando ai distributori Ho.Re.Ca. un vantaggio competitivo immediato e tangibile.
            </p>
          </div>

          <div className="col-12 col-lg-6">
            <div style={{
              backgroundColor: '#f8fafc',
              border: '1px solid var(--border-color)',
              borderRadius: '8px',
              padding: '24px',
              boxShadow: 'var(--shadow-sm)',
              textAlign: 'center'
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{ padding: '12px 20px', backgroundColor: '#ffffff', border: '1px solid var(--border-light)', borderRadius: '6px', fontWeight: 700, color: 'var(--color-heading)', fontSize: '0.875rem' }}>
                  Tuo ERP Attuale
                </div>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 3a2.82 2.82 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                </svg>
                <div style={{ padding: '12px 20px', backgroundColor: 'var(--color-brand)', borderRadius: '6px', fontWeight: 700, color: '#ffffff', fontSize: '0.875rem' }}>
                  NxOrd Intelligence
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;
