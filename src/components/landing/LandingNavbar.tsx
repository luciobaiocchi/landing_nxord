import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { analytics } from '../../utils/analytics';

const LandingNavbar: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleLoginClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    analytics.trackLoginClick();

    const APP_URL = "https://app.nxord.com/login";
    const TEST_IMG = "https://app.nxord.com/static/logo.png";
    const img = new Image();

    img.onload = () => {
      window.location.href = APP_URL;
    };

    img.onerror = () => {
      window.location.href = "/unavailable";
    };

    img.src = `${TEST_IMG}?t=${new Date().getTime()}`;

    setTimeout(() => {
      if (!img.complete) {
        img.src = "";
        window.location.href = "/unavailable";
      }
    }, 5000);
  };

  return (
    <>
      {/* Announcement Bar (Identica a Plato seed round banner) */}
      <div style={{
        backgroundColor: '#0f172a',
        color: '#ffffff',
        fontSize: '0.8125rem',
        fontWeight: 600,
        textAlign: 'center',
        padding: '20px 16px',
        fontFamily: 'var(--font-heading)',
        letterSpacing: '0.01em',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
        <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.625rem' }}>✦</span>
        <span>NxOrd è ora disponibile per i distributori Ho.Re.Ca. italiani.</span>
        <a href="#contact" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 700 }}>
          Prenota la tua demo gratuita →
        </a>
      </div>

      {/* Main Navbar */}
      <Navbar
        expand="lg"
        className="py-3 w-100"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--border-light)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center m-0" style={{ gap: '8px' }}>
            <img
              src="/logo-circle.png"
              alt="NxOrd Logo"
              style={{ height: '30px', width: 'auto' }}
            />
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.35rem', color: 'var(--color-heading)', letterSpacing: '-0.03em' }}>
              NxOrd
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" className="border-0 shadow-none" />

          <Navbar.Collapse id="offcanvasNavbar-expand-lg">
            <Nav className="mx-auto" style={{ gap: '1.5rem' }}>
              <Nav.Link href="#benefits" onClick={(e) => handleScroll(e, 'benefits')} className="nav-link-custom">Prodotto</Nav.Link>
              <Nav.Link href="#features" onClick={(e) => handleScroll(e, 'features')} className="nav-link-custom">Sales Management</Nav.Link>
              <Nav.Link href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="nav-link-custom">Contatti</Nav.Link>
            </Nav>

            <div className="d-flex align-items-center justify-content-center gap-3 mt-3 mt-lg-0">
              <a href="https://app.nxord.com/login" onClick={handleLoginClick} style={{ 
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-heading)',
                fontSize: '0.9375rem',
                fontWeight: 700,
                textDecoration: 'none',
                padding: '8px 16px'
              }}>
                Accedi
              </a>
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="btn-primary-action" style={{ padding: '10px 20px', fontSize: '0.90625rem' }}>
                Prenota una demo
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default LandingNavbar;
