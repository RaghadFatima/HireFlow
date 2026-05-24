import React, { useState } from 'react';

const SettingsPage = ({ user, theme }) => {
  const isDark = theme === 'dark';
  const colors = {
    bg2: isDark ? '#0d1526' : '#ffffff',
    bg3: isDark ? '#111d35' : '#f1f5f9',
    text: isDark ? '#f0f6ff' : '#1e293b',
    text2: isDark ? '#94a3b8' : '#475569',
    text3: isDark ? '#4a5c7a' : '#64748b',
    border: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)',
    accent: '#38bdf8'
  };

  const [emailNotif, setEmailNotif] = useState(true);
  const [smsNotif, setSmsNotif] = useState(false);
  const [autoScreen, setAutoScreen] = useState(true);
  const [saved, setSaved] = useState(false);

  const Avatar = ({ i, c, s = 44 }) => (
    <div style={{ width: s, height: s, borderRadius: '50%', background: c + '20', border: `1.5px solid ${c}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c, fontWeight: '700', fontSize: s * 0.31, flexShrink: 0 }}>
      {i}
    </div>
  );

  const Toggle = ({ on, toggle }) => (
    <div onClick={toggle} style={{ width: '38px', height: '21px', borderRadius: '11px', background: on ? `linear-gradient(135deg, #1d6feb, ${colors.accent})` : 'rgba(255,255,255,0.08)', cursor: 'pointer', position: 'relative', transition: 'background 0.2s', flexShrink: 0, border: `1px solid ${colors.border}` }}>
      <div style={{ position: 'absolute', top: '2px', left: on ? '18px' : '2px', width: '15px', height: '15px', borderRadius: '50%', background: on ? '#fff' : colors.text3, transition: 'left 0.2s' }} />
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', animation: 'fadeIn 0.3s ease-out' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <div style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '14px', padding: '18px 20px' }}>
          <h2 style={{ margin: '0 0 16px', fontSize: '14px', fontWeight: '600', color: colors.text }}>Profile</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '18px', padding: '12px', background: colors.bg3, borderRadius: '10px', border: `1px solid ${colors.border}` }}>
            <Avatar i={user.name.split(' ').map(n => n[0]).join('').slice(0, 2)} c={colors.accent} s={44} />
            <div>
              <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: colors.text }}>{user.name}</p>
              <p style={{ margin: '2px 0 0', fontSize: '11px', color: colors.text3 }}>{user.role} · {user.email}</p>
            </div>
          </div>
          {[["Full Name", user.name], ["Email", user.email], ["Department", "Human Resources"], ["Role", user.role]].map(([label, value]) => (
            <div key={label} style={{ marginBottom: '12px' }}>
              <label style={{ display: 'block', fontSize: '11px', fontWeight: '600', color: colors.text3, marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</label>
              <input defaultValue={value} style={{ height: '36px', border: `1px solid ${colors.border}`, borderRadius: '8px', padding: '0 12px', fontSize: '13px', color: colors.text, outline: 'none', background: isDark ? 'rgba(255,255,255,0.04)' : '#f8fafc', width: '100%' }} />
            </div>
          ))}
          {saved && <div style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)', borderRadius: '8px', padding: '8px 12px', marginBottom: '10px', fontSize: '12px', color: '#34d399' }}>✅ Changes saved successfully!</div>}
          <button onClick={() => { setSaved(true); setTimeout(() => setSaved(false), 2500); }} style={{ padding: '8px 16px', background: `linear-gradient(135deg, #1d6feb, ${colors.accent})`, border: 'none', borderRadius: '8px', color: '#fff', fontSize: '13px', fontWeight: '600', cursor: 'pointer', marginTop: '6px' }}>Save Changes</button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '14px', padding: '18px 20px' }}>
            <h2 style={{ margin: '0 0 14px', fontSize: '14px', fontWeight: '600', color: colors.text }}>Notifications</h2>
            {[
              { label: "Email Notifications", desc: "Receive updates via email", on: emailNotif, toggle: () => setEmailNotif(v => !v) },
              { label: "SMS Notifications", desc: "Get SMS alerts for interviews", on: smsNotif, toggle: () => setSmsNotif(v => !v) },
              { label: "Auto-screening", desc: "Automatically screen applicants", on: autoScreen, toggle: () => setAutoScreen(v => !v) },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                <div>
                  <p style={{ margin: 0, fontSize: '13px', fontWeight: '500', color: colors.text }}>{item.label}</p>
                  <p style={{ margin: '1px 0 0', fontSize: '11px', color: colors.text3 }}>{item.desc}</p>
                </div>
                <Toggle on={item.on} toggle={item.toggle} />
              </div>
            ))}
          </div>

          <div style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '14px', padding: '18px 20px' }}>
            <h2 style={{ margin: '0 0 14px', fontSize: '14px', fontWeight: '600', color: colors.text }}>Team Members</h2>
            {[
              { name: "Usman Khan", role: "Senior Recruiter", avatar: "UK", color: "#38bdf8" },
              { name: "Fatima Rizvi", role: "HR Coordinator", avatar: "FR", color: "#a78bfa" },
              { name: "Ali Hassan", role: "Talent Acquisition", avatar: "AH", color: "#34d399" },
            ].map(m => (
              <div key={m.name} style={{ display: 'flex', alignItems: 'center', gap: '9px', marginBottom: '11px' }}>
                <Avatar i={m.avatar} c={m.color} s={30} />
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: colors.text }}>{m.name}</p>
                  <p style={{ margin: '1px 0 0', fontSize: '11px', color: colors.text3 }}>{m.role}</p>
                </div>
                <button style={{ padding: '5px 10px', background: 'transparent', border: `1px solid ${colors.border}`, borderRadius: '6px', color: colors.text2, fontSize: '11px', cursor: 'pointer' }}>Manage</button>
              </div>
            ))}
            <button style={{ width: '100%', padding: '8px', background: 'transparent', border: `1px solid ${colors.border}`, borderRadius: '8px', color: colors.text2, fontSize: '12px', cursor: 'pointer', marginTop: '4px' }}>+ Invite Member</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;