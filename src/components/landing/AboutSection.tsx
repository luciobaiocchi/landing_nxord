import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { useLang } from '../../context/LanguageContext';
import { t } from '../../translations';
import { analytics } from '../../utils/analytics';

const team = [
  { name: 'Leonardo Passafiume', role: 'Co-Founder', area: 'Strategia e Sviluppo B2B', initials: 'LP', linkedin: 'https://www.linkedin.com/in/leonardo-passafiume-9a3aa9307/' },
  { name: 'Lucio Baiocchi',       role: 'Co-Founder', area: 'Automazione e Processi',    initials: 'LB', linkedin: 'https://www.linkedin.com/in/lucio-baiocchi-39b420243/' },
  { name: 'Maurizio Lanzoni Raiteri', role: 'Co-Founder', area: 'Machine Learning & Data Science', initials: 'ML', linkedin: 'https://www.linkedin.com/in/maurizio-l-041b9929b/' },
  { name: 'Thomas Kelly',         role: 'Co-Founder', area: 'Partnership e Responsabile Vendite', initials: 'TK', linkedin: 'https://www.linkedin.com/in/thomas-kelly-687b55251/' }
];

const AboutSection: React.FC = () => {
  const { lang } = useLang();
  const tr = t[lang].about;

  return (
    <section id="about" style={{ padding: '96px 0', backgroundColor: 'var(--bg-main)', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        <div className="text-center mb-5 reveal active">
          <p className="text-accent mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {tr.label}
          </p>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.03em' }}>{tr.title}</h2>
          <p className="mx-auto mt-3" style={{ maxWidth: '640px', color: 'var(--text-muted)' }}>
            {tr.subtitle}
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {team.map((member, index) => (
            <div className="col-12 col-sm-6 col-lg-3 reveal active" key={index}>
              <div className="card text-center d-flex flex-column" style={{ padding: '32px 24px' }}>
                <div className="d-flex justify-content-center mb-3">
                  <div style={{
                    width: '56px', height: '56px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--color-heading), #1e293b)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.125rem',
                    letterSpacing: '0.02em'
                  }}>
                    {member.initials}
                  </div>
                </div>
                <h4 className="mb-1" style={{ fontSize: '1rem' }}>{member.name}</h4>
                <p className="small mb-1" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>{member.role}</p>
                <p className="small mb-3" style={{ color: 'var(--text-muted)' }}>{member.area}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-heading)', marginTop: 'auto' }} onClick={() => analytics.trackSocialClick(member.name)}>
                  <BsLinkedin size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
