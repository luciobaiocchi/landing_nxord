import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/landing.css';

const HeroSection: React.FC = () => {
  return (
    <section className="position-relative d-flex flex-column align-items-center pt-5 overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: -1 }}>
        <div className="position-absolute top-0 start-50 translate-middle rounded-circle animate-float" 
             style={{ width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(0,200,83,0.08) 0%, rgba(255,255,255,0) 70%)', filter: 'blur(60px)' }}></div>
        <div className="position-absolute bottom-0 end-0 rounded-circle animate-float delay-500" 
             style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,145,234,0.08) 0%, rgba(255,255,255,0) 70%)', filter: 'blur(60px)' }}></div>
      </div>

      <Container className="pt-5 mt-5">
        <Row className="justify-content-center text-center">
          <Col lg={10} className="position-relative z-1">
            <h1 className="display-huge fw-bold mb-4 animate-fade-in text-light" style={{ marginTop: '3rem' }}>
              Il Futuro della <br />
              <span className="text-gradient-green">Gestione Ordini</span>
            </h1>
            <p className="lead text-white-50 mb-5 mx-auto animate-fade-in delay-100" style={{ maxWidth: '700px' }}>
              NextOrder automatizza il tuo flusso di lavoro con l'Intelligenza Artificiale. 
              Dimentica l'inserimento manuale, concentrati sulla crescita.
            </p>
            <div className="d-flex justify-content-center gap-3 mb-5 animate-fade-in delay-200">
              <a href="#contact" className="btn btn-primary-glow btn-lg">
                Richiedi Accesso Anticipato
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
