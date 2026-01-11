import React from 'react';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
// import logo from '../../assets/logo.png'; 
import '../../styles/landing.css';

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

  // New Logic: Check App Status
  // New Logic: Check App Status via Image Load (avoid CORS/Opaque issues)
  const handleLoginClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const APP_URL = "https://app.nxord.com/login";
    // We use /static/logo.png because PROD build uses /static/ base.
    // This file returns actual image content, whereas root paths return HTML (index.html).
    const TEST_IMG = "https://app.nxord.com/static/logo.png"; 
    
    // Create an image to test connectivity
    const img = new Image();
    
    img.onload = () => {
      // If image loads, app is reachable and serving static assets
      window.location.href = APP_URL;
    };

    img.onerror = () => {
      console.error("App unavailable (Image check failed)");
      // If image fails (network error, or HTML returned instead of image due to error page)
      window.location.href = "/unavailable";
    };

    // Add a random query param to prevent caching the result
    img.src = `${TEST_IMG}?t=${new Date().getTime()}`;
    
    // Optional: Safety timeout in case valid image hangs
    setTimeout(() => {
      if (!img.complete) {
        img.src = ""; // Cancel load
        console.warn("App check timed out");
         // On timeout, we might assume down or just try to go there anyway? 
         // Safest is to treat as unavailable or just let the user try.
         // Let's assume unavailable for better UX if it's hanging.
        window.location.href = "/unavailable";
      }
    }, 5000); // 5 seconds timeout
  };

  return (
    <Navbar 
      expand="lg" 
      className="py-0 position-absolute top-0 w-100 z-3"
      variant="dark"
      style={{ minHeight: 0, backgroundColor: '#000000' }}
    >
      <Container>
        <Navbar.Brand href="#" className="fw-bold fs-3 text-light tracking-tight position-relative z-3 py-3 m-0">
          NextOrder
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="offcanvasNavbar-expand-lg" 
          className="border-0 position-relative z-3" 
          onClick={handleShow}
        />
        <Navbar.Offcanvas
          id="offcanvasNavbar-expand-lg"
          aria-labelledby="offcanvasNavbarLabel-expand-lg"
          placement="end"
          className="bg-transparent border-0 w-100"
          show={show}
          onHide={handleClose}
        >
          <div className="offcanvas-backdrop-blur position-absolute w-100 h-100 d-lg-none" style={{ 
            background: 'rgba(5, 5, 5, 0.95)', 
            backdropFilter: 'blur(20px)',
            zIndex: -1 
          }}></div>
          
          <Offcanvas.Header closeButton closeVariant="white" className="justify-content-end pt-4 pe-4">
            {/* Close button is handled by closeButton prop */}
          </Offcanvas.Header>
          
          <Offcanvas.Body className="d-flex flex-column flex-lg-row align-items-center h-100 h-lg-auto">
            <Nav className="text-center text-lg-center mb-5 mb-lg-0 mx-auto">
              <Nav.Link href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-light nav-link-responsive my-3 my-lg-0 mx-lg-4 py-lg-0 animate-fade-in delay-100">Chi Siamo</Nav.Link>
              <Nav.Link href="#features" onClick={(e) => handleScroll(e, 'features')} className="text-light nav-link-responsive my-3 my-lg-0 mx-lg-4 py-lg-0 animate-fade-in delay-200">Cosa Facciamo</Nav.Link>
              <Nav.Link href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-light nav-link-responsive my-3 my-lg-0 mx-lg-4 py-lg-0 animate-fade-in delay-300">Contatti</Nav.Link>
            </Nav>
            <div className="animate-fade-in delay-500 ms-lg-0">
              <a 
                href="https://app.nxord.com/login" 
                onClick={handleLoginClick}
                className="btn btn-outline-success btn-outline-green btn-lg btn-lg-sm px-5 px-lg-4 py-3 py-lg-1 rounded-pill rounded-lg-3"
              >
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
