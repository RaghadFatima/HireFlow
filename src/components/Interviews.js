import React from 'react';

const INTERVIEWS = [
  { id: 1, candidate: "Aisha Rahman", role: "Senior Frontend Dev", type: "Technical", time: "10:00 AM", date: "Today", interviewer: "Usman Khan", avatar: "AR", color: "#38bdf8" },
  { id: 2, candidate: "Omar Farooq", role: "Product Manager", type: "Final Round", time: "2:30 PM", date: "Today", interviewer: "Fatima Rizvi", avatar: "OF", color: "#818cf8" },
  { id: 3, candidate: "Bilal Hussain", role: "DevOps Engineer", type: "HR Screen", time: "11:00 AM", date: "Tomorrow", interviewer: "Nadia Malik", avatar: "BH", color: "#6366f1" },
  { id: 4, candidate: "Nadia Malik", role: "HR Specialist", type: "Final Round", time: "3:00 PM", date: "Tomorrow", interviewer: "CEO", avatar: "NM", color: "#f87171" },
];

const Interviews = ({ theme }) => {
  const isDark = theme === 'dark';
  const colors = {
    bg2: isDark ? '#0d1526' : '#ffffff',
    text: isDark ? '#f0f6ff' : '#1e293b',
    text2: isDark ? '#94a3b8' : '#475569',
    text3: isDark ? '#4a5c7a' : '#64748b',
    border: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)',
    accent: '#38bdf8'
  };

  const Avatar = ({ i, c, s = 40 }) => (
    <div style={{ width: s, height: s, borderRadius: '50%', background: c + '20', border: `1.5px solid ${c}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c, fontWeight: '700', fontSize: s * 0.31, flexShrink: 0 }}>
      {i}
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'fadeIn 0.3s ease-out' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button style={{ padding: '8px 16px', background: `linear-gradient(135deg, #1d6feb, ${colors.accent})`, border: 'none', borderRadius: '8px', color: '#fff', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>+ Schedule Interview</button>
      </div>
      {["Today", "Tomorrow"].map(day => (
        <div key={day}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
            <span style={{ fontSize: '12px', fontWeight: '600', color: colors.text2 }}>{day}</span>
            <div style={{ flex: 1, height: '1px', background: colors.border }} />
            <span style={{ fontSize: '11px', color: colors.text3 }}>{INTERVIEWS.filter(i => i.date === day).length} interviews</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '12px' }}>
            {INTERVIEWS.filter(iv => iv.date === day).map(iv => (
              <div key={iv.id} style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '14px', padding: '18px 20px', display: 'flex', gap: '12px' }}>
                <Avatar i={iv.avatar} c={iv.color} s={40} />
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
                    <h3 style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: colors.text }}>{iv.candidate}</h3>
                    <span style={{ fontSize: '11px', fontWeight: '700', color: colors.accent, background: `${colors.accent}10`, padding: '2px 8px', borderRadius: '6px' }}>{iv.time}</span>
                  </div>
                  <p style={{ margin: '0 0 8px', fontSize: '11px', color: colors.text3 }}>{iv.role}</p>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center', marginBottom: '10px' }}>
                    <span style={{ background: iv.color + '22', color: iv.color, padding: '2px 9px', borderRadius: '4px', fontSize: '11px', fontWeight: '600' }}>{iv.type}</span>
                    <span style={{ fontSize: '11px', color: colors.text3 }}>with {iv.interviewer}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '7px' }}>
                    <button style={{ padding: '5px 12px', background: `linear-gradient(135deg, #1d6feb, ${colors.accent})`, border: 'none', borderRadius: '6px', color: '#fff', fontSize: '11px', cursor: 'pointer' }}>▶ Start</button>
                    <button style={{ padding: '5px 12px', background: 'transparent', border: `1px solid ${colors.border}`, borderRadius: '6px', color: colors.text2, fontSize: '11px', cursor: 'pointer' }}>📝 Notes</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Interviews;