import React from 'react';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import { analytics } from '../../utils/analytics';

const LandingNavbar: React.FC = () => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleScroll = (e: React.MouseEvent<HTMLElement>, targetId: string) => {
    e.preventDefault();
    handleClose();
    const element = document.getElementById(targetId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const handleLoginClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Evento GA4
    analytics.trackLoginClick();

    const APP_URL = "https://app.nxord.com/login";
    const TEST_IMG = "https://app.nxord.com/static/logo.png";

    const img = new Image();

    img.onload = () => {
      // App is reachable — go to login
      window.location.href = APP_URL;
    };

    img.onerror = () => {
      // App is down — show maintenance page
      window.location.href = "/unavailable";
    };

    img.src = `${TEST_IMG}?t=${new Date().getTime()}`;

    // Safety timeout
    setTimeout(() => {
      if (!img.complete) {
        img.src = "";
        window.location.href = "/unavailable";
      }
    }, 5000);
  };

  return (
    <Navbar
      expand="lg"
      className="py-2 w-100"
      style={{
        backgroundColor: 'rgba(248, 250, 252, 0.85)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-light)',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      }}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center m-0" style={{ gap: '10px' }}>
          <img
            src="/logo-circle.png"
            alt="NxOrd Logo"
            style={{ height: '32px', width: 'auto' }}
          />
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-heading)', letterSpacing: '-0.02em' }}>
            NxOrd
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" onClick={handleShow} className="border-0 shadow-none" />

        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          placement="end"
          show={show}
          onHide={handleClose}
          style={{ backgroundColor: 'var(--bg-main)' }}
        >
          <Offcanvas.Header closeButton />
          <Offcanvas.Body className="align-items-center">
            <Nav className="mx-auto text-center" style={{ gap: '0.25rem' }}>
              <Nav.Link href="#features" onClick={(e) => handleScroll(e, 'features')} className="nav-link-custom mx-lg-2">Come Funziona</Nav.Link>
              <Nav.Link href="#about" onClick={(e) => handleScroll(e, 'about')} className="nav-link-custom mx-lg-2">Chi Siamo</Nav.Link>
              <Nav.Link href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="nav-link-custom mx-lg-2">Contatti</Nav.Link>
            </Nav>
            <div className="text-center mt-3 mt-lg-0 ms-lg-3">
              <a href="https://app.nxord.com/login" onClick={handleLoginClick} className="btn-ghost-primary">
                Login Cliente
              </a>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default LandingNavbar;
