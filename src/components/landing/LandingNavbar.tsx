import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../translations';
import { analytics } from '../../utils/analytics';

const LandingNavbar: React.FC = () => {
  const { lang, setLang } = useLang();
  const tr = t[lang];
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 200);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLoginClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    analytics.trackLoginClick();
    const APP_URL = 'https://app.nxord.com/login';
    const TEST_IMG = 'https://app.nxord.com/static/logo.png';
    const img = new Image();
    img.onload = () => { window.location.href = APP_URL; };
    img.onerror = () => { window.location.href = '/unavailable'; };
    img.src = `${TEST_IMG}?t=${Date.now()}`;
    setTimeout(() => {
      if (!img.complete) { img.src = ''; window.location.href = '/unavailable'; }
    }, 5000);
  };

  return (
    <>
      {/* Announcement Bar */}
      <div style={{
        backgroundColor: '#0f172a',
        color: '#ffffff',
        fontSize: '0.8125rem',
        fontWeight: 600,
        textAlign: 'center',
        padding: '10px 16px',
        fontFamily: 'var(--font-heading)',
        letterSpacing: '0.01em',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.625rem' }}>✦</span>
        <span>{tr.nav.announcement}</span>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
          style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 700 }}
        >
          {tr.nav.announcementCta}
        </a>
      </div>

      {/* Main Navbar */}
      <Navbar
        expand="lg"
        className="py-3 w-100"
        style={{
          backgroundColor: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderBottom: '1px solid var(--border-light)',
          position: 'sticky',
          top: 0,
          zIndex: 1000,
        }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center m-0" style={{ gap: '8px' }}>
            <img src="/logo-circle.png" alt="NxOrd Logo" style={{ height: '30px', width: 'auto' }} />
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.35rem', color: 'var(--color-heading)', letterSpacing: '-0.03em' }}>
              NxOrd
            </span>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="main-navbar-collapse" className="border-0 shadow-none" />

          <Navbar.Collapse id="main-navbar-collapse">
            {/* Centered nav links */}
            <Nav className="mx-auto align-items-lg-center" style={{ gap: '0.5rem' }}>
              <Nav.Link
                onClick={() => scrollToSection('hero')}
                className="nav-link-custom"
                style={{ cursor: 'pointer' }}
              >
                {tr.nav.product}
              </Nav.Link>

              <NavDropdown
                title={tr.nav.useCases}
                id="use-cases-dropdown"
                className="nav-link-custom"
              >
                <NavDropdown.Item as={Link} to="/casi-duso/gestione-ordini">
                  {tr.nav.ordersManagement}
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/casi-duso/reparto-sales">
                  {tr.nav.salesDepartment}
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link
                onClick={() => scrollToSection('contact')}
                className="nav-link-custom"
                style={{ cursor: 'pointer' }}
              >
                {tr.nav.contact}
              </Nav.Link>
            </Nav>

            {/* Right side: language toggle + login + CTA */}
            <div className="d-flex align-items-center justify-content-center gap-3 mt-3 mt-lg-0">
              {/* Language toggle */}
              <div style={{
                display: 'flex',
                border: '1.5px solid var(--border-dark)',
                borderRadius: '6px',
                overflow: 'hidden'
              }}>
                {(['it', 'en'] as const).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    style={{
                      padding: '5px 10px',
                      background: lang === l ? 'var(--color-heading)' : 'transparent',
                      color: lang === l ? '#ffffff' : 'var(--color-heading)',
                      border: 'none',
                      fontWeight: 700,
                      fontSize: '0.6875rem',
                      cursor: 'pointer',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-heading)',
                      letterSpacing: '0.05em',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {l}
                  </button>
                ))}
              </div>

              <a
                href="https://app.nxord.com/login"
                onClick={handleLoginClick}
                style={{
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--color-heading)',
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  padding: '8px 12px'
                }}
              >
                {tr.nav.login}
              </a>

              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
                className="btn-primary-action"
                style={{ padding: '10px 20px', fontSize: '0.90625rem' }}
              >
                {tr.nav.bookDemo}
              </a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default LandingNavbar;
