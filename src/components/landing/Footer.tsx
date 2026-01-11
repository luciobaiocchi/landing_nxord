import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/landing.css';

const Footer: React.FC = () => {
  return (
    <footer className="py-4 border-top border-secondary border-opacity-25 bg-transparent">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <span className="fw-bold text-light fs-5 me-2">NextOrder</span>
            <span className="text-white-50 small">© 2025 Tutti i diritti riservati.</span>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="/privacy" className="text-white-50 text-decoration-none small me-3 hover-light">Privacy Policy</a>
            <a href="/terms" className="text-white-50 text-decoration-none small hover-light">Termini di Servizio</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
