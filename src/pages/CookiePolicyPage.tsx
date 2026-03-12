import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LandingNavbar from '../components/landing/LandingNavbar';
import Footer from '../components/landing/Footer';
import '../styles/landing.css';

const CookiePolicyPage: React.FC = () => {
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
              <h1 className="mb-3">Cookie Policy</h1>
              <p style={{ color: 'var(--text-muted)' }}>
                Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="card text-start" style={{ padding: 'clamp(24px, 5vw, 48px)', borderTop: '4px solid var(--color-brand)' }}>
              <section className="mb-5">
                <h2 className="h4 mb-3 text-accent">1. Cosa sono i Cookie?</h2>
                <p>
                  I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, ove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. I cookie delle c.d. "terze parti" vengono, invece, impostati da un sito web diverso da quello che l'utente sta visitando.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 mb-3 text-accent">2. Cookie tecnici e di opt-in</h2>
                <p>
                  Questo sito utilizza un cookie tecnico chiamato <code>CookieConsent</code> per memorizzare le preferenze dell'utente relative all'accettazione o al rifiuto dei cookie analitici. Questo cookie non raccoglie informazioni personali e ha una durata di 365 giorni.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 mb-3 text-accent">3. Cookie analitici (Google Analytics 4)</h2>
                <p>
                  Questo sito utilizza Google Analytics 4 (GA4), un servizio web fornito da Google Ireland Limited. Utilizziamo GA4 con impostazioni che prevedono l'anonimizzazione degli indirizzi IP, per raccogliere dati aggregati sulle visite (es. pagine viste, tempo di permanenza).
                </p>
                <p>
                  I dati potrebbero essere trasferiti ai server di Google negli Stati Uniti, in conformità agli accordi quadro sul trasferimento dati (Data Privacy Framework). I cookie analitici vengono installati solo ed esclusivamente previo tuo esplicito consenso cliccando su "Accetto" nel banner iniziale.
                </p>
                <p>
                  Per maggiori informazioni, puoi consultare la <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-heading)' }}>Privacy Policy di Google</a> e scaricare il <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-heading)' }}>Componente aggiuntivo per disattivare Analytics</a>.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 mb-3 text-accent">4. Gestione delle preferenze e Revoca del Consenso</h2>
                <p>
                  Puoi modificare o revocare il tuo consenso in qualsiasi momento. Per farlo, puoi cliccare sul <a href="#gestisci-consenso" onClick={(e) => { e.preventDefault(); document.cookie = "CookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; window.location.reload(); }} style={{ color: 'var(--color-brand)', fontWeight: 600 }}>seguente link per revocare il consenso</a>, che eliminerà il cookie tecnico e ricaricherà la pagina facendoti riapparire il banner.
                </p>
                <p>
                  Inoltre, l'utente può gestire le preferenze relative ai cookie direttamente all'interno del proprio browser ed impedire – ad esempio – che terze parti possano installarne. Tramite le preferenze del browser è inoltre possibile eliminare i cookie installati in passato.
                </p>
              </section>
              
              <section className="mb-0">
                <h2 className="h4 mb-3 text-accent">5. Titolare del Trattamento e Contatti</h2>
                <p className="mb-3">
                  Il Titolare del trattamento dei dati è <strong>NextOrder</strong>, con sede legale in Milano, Italia. (In fase di costituzione societaria - i dettagli legali completi come P.IVA e indirizzo specifico verranno aggiornati non appena disponibili).
                </p>
                <p className="mb-3">
                  Per qualsiasi domanda o per esercitare i tuoi diritti, puoi scriverci a: <a href="mailto:info@nxord.com" style={{ color: 'var(--color-heading)', fontWeight: 500 }}>info@nxord.com</a>.
                </p>
                <p className="mb-0">
                  Per ulteriori dettagli sul trattamento dei dati, consulta la nostra <a href="/privacy" style={{ color: 'var(--color-brand)', fontWeight: 600 }}>Privacy Policy completa</a>.
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

export default CookiePolicyPage;
