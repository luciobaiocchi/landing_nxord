import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const AppUnavailablePage: React.FC = () => {
  const navigate = useNavigate();
  const [isRetrying, setIsRetrying] = React.useState(false);

  const handleRetry = async () => {
    setIsRetrying(true);
    const APP_URL = "https://app.nxord.com/login";
    const TEST_IMG = "https://app.nxord.com/static/logo-circle.png";

    const waitPromise = new Promise(resolve => setTimeout(resolve, 3000));

    const checkPromise = new Promise<boolean>((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = `${TEST_IMG}?t=${new Date().getTime()}`;

      setTimeout(() => {
        if (!img.complete) {
          img.src = "";
          resolve(false);
        }
      }, 5000);
    });

    const [, isAvailable] = await Promise.all([waitPromise, checkPromise]);

    if (isAvailable) {
      window.location.href = APP_URL;
    } else {
      setIsRetrying(false);
    }
  };

  return (
    <div className="bg-tech-dots d-flex flex-column align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
      {/* Brand header */}
      <div className="position-absolute top-0 start-0 w-100 p-4">
        <Container>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', color: 'var(--color-heading)' }}>NxOrd</span>
        </Container>
      </div>

      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8} lg={6}>
            <div className="card p-5" style={{ textAlign: 'center' }}>
              {/* Icon */}
              <div className="d-flex justify-content-center mb-4">
                <div style={{
                  width: '56px', height: '56px', borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'var(--bg-main)', display: 'flex',
                  alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem'
                }}>
                  🔧
                </div>
              </div>
              <h2 className="mb-3">Manutenzione in Corso</h2>
              <p style={{ color: 'var(--text-muted)' }}>
                L'applicazione è momentaneamente non disponibile per manutenzione programmata.
                Stiamo lavorando per migliorare il servizio.
              </p>

              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mt-4">
                <button
                  onClick={handleRetry}
                  disabled={isRetrying}
                  className="btn-primary-action"
                  style={{ opacity: isRetrying ? 0.7 : 1, cursor: isRetrying ? 'not-allowed' : 'pointer' }}
                >
                  {isRetrying ? 'Connessione in corso...' : 'Riprova Connessione'}
                </button>
                <button
                  onClick={() => navigate('/')}
                  className="btn-ghost-primary"
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
