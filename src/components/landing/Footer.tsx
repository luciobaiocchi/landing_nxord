import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { analytics } from '../../utils/analytics';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-heading)', padding: '40px 0 32px' }}>
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <a href="/" className="text-decoration-none d-flex align-items-center justify-content-center justify-content-md-start" style={{ gap: '10px' }}>
              <span className="fw-bold fs-5" style={{ color: '#f8fafc', fontFamily: 'var(--font-heading)' }}>NxOrd</span>
            </a>
            <p className="small mt-2 mb-0" style={{ color: '#94a3b8' }}>
              © 2025 NxOrd. Tutti i diritti riservati.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="#gestisci-consenso" onClick={(e) => { e.preventDefault(); analytics.trackEvent('Engagement', 'Gestisci Consenso', 'Footer'); document.cookie = "CookieConsent=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; window.location.reload(); }} className="text-decoration-none small me-4" style={{ color: '#94a3b8', transition: 'color 0.2s' }}>Gestisci Consenso Cookie</a>
            <a href="/cookie-policy" onClick={() => analytics.trackEvent('Engagement', 'View Cookie Policy', 'Footer')} className="text-decoration-none small me-4" style={{ color: '#94a3b8', transition: 'color 0.2s' }}>Cookie Policy</a>
            <a href="/privacy" onClick={() => analytics.trackEvent('Engagement', 'View Privacy Policy', 'Footer')} className="text-decoration-none small me-4" style={{ color: '#94a3b8', transition: 'color 0.2s' }}>Privacy Policy</a>
            <a href="/terms" onClick={() => analytics.trackEvent('Engagement', 'View Terms', 'Footer')} className="text-decoration-none small" style={{ color: '#94a3b8', transition: 'color 0.2s' }}>Termini di Servizio</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
