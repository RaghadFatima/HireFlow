import React from 'react';

const HomePage = ({ setPage, theme }) => {
  const isDark = theme === 'dark';
  const colors = {
    bg2: isDark ? '#0d1526' : '#ffffff',
    text: isDark ? '#f0f6ff' : '#1e293b',
    text2: isDark ? '#94a3b8' : '#475569',
    accent: '#38bdf8',
    border: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)'
  };

  const features = [
    { icon: '🎯', title: 'Smart Screening', desc: 'AI-powered candidate matching' },
    { icon: '📊', title: 'Analytics', desc: 'Real-time hiring metrics' },
    { icon: '🤝', title: 'Collaboration', desc: 'Team feedback & reviews' },
    { icon: '⚡', title: 'Fast Pipeline', desc: 'Automated workflows' }
  ];

  const stats = [
    { value: '10k+', label: 'Active Jobs' },
    { value: '50k+', label: 'Candidates' },
    { value: '98%', label: 'Satisfaction' },
    { value: '24/7', label: 'Support' }
  ];

  return (
    <div style={{ animation: 'fadeIn 0.4s ease-out' }}>
      {/* Hero Section */}
      <div style={{ textAlign: 'center', marginBottom: '48px', padding: '20px 0' }}>
        <div style={{ display: 'inline-block', background: `${colors.accent}15`, padding: '6px 16px', borderRadius: '30px', marginBottom: '20px' }}>
          <span style={{ color: colors.accent, fontSize: '13px', fontWeight: '600' }}>✨ AI-Powered Recruitment</span>
        </div>
        <h1 style={{ fontSize: '48px', fontWeight: '800', color: colors.text, marginBottom: '16px', letterSpacing: '-1px' }}>
          Hire Smarter, <span style={{ color: colors.accent }}>Faster</span>
        </h1>
        <p style={{ fontSize: '18px', color: colors.text2, maxWidth: '600px', margin: '0 auto 32px', lineHeight: '1.5' }}>
          Streamline your hiring process with our all-in-one recruitment platform. 
          From sourcing to onboarding, we've got you covered.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
          <button onClick={() => setPage('candidates')} style={{ padding: '12px 28px', background: `linear-gradient(135deg, #1d6feb, ${colors.accent})`, border: 'none', borderRadius: '12px', color: '#fff', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
            Browse Candidates →
          </button>
          <button onClick={() => setPage('jobs')} style={{ padding: '12px 28px', background: 'transparent', border: `1px solid ${colors.border}`, borderRadius: '12px', color: colors.text, fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
            Post a Job
          </button>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '48px' }}>
        {stats.map(stat => (
          <div key={stat.label} style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: colors.accent, marginBottom: '8px' }}>{stat.value}</h2>
            <p style={{ fontSize: '13px', color: colors.text2 }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Features */}
      <h2 style={{ fontSize: '24px', fontWeight: '700', color: colors.text, textAlign: 'center', marginBottom: '32px' }}>Why choose HireFlow?</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '48px' }}>
        {features.map(f => (
          <div key={f.title} style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '16px', padding: '24px', textAlign: 'center', transition: 'transform 0.2s' }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>{f.icon}</div>
            <h3 style={{ fontSize: '16px', fontWeight: '700', color: colors.text, marginBottom: '8px' }}>{f.title}</h3>
            <p style={{ fontSize: '12px', color: colors.text2 }}>{f.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: `linear-gradient(135deg, ${colors.accent}20, transparent)`, borderRadius: '24px', padding: '48px', textAlign: 'center', border: `1px solid ${colors.border}` }}>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: colors.text, marginBottom: '12px' }}>Ready to transform your hiring?</h2>
        <p style={{ fontSize: '14px', color: colors.text2, marginBottom: '24px' }}>Join thousands of companies using HireFlow</p>
        <button onClick={() => setPage('dashboard')} style={{ padding: '12px 32px', background: `linear-gradient(135deg, #1d6feb, ${colors.accent})`, border: 'none', borderRadius: '12px', color: '#fff', fontSize: '14px', fontWeight: '600', cursor: 'pointer' }}>
          Go to Dashboard →
        </button>
      </div>
    </div>
  );
};

export default HomePage;