import React from 'react';

const companies = [
  'D&B Distribuzione Bevande',
  'Ho.Re.Ca. Distribuzione Nord',
  'Gruppo Alimentare Sempione',
  'Rossi Distribution SRL',
  'Bevande & Co. Milano'
];

const SocialProofSection: React.FC = () => {
  return (
    <section style={{
      padding: '36px 0',
      borderBottom: '1px solid var(--border-light)',
      backgroundColor: 'var(--bg-white)'
    }}>
      <div className="container">
        <p style={{
          textAlign: 'center',
          fontSize: '0.75rem',
          fontWeight: 700,
          color: 'var(--text-muted)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '20px'
        }}>
          Scelto da distributori Ho.Re.Ca. in tutta Italia
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          alignItems: 'center'
        }}>
          {companies.map((name, i) => (
            <div key={i} style={{
              padding: '8px 20px',
              border: '1px solid var(--border-color)',
              borderRadius: '6px',
              backgroundColor: 'var(--bg-main)',
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap'
            }}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
