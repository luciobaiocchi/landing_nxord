
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import featureAutomation from '../../assets/0_order_list_dark.png';
import featureAi from '../../assets/0_confronto_ordine_dark.png';
import '../../styles/landing.css';

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-5 position-relative overflow-hidden">
      <Container className="py-5">
        <div className="text-center mb-5 reveal">
          <h2 className="display-3 fw-bold mb-4 text-light">Potenza Pura. <br /><span className="text-gradient-green">Semplicità Assoluta.</span></h2>
          <p className="lead text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
            Abbiamo progettato NextOrder per essere incredibilmente potente, ma sorprendentemente semplice da usare.
          </p>
        </div>

        {/* Feature 1: Automation */}
        <Row className="align-items-center mb-5 pb-5 reveal">
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="position-relative">
              <div className="position-absolute top-50 start-50 translate-middle rounded-circle" 
                   style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,255,65,0.1) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(50px)', zIndex: -1 }}></div>
              <img src={featureAutomation} alt="Automazione Email" className="img-fluid rounded-4 shadow-lg border border-secondary border-opacity-25" />
            </div>
          </Col>
          <Col lg={6} className="ps-lg-5">
            <h3 className="display-5 fw-bold mb-3 text-light">Ricezione Email <span className="text-gradient-green">Istantanea</span></h3>
            <p className="lead text-white-50 mb-4">
              Il sistema monitora costantemente la tua casella di posta. Non appena arriva un ordine, NextOrder lo cattura, lo analizza e lo prepara per te.
            </p>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2 d-flex align-items-center"><span className="text-success me-2">✓</span> Monitoraggio 24/7</li>
              <li className="mb-2 d-flex align-items-center"><span className="text-success me-2">✓</span> Filtro intelligente spam</li>
              <li className="mb-2 d-flex align-items-center"><span className="text-success me-2">✓</span> Conversione con i prodotti specifici nel tuo magazzino</li>
            </ul>
          </Col>
        </Row>

        {/* Feature 2: AI Analysis */}
        <Row className="align-items-center mt-5 pt-5 reveal">
          <Col lg={6} className="order-lg-2 mb-4 mb-lg-0">
            <div className="position-relative">
              <div className="position-absolute top-50 start-50 translate-middle rounded-circle" 
                   style={{ width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0,255,65,0.1) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(50px)', zIndex: -1 }}></div>
              <img src={featureAi} alt="Analisi AI" className="img-fluid rounded-4 shadow-lg border border-secondary border-opacity-25" />
            </div>
          </Col>
          <Col lg={6} className="order-lg-1 pe-lg-5">
            <h3 className="display-5 fw-bold mb-3 text-light">Intelligenza <span className="text-gradient-green">Generativa</span></h3>
            <p className="lead text-white-50 mb-4">
              Non usiamo semplici regole. La nostra AI legge e comprende il contenuto delle email come farebbe un umano, ma alla velocità della luce.
            </p>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2 d-flex align-items-center"><span className="text-success me-2">✓</span> Associa descrizioni vaghe ai codici esatti del tuo magazzino</li>
              <li className="mb-2 d-flex align-items-center"><span className="text-success me-2">✓</span> Identifica automaticamente mittente e condizioni commerciali</li>
              <li className="mb-2 d-flex align-items-center"><span className="text-success me-2">✓</span> Si adatta al tuo catalogo e impara autonomamente</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;
