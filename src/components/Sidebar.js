import React from 'react';

const Sidebar = ({ page, setPage, open, setOpen, user, onLogout, theme }) => {
  const isDark = theme === 'dark';
  const colors = {
    bg2: isDark ? '#0d1526' : '#ffffff',
    border: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)',
    text: isDark ? '#f0f6ff' : '#1e293b',
    text2: isDark ? '#94a3b8' : '#475569',
    text3: isDark ? '#4a5c7a' : '#64748b',
    accent: '#38bdf8',
    bg3: isDark ? '#111d35' : '#f1f5f9'
  };

  const navItems = [
    { key: 'dashboard', label: 'Dashboard', icon: '📊' },
    { key: 'candidates', label: 'Candidates', icon: '👥', badge: '8' },
    { key: 'jobs', label: 'Jobs', icon: '💼' },
    { key: 'interviews', label: 'Interviews', icon: '📅', badge: '4', badgeRed: true },
    { key: 'analytics', label: 'Analytics', icon: '📈' },
    { key: 'contacts', label: 'Contacts', icon: '📞' },
    { key: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  return (
    <aside style={{ 
      width: open ? 240 : 64, 
      background: colors.bg2, 
      borderRight: `1px solid ${colors.border}`, 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh', 
      flexShrink: 0, 
      transition: 'width 0.2s', 
      overflow: 'hidden' 
    }}>
      {/* Logo */}
      <div style={{ 
        padding: '16px', 
        borderBottom: `1px solid ${colors.border}`, 
        display: 'flex', 
        alignItems: 'center', 
        gap: '10px' 
      }}>
        <div style={{ 
          width: '32px', 
          height: '32px', 
          borderRadius: '10px', 
          background: `linear-gradient(135deg, #1d6feb, ${colors.accent})`, 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          fontSize: '16px', 
          flexShrink: 0 
        }}>⚡</div>
        {open && <span style={{ fontWeight: '700', color: colors.text, fontSize: '14px' }}>HireFlow</span>}
      </div>

      {/* Toggle */}
      <div style={{ padding: '12px', display: 'flex', justifyContent: open ? 'flex-end' : 'center' }}>
        <button 
          onClick={() => setOpen(!open)} 
          style={{ 
            width: '28px', 
            height: '28px', 
            borderRadius: '6px', 
            background: 'transparent', 
            border: `1px solid ${colors.border}`, 
            cursor: 'pointer', 
            color: colors.text2, 
            fontSize: '12px' 
          }}
        >
          {open ? '←' : '→'}
        </button>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: '8px 12px' }}>
        {navItems.map(item => {
          const active = page === item.key;
          return (
            <div 
              key={item.key} 
              onClick={() => setPage(item.key)} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '12px', 
                padding: '10px 12px', 
                borderRadius: '10px', 
                marginBottom: '4px', 
                cursor: 'pointer', 
                background: active ? `${colors.accent}15` : 'transparent', 
                color: active ? colors.accent : colors.text2, 
                justifyContent: open ? 'flex-start' : 'center', 
                position: 'relative' 
              }}
            >
              <span style={{ fontSize: '16px' }}>{item.icon}</span>
              {open && <span style={{ flex: 1, fontSize: '13px', fontWeight: active ? '600' : '400' }}>{item.label}</span>}
              {open && item.badge && (
                <span style={{ 
                  background: item.badgeRed ? '#ef4444' : colors.accent, 
                  color: '#fff', 
                  borderRadius: '10px', 
                  padding: '2px 8px', 
                  fontSize: '10px', 
                  fontWeight: '700' 
                }}>
                  {item.badge}
                </span>
              )}
              {!open && item.badge && (
                <span style={{ 
                  position: 'absolute', 
                  top: '4px', 
                  right: '4px', 
                  width: '8px', 
                  height: '8px', 
                  background: item.badgeRed ? '#ef4444' : colors.accent, 
                  borderRadius: '50%' 
                }} />
              )}
            </div>
          );
        })}
      </nav>

      {/* User */}
      <div style={{ padding: '12px', borderTop: `1px solid ${colors.border}` }}>
        <div style={{ 
          background: colors.bg3, 
          borderRadius: '10px', 
          padding: open ? '10px' : '10px 0', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '8px', 
          justifyContent: open ? 'flex-start' : 'center' 
        }}>
          <div style={{ 
            width: '28px', 
            height: '28px', 
            borderRadius: '50%', 
            background: `${colors.accent}20`, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            color: colors.accent, 
            fontSize: '12px', 
            fontWeight: '700' 
          }}>
            {user.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
          </div>
          {open && (
            <>
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontSize: '11px', fontWeight: '600', color: colors.text }}>{user.name}</p>
                <p style={{ margin: 0, fontSize: '9px', color: colors.text3 }}>{user.role}</p>
              </div>
              <button 
                onClick={onLogout} 
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', color: colors.text3 }}
              >
                🚪
              </button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;