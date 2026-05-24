import React from 'react';

const Topbar = ({ page, user, notif, setNotif, theme, toggleTheme }) => {
  const isDark = theme === 'dark';
  const colors = {
    bg2: isDark ? '#0d1526' : '#ffffff',
    border: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)',
    text: isDark ? '#f0f6ff' : '#1e293b',
    text2: isDark ? '#94a3b8' : '#475569',
    text3: isDark ? '#4a5c7a' : '#64748b',
    accent: '#38bdf8'
  };

  const titles = {
    home: 'Home',
    dashboard: 'Dashboard',
    candidates: 'Candidates',
    jobs: 'Job Openings',
    interviews: 'Interviews',
    analytics: 'Analytics',
    contacts: 'Contacts',
    settings: 'Settings'
  };

  const dateStr = new Date().toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  return (
    <div style={{ background: colors.bg2, borderBottom: `1px solid ${colors.border}`, padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px', flexShrink: 0 }}>
      <div>
        <h1 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: colors.text }}>{titles[page] || page}</h1>
        <p style={{ margin: '2px 0 0', fontSize: '11px', color: colors.text3 }}>{dateStr}</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {/* Theme Toggle */}
        <button onClick={toggleTheme} style={{ background: 'transparent', border: `1px solid ${colors.border}`, borderRadius: '8px', width: '36px', height: '36px', cursor: 'pointer', fontSize: '16px' }}>
          {isDark ? '☀️' : '🌙'}
        </button>
        
        {/* Notifications */}
        <div style={{ position: 'relative' }}>
          <button onClick={() => setNotif(!notif)} style={{ background: 'transparent', border: `1px solid ${colors.border}`, borderRadius: '8px', width: '36px', height: '36px', cursor: 'pointer', fontSize: '16px', position: 'relative' }}>
            🔔
            <span style={{ position: 'absolute', top: '6px', right: '6px', width: '6px', height: '6px', background: '#ef4444', borderRadius: '50%' }} />
          </button>
        </div>
        
        {/* User */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 12px', border: `1px solid ${colors.border}`, borderRadius: '10px', background: 'transparent' }}>
          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: `${colors.accent}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: colors.accent, fontSize: '11px', fontWeight: '700' }}>
            {user.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          <span style={{ fontSize: '13px', color: colors.text2 }}>{user.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;