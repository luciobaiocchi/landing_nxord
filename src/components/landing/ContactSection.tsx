
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/landing.css';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-5">
      <Container className="reveal py-5">
        <Row className="justify-content-center">
          <Col lg={8} className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-light">Vuoi provare la potenza di NextOrder?</h2>
            <p className="lead text-white-50">
              Contattaci per entrare nella lista d'attesa e trasformare il tuo modo di lavorare.
            </p>
            <div className="mt-4 p-3 glass-panel d-inline-block">
              <span className="text-white-50 me-2">Scrivici a:</span>
              <a href="mailto:info@nxord.com" className="text-gradient-green fw-bold text-decoration-none fs-5">
                info@nxord.com
              </a>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={8} lg={6} className="text-center">
            <div className="glass-panel p-5">
              <p className="text-white-50 mb-4">
                Attualmente accettiamo nuovi clienti solo su invito o tramite richiesta diretta.
                Scrivici per presentare la tua azienda.
              </p>
              <a 
                href="mailto:info@nxord.com" 
                className="btn btn-primary-glow btn-lg text-decoration-none"
              >
                Invia una Richiesta via Email
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSection;
