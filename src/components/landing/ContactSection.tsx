import React from 'react';
import { BsLinkedin, BsEnvelopeFill } from 'react-icons/bs';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="bg-light">
      <div className="container">
        <div className="card text-center bg-accent-subtle" style={{ maxWidth: '800px', margin: '0 auto', border: '1px solid rgba(14, 165, 233, 0.15)' }}>
          <h2 className="mb-4">Richiedi Accesso</h2>
          <p className="lead mx-auto" style={{ maxWidth: '600px' }}>
            Lavoriamo a stretto contatto con i nostri partner. Attualmente l'accesso a NxOrd
            è riservato a un numero limitato di distributori per garantire il massimo livello
            di integrazione e supporto.
          </p>
          <div className="mt-5">
            <a href="mailto:luciobaiocchi1@gmail.com" className="btn-primary-action mb-4">
              Contattaci per una Demo
            </a>
            
            <div className="d-flex justify-content-center align-items-center gap-4 mt-4 pt-4" style={{ borderTop: '1px solid rgba(14, 165, 233, 0.1)' }}>
              <a href="mailto:luciobaiocchi1@gmail.com" className="d-flex align-items-center gap-2" style={{ color: 'var(--color-heading)', textDecoration: 'none', transition: 'color 0.2s' }}>
                <BsEnvelopeFill size={20} className="text-accent" />
                <span style={{ fontWeight: 600 }}>luciobaiocchi1@gmail.com</span>
              </a>
              <a href="https://www.linkedin.com/company/nxord/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center gap-2" style={{ color: 'var(--color-heading)', textDecoration: 'none', transition: 'color 0.2s' }}>
                <BsLinkedin size={20} className="text-accent" />
                <span style={{ fontWeight: 600 }}>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
