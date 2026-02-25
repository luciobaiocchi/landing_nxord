import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

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
          <Col md={8} lg={5}>
            <div className="card p-5" style={{ textAlign: 'center' }}>
              <h1 className="mb-3" style={{ fontSize: '5rem', color: 'var(--color-accent)', fontWeight: 800 }}>404</h1>
              <h2 className="mb-3">Pagina Non Trovata</h2>
              <p style={{ color: 'var(--text-muted)' }}>
                La pagina che stai cercando non esiste o è stata spostata.
              </p>
              <div className="mt-4">
                <button onClick={() => navigate('/')} className="btn-primary-action">
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
