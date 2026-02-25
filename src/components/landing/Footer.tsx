import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-heading)', padding: '40px 0 32px' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start" style={{ gap: '10px' }}>
              <span className="fw-bold fs-5" style={{ color: '#f8fafc', fontFamily: 'var(--font-heading)' }}>NxOrd</span>
            </div>
            <p className="small mt-2 mb-0" style={{ color: '#94a3b8' }}>
              © 2025 NxOrd. Tutti i diritti riservati.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="/privacy" className="text-decoration-none small me-4" style={{ color: '#94a3b8', transition: 'color 0.2s' }}>Privacy Policy</a>
            <a href="/terms" className="text-decoration-none small" style={{ color: '#94a3b8', transition: 'color 0.2s' }}>Termini di Servizio</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
