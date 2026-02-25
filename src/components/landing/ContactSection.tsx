import React from 'react';

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
            <a href="mailto:info@nxord.com" className="btn-primary-action">
              Contattaci per una Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
