import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
// import founderAvatar from '../../assets/founder-avatar.png';
import lucioAvatar from '../../assets/lucio.png';
import leoAvatar from '../../assets/leo.jpeg';
import thomasAvatar from '../../assets/thomas.jpeg';
import mauriAvatar from '../../assets/mauri.png';
import { BsLinkedin } from 'react-icons/bs';
import '../../styles/landing.css';

const AboutSection: React.FC = () => {

  const founders = [
    {
      name: 'Leonardo Passafiume',
      role: 'Co-Founder',
      story: 'Visionario della strategia. Plasma il software per trasformare le PMI in inarrestabili motori di crescita ed efficienza.',
      image: leoAvatar,
      linkedin: 'https://www.linkedin.com/in/leonardo-passafiume-9a3aa9307/'
    },
    {
      name: 'Lucio Baiocchi',
      role: 'Co-Founder',
      story: 'Architetto dell\'innovazione. Democratizza la tecnologia complessa, rendendo l\'automazione un superpotere alla portata di tutti.',
      image: lucioAvatar,
      linkedin: 'https://www.linkedin.com/in/lucio-baiocchi-39b420243/'
    },
    {
      name: 'Maurizio Lanzoni Raiteri',
      role: 'Co-founder',
      story: 'Il creatore della mente. Fonde Machine Learning e analisi dati per dare vita al vero cervello pulsante di NextOrder.',
      image: mauriAvatar,
      linkedin: 'https://www.linkedin.com/in/maurizio-l-041b9929b/'
    },
    {
      name: 'Thomas Kelly',
      role: 'Co-founder',
      story: 'L\'acceleratore di business. Trasforma le relazioni umane in potenziale scalabile, spingendo i fornitori verso nuovi orizzonti.',
      image: thomasAvatar,
      linkedin: 'https://www.linkedin.com/in/thomas-kelly-687b55251/'
    }
  ];

  return (
    <section id="about" className="py-5 position-relative">
      <Container className="py-5 reveal">
        <Row className="justify-content-center mb-5">
          <Col lg={8} className="text-center">
            <h2 className="display-5 fw-bold mb-4 text-light">Chi Siamo</h2>
            <p className="lead text-light fw-bold mb-4">
              L'innovazione non è un privilegio dei giganti: è la vostra rivincita.
            </p>
            <p className="text-white-50 fs-5 mb-4">
              Portiamo la potenza dell'Intelligenza Artificiale nelle PMI per cancellare per sempre l'incubo del data entry e degli errori manuali. 
              <span className="d-block mt-2">La nostra tecnologia lavora nell'ombra per farvi brillare alla luce del sole.</span>
            </p>
            <p className="text-white-50 fs-5">
              Vi restituiamo il tempo per curare i clienti e far crescere il business, trasformando il cambiamento da minaccia a motore di crescita. 
              Non siamo solo fornitori, siamo i partner della vostra evoluzione. <span className="text-gradient-green fw-bold">Il futuro appartiene a chi lo abbraccia oggi.</span>
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {founders.map((founder, index) => (
            <Col md={6} lg={3} key={index}>
              <Card className="h-100 glass-panel border-0 text-center p-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card.Body>
                  <div className="mb-3 position-relative d-inline-block">
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className="rounded-circle border border-2 border-secondary border-opacity-10"
                      style={{ width: '140px', height: '140px', objectFit: 'cover' }}
                    />
                  </div>
                  <h4 className="h5 fw-bold text-light mb-1 d-flex align-items-center justify-content-center" style={{ minHeight: '3rem' }}>
                    {founder.name}
                  </h4>
                  <p className="text-gradient-green small fw-bold mb-2">{founder.role}</p>
                  <div className="mb-3">
                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-white-50 hover-text-white">
                      <BsLinkedin size={20} />
                    </a>
                  </div>
                  <p className="text-white-50 small mb-0">
                    {founder.story}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
