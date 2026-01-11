import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/landing.css';

const NotFoundPage: React.FC = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate('/');
    };

  return (
    <div className="landing-page position-relative d-flex flex-column align-items-center justify-content-center overflow-hidden" style={{ minHeight: '100vh', background: '#050505' }}>
      {/* FORCE DARK BACKGROUND LAYER */}
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ backgroundColor: '#050505', zIndex: -1 }}></div>

      {/* Background Elements - Consistent with HeroSection */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 0 }}>
        <div className="position-absolute top-0 start-50 translate-middle rounded-circle animate-float" 
             style={{ width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(0,200,83,0.08) 0%, rgba(255,255,255,0) 70%)', filter: 'blur(60px)' }}></div>
        <div className="position-absolute bottom-0 end-0 rounded-circle animate-float delay-500" 
             style={{ width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(0,145,234,0.08) 0%, rgba(255,255,255,0) 70%)', filter: 'blur(60px)' }}></div>
      </div>

      {/* Branding Header */}
      <div className="position-absolute top-0 start-0 w-100 p-4 z-3">
          <Container>
            <span className="fw-bold fs-3 text-light tracking-tight">NextOrder</span>
          </Container>
      </div>

      <Container className="position-relative z-2">
        <Row className="justify-content-center text-center">
          <Col md={8} lg={6}>
            <div className="glass-panel p-5 animate-fade-in border-secondary border-opacity-25">
              <h1 className="display-huge fw-bold mb-4 text-gradient-green" style={{ fontSize: '6rem' }}>404</h1>
              <h2 className="h2 fw-bold mb-4 text-light">Pagina Non Trovata</h2>
              <p className="lead text-white-50 mb-5">
                La pagina che stai cercando non esiste o è stata spostata.
              </p>
              
              <div className="d-flex justify-content-center">
                <button 
                  onClick={handleGoBack} 
                  className="btn btn-outline-green btn-lg px-5"
                >
                  Torna alla Home
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFoundPage;
