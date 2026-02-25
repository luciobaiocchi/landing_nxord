import React from 'react';
import { BsLinkedin } from 'react-icons/bs';

const AboutSection: React.FC = () => {

  const team = [
    {
      name: 'Leonardo Passafiume',
      role: 'CEO & Co-Founder',
      area: 'Strategia e Sviluppo B2B',
      initials: 'LP',
      linkedin: 'https://www.linkedin.com/in/leonardo-passafiume-9a3aa9307/'
    },
    {
      name: 'Lucio Baiocchi',
      role: 'COO & Co-Founder',
      area: 'Automazione e Processi',
      initials: 'LB',
      linkedin: 'https://www.linkedin.com/in/lucio-baiocchi-39b420243/'
    },
    {
      name: 'Maurizio Lanzoni Raiteri',
      role: 'CTO & Co-Founder',
      area: 'Machine Learning & Data Science',
      initials: 'ML',
      linkedin: 'https://www.linkedin.com/in/maurizio-l-041b9929b/'
    },
    {
      name: 'Thomas Kelly',
      role: 'Head of Growth',
      area: 'Partnerships',
      initials: 'TK',
      linkedin: 'https://www.linkedin.com/in/thomas-kelly-687b55251/'
    }
  ];

  return (
    <section id="about">
      <div className="container">
        <div className="text-center mb-5">
          <p className="text-accent mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Team
          </p>
          <h2>Chi Siamo</h2>
          <p className="mx-auto" style={{ maxWidth: '800px' }}>
            Siamo nati per risolvere un problema reale: il tempo perso dai distributori per decifrare gli ordini.
            La nostra tecnologia lavora in background per restituirti il controllo del tuo tempo.
          </p>
        </div>

        <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
          {team.map((member, index) => (
            <div className="card text-center" key={index} style={{ padding: '30px 20px' }}>
              {/* Initials avatar */}
              <div className="d-flex justify-content-center mb-3">
                <div style={{
                  width: '56px', height: '56px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--color-heading), var(--color-brand))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.125rem',
                  letterSpacing: '0.02em'
                }}>
                  {member.initials}
                </div>
              </div>
              <h4 className="mb-1">{member.name}</h4>
              <p className="small mb-1" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{member.role}</p>
              <p className="small mb-3" style={{ color: 'var(--text-muted)' }}>{member.area}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-heading)' }}>
                <BsLinkedin size={20} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
