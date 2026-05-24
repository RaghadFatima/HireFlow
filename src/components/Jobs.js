import React from 'react';

const JOBS = [
  { id: 1, title: "Senior Frontend Developer", dept: "Engineering", type: "Full-time", location: "Remote", applicants: 34, daysLeft: 12, status: "Active", priority: "High" },
  { id: 2, title: "Product Manager", dept: "Product", type: "Full-time", location: "Lahore", applicants: 21, daysLeft: 8, status: "Active", priority: "High" },
  { id: 3, title: "UX Designer", dept: "Design", type: "Full-time", location: "Karachi", applicants: 18, daysLeft: 20, status: "Active", priority: "Medium" },
  { id: 4, title: "Data Scientist", dept: "Analytics", type: "Contract", location: "Remote", applicants: 12, daysLeft: 5, status: "Closing", priority: "Low" },
  { id: 5, title: "DevOps Engineer", dept: "Engineering", type: "Full-time", location: "Islamabad", applicants: 9, daysLeft: 25, status: "Active", priority: "Medium" },
];

const Jobs = ({ theme }) => {
  const isDark = theme === 'dark';
  const colors = {
    bg2: isDark ? '#0d1526' : '#ffffff',
    text: isDark ? '#f0f6ff' : '#1e293b',
    text2: isDark ? '#94a3b8' : '#475569',
    text3: isDark ? '#4a5c7a' : '#64748b',
    border: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)',
    accent: '#38bdf8'
  };

  const priorityColors = { High: "#f87171", Medium: "#fbbf24", Low: "#34d399" };

  const pillStyle = {
    background: isDark ? 'rgba(255,255,255,0.06)' : '#f1f5f9',
    color: colors.text2,
    padding: '3px 10px',
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: '500'
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'fadeIn 0.3s ease-out' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ margin: 0, fontSize: '13px', color: colors.text3 }}>{JOBS.length} open positions</p>
        <button style={{ padding: '8px 16px', background: `linear-gradient(135deg, #1d6feb, ${colors.accent})`, border: 'none', borderRadius: '8px', color: '#fff', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>+ Post New Job</button>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(270px, 1fr))', gap: '12px' }}>
        {JOBS.map(job => (
          <div key={job.id} style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '14px', padding: '18px 20px', cursor: 'pointer', transition: 'border-color 0.15s' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: `${colors.accent}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px' }}>💼</div>
              <span style={{ background: priorityColors[job.priority] + '22', color: priorityColors[job.priority], padding: '2px 9px', borderRadius: '4px', fontSize: '11px', fontWeight: '600' }}>{job.priority}</span>
            </div>
            <h3 style={{ margin: '0 0 3px', fontSize: '13px', fontWeight: '700', color: colors.text }}>{job.title}</h3>
            <p style={{ margin: '0 0 11px', fontSize: '11px', color: colors.text3 }}>{job.dept} · {job.type}</p>
            <div style={{ display: 'flex', gap: '6px', marginBottom: '11px', flexWrap: 'wrap' }}>
              <span style={pillStyle}>{job.location}</span>
              <span style={{ ...pillStyle, background: job.status === "Active" ? 'rgba(52,211,153,0.12)' : 'rgba(251,191,36,0.12)', color: job.status === "Active" ? "#34d399" : "#fbbf24" }}>{job.status}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: '10px', borderTop: `1px solid ${colors.border}` }}>
              <span style={{ fontSize: '11px', color: colors.text3 }}>👥 {job.applicants} applicants</span>
              <span style={{ fontSize: '11px', color: job.daysLeft <= 7 ? "#f87171" : colors.text3, fontWeight: job.daysLeft <= 7 ? 600 : 400 }}>
                {job.daysLeft <= 7 ? "🔴 " : "🕐 "}{job.daysLeft}d left
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jobs;