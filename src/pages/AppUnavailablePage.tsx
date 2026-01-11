import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../styles/landing.css';

const AppUnavailablePage: React.FC = () => {
    const navigate = useNavigate();

    const [isRetrying, setIsRetrying] = React.useState(false);

    const handleRetry = async () => {
        setIsRetrying(true);
        const APP_URL = "https://app.nxord.com/login";
        const TEST_IMG = "https://app.nxord.com/static/logo.png"; 

        // 1. Minimum wait time promise
        const waitPromise = new Promise(resolve => setTimeout(resolve, 3000));

        // 2. Connection check promise
        const checkPromise = new Promise<boolean>((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = `${TEST_IMG}?t=${new Date().getTime()}`;
            
            // Safety timeout for the check itself
            setTimeout(() => {
                if (!img.complete) {
                    img.src = "";
                    resolve(false);
                }
            }, 5000);
        });

        // Wait for both: minimum 3s AND the result of the check
        const [_, isAvailable] = await Promise.all([waitPromise, checkPromise]);

        if (isAvailable) {
            window.location.href = APP_URL;
        } else {
            console.error("App unavailable (Image check failed)");
            setIsRetrying(false);
        }
    };

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
              <h1 className="display-4 fw-bold mb-4 text-gradient-green">Manutenzione in Corso</h1>
              <p className="lead text-white-50 mb-5">
                L'applicazione è momentaneamente non disponibile per manutenzione programmata. 
                Stiamo lavorando per migliorare il servizio.
              </p>
              
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <button 
                  onClick={handleRetry} 
                  disabled={isRetrying}
                  className="btn btn-primary-glow"
                  style={{ minWidth: '200px' }}
                >
                  {isRetrying ? 'Connessione...' : 'Riprova Connessione'}
                </button>
                <button 
                  onClick={handleGoBack} 
                  className="btn btn-outline-green"
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

export default AppUnavailablePage;
