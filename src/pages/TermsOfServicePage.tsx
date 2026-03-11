import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LandingNavbar from '../components/landing/LandingNavbar';
import Footer from '../components/landing/Footer';
import '../styles/landing.css';

const TermsOfServicePage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

  return (
    <div className="landing-page bg-tech-dots" style={{ minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
      <LandingNavbar />
      
      <Container className="pt-5 pb-5">
        <Row className="justify-content-center pt-5">
          <Col lg={10} xl={8} className="pt-5 mt-4">
            <div className="text-center mb-5">
              <h1 className="mb-3">Termini di Servizio</h1>
              <p style={{ color: 'var(--text-muted)' }}>
                Ultimo aggiornamento: 11 Gennaio 2026
              </p>
            </div>

            <div className="card text-start" style={{ padding: 'clamp(24px, 5vw, 48px)', borderTop: '4px solid var(--color-brand)' }}>
              <section className="mb-5">
                <h2 className="h4 mb-3 text-accent">1. Accettazione dei Termini</h2>
                <p>
                  Accedendo o utilizzando i servizi forniti da <strong>NextOrder</strong> ("l'Azienda", "noi"), l'utente accetta di essere vincolato dai presenti Termini di Servizio ("Termini"). Se non si accettano questi Termini, si prega di non utilizzare i nostri servizi.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 mb-3 text-accent">2. Descrizione del Servizio</h2>
                <p>
                  NextOrder fornisce una piattaforma software per l'automazione della gestione ordini tramite intelligenza artificiale. Ci riserviamo il diritto di modificare, sospendere o interrompere il servizio (o parte di esso) in qualsiasi momento, con o senza preavviso.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 mb-3 text-accent">3. Account Utente</h2>
                <p>
                  Per utilizzare alcune funzionalità del Servizio, potrebbe essere necessario registrare un account. L'utente è responsabile di mantenere la riservatezza delle credenziali del proprio account e di tutte le attività che si verificano sotto tale account.
                </p>
                <ul className="ps-4" style={{ color: 'var(--text-body)' }}>
                  <li className="mb-2">L'utente deve fornire informazioni accurate e complete durante la registrazione.</li>
                  <li className="mb-2">L'utente non può utilizzare il Servizio per scopi illegali o non autorizzati.</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h4 mb-3 text-accent">4. Responsabilità dell'Utente</h2>
                <p>
                  L'utente accetta di non:
                </p>
                <ul className="ps-4" style={{ color: 'var(--text-body)' }}>
                    <li className="mb-2">Violare leggi, diritti di terzi o i nostri Termini;</li>
                    <li className="mb-2">Utilizzare il Servizio per inviare spam o comunicazioni non richieste;</li>
                    <li className="mb-2">Interferire con o interrompere l'integrità o le prestazioni del Servizio;</li>
                    <li className="mb-2">Tentare di ottenere accesso non autorizzato al Servizio o ai sistemi correlati.</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h4 mb-3 text-accent">5. Proprietà Intellettuale</h2>
                <p>
                  Il Servizio e il suo contenuto originale (escluso il Contenuto fornito dagli utenti), le caratteristiche e le funzionalità sono e rimarranno di proprietà esclusiva di NextOrder e dei suoi licenziatari. Il Servizio è protetto da copyright, marchi e altre leggi sia in Italia che in paesi stranieri.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 mb-3 text-accent">6. Limitazione di Responsabilità</h2>
                <p>
                  In nessun caso NextOrder, i suoi direttori, dipendenti, partner, agenti, fornitori o affiliati, saranno responsabili per danni indiretti, incidentali, speciali, consequenziali o punitivi, derivanti dall'accesso o dall'uso (o dall'incapacità di accedere o utilizzare) il Servizio.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 mb-3 text-accent">7. Legge Applicabile</h2>
                <p>
                  I presenti Termini saranno regolati e interpretati in conformità con le leggi italiane, senza riguardo alle disposizioni sui conflitti di legge. Il foro competente esclusivo per qualsiasi controversia sarà quello di Milano.
                </p>
              </section>

              <section className="mb-0">
                <h2 className="h4 mb-3 text-accent">8. Contatti</h2>
                <p className="mb-0">
                  Per qualsiasi domanda riguardante questi Termini, si prega di contattarci all'indirizzo email: <a href="mailto:info@nxord.com" style={{ color: 'var(--color-heading)', fontWeight: 500 }}>info@nxord.com</a>
                </p>
              </section>
            </div>
          </Col>
        </Row>
      </Container>
      
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
