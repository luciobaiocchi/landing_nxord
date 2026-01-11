import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import LandingNavbar from '../components/landing/LandingNavbar';
import Footer from '../components/landing/Footer';
import '../styles/landing.css';

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="landing-page" style={{ minHeight: '100vh', background: '#050505', position: 'relative', overflowX: 'hidden' }}>
      {/* FORCE DARK BACKGROUND LAYER */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: '#050505', zIndex: -1 }}></div>
      
      <LandingNavbar />
      
      <Container className="pt-5 pb-5">
        <Row className="justify-content-center pt-5">
          <Col lg={10} xl={8} className="pt-5">
            <h1 className="h2 fw-bold text-light mb-4 text-gradient-green">Privacy Policy</h1>
            <p className="text-white-50 mb-5 border-bottom border-secondary border-opacity-25 pb-4">
              Ultimo aggiornamento: 11 Gennaio 2026
            </p>

            <div className="text-white-50">
              <section className="mb-5">
                <h2 className="h4 text-light fw-bold mb-3">1. Titolare del Trattamento dei Dati</h2>
                <p>
                  <strong>NextOrder</strong><br />
                  Sede legale: Milano, Italia<br />
                  Email di contatto del Titolare: privacy@nxord.com
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 text-light fw-bold mb-3">2. Tipologie di Dati raccolti</h2>
                <p className="mb-3">
                  Tra i Dati Personali raccolti da questa Applicazione, in modo autonomo o tramite terze parti, ci sono:
                </p>
                <ul className="mb-3">
                  <li>Dati di utilizzo e Cookie;</li>
                  <li>Email, Nome, Cognome, Numero di Telefono (tramite moduli di contatto o registrazione);</li>
                  <li>Dati relativi agli ordini e allo storico acquisti (per il funzionamento del servizio).</li>
                </ul>
                <p>
                  Dettagli completi su ciascuna tipologia di dati raccolti sono forniti nelle sezioni dedicate di questa privacy policy o mediante specifici testi informativi visualizzati prima della raccolta dei dati stessi.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 text-light fw-bold mb-3">3. Finalità del Trattamento</h2>
                <p>
                  I Dati dell'Utente sono raccolti per consentire al Titolare di fornire il Servizio, adempiere agli obblighi di legge, rispondere a richieste o azioni esecutive, tutelare i propri diritti ed interessi (o quelli di Utenti o di terze parti), individuare eventuali attività dolose o fraudolente, nonché per le seguenti finalità:
                </p>
                <ul>
                  <li>Gestione ordini e pagamenti;</li>
                  <li>Contattare l'Utente (es. mailing list, newsletter, comunicazioni transazionali);</li>
                  <li>Gestione dei tag e Analytics;</li>
                  <li>Interazione con piattaforme esterne e social network.</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h4 text-light fw-bold mb-3">4. Modalità e luogo del trattamento</h2>
                <h3 className="h6 text-light fw-bold mt-4 mb-2">Modalità di trattamento</h3>
                <p>
                  Il Titolare adotta le opportune misure di sicurezza volte ad impedire l’accesso, la divulgazione, la modifica o la distruzione non autorizzate dei Dati Personali.
                  Il trattamento viene effettuato mediante strumenti informatici e/o telematici, con modalità organizzative e con logiche strettamente correlate alle finalità indicate.
                </p>

                <h3 className="h6 text-light fw-bold mt-4 mb-2">Luogo</h3>
                <p>
                  I Dati sono trattati presso le sedi operative del Titolare ed in ogni altro luogo in cui le parti coinvolte nel trattamento siano localizzate.
                  Il trasferimento dei dati al di fuori dello Spazio Economico Europeo (SEE) avviene solo verso paesi che garantiscono un livello di protezione adeguato o sulla base di clausole contrattuali standard approvate dalla Commissione Europea.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 text-light fw-bold mb-3">5. Periodo di conservazione</h2>
                <p>
                  I Dati sono trattati e conservati per il tempo richiesto dalle finalità per le quali sono stati raccolti.
                  Pertanto:
                </p>
                <ul>
                  <li>I Dati Personali raccolti per scopi collegati all’esecuzione di un contratto tra il Titolare e l’Utente saranno trattenuti sino a quando sia completata l’esecuzione di tale contratto.</li>
                  <li>I Dati Personali raccolti per finalità riconducibili all’interesse legittimo del Titolare saranno trattenuti sino al soddisfacimento di tale interesse.</li>
                </ul>
              </section>

              <section className="mb-5">
                <h2 className="h4 text-light fw-bold mb-3">6. Diritti dell’Utente (GDPR)</h2>
                <p className="mb-3">
                  Gli Utenti possono esercitare determinati diritti con riferimento ai Dati trattati dal Titolare. In particolare, l’Utente ha il diritto di:
                </p>
                <ul>
                  <li><strong>Revocare il consenso</strong> in ogni momento.</li>
                  <li><strong>Opporsi al trattamento</strong> dei propri Dati.</li>
                  <li><strong>Accedere ai propri Dati</strong>.</li>
                  <li><strong>Verificare e chiedere la rettificazione</strong>.</li>
                  <li><strong>Ottenere la limitazione del trattamento</strong>.</li>
                  <li><strong>Ottenere la cancellazione o rimozione</strong> dei propri Dati Personali.</li>
                  <li><strong>Ricevere i propri Dati o farli trasferire</strong> ad altro titolare (Portabilità).</li>
                  <li><strong>Proporre reclamo</strong> all'autorità di controllo della protezione dei dati personale competente o agire in sede giudiziaria.</li>
                </ul>
                <p className="mt-3">
                  Per esercitare i diritti dell'Utente, le richieste possono essere indirizzate al Titolare agli estremi di contatto indicati in questo documento.
                </p>
              </section>

              <section className="mb-5">
                <h2 className="h4 text-light fw-bold mb-3">7. Modifiche a questa privacy policy</h2>
                <p>
                  Il Titolare del Trattamento si riserva il diritto di apportare modifiche alla presente privacy policy in qualunque momento notificandolo agli Utenti su questa pagina e, se possibile, su questa Applicazione. Si prega dunque di consultare con frequenza questa pagina, facendo riferimento alla data di ultima modifica indicata in alto.
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

export default PrivacyPolicyPage;
