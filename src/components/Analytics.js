import React from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const MONTHLY_DATA = [
  { month: "Dec", applications: 68, hires: 5 },
  { month: "Jan", applications: 92, hires: 8 },
  { month: "Feb", applications: 78, hires: 6 },
  { month: "Mar", applications: 115, hires: 11 },
  { month: "Apr", applications: 134, hires: 9 },
  { month: "May", applications: 142, hires: 12 },
];

const CONVERSION_DATA = [
  { from: "Applied", to: "Screened", rate: 63, color: "#38bdf8" },
  { from: "Screened", to: "Interviewed", rate: 51, color: "#818cf8" },
  { from: "Interviewed", to: "Offered", rate: 40, color: "#a78bfa" },
  { from: "Offered", to: "Hired", rate: 67, color: "#34d399" },
];

const Analytics = ({ theme }) => {
  const isDark = theme === 'dark';
  const colors = {
    bg2: isDark ? '#0d1526' : '#ffffff',
    text: isDark ? '#f0f6ff' : '#1e293b',
    text2: isDark ? '#94a3b8' : '#475569',
    text3: isDark ? '#4a5c7a' : '#64748b',
    border: isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.08)',
    accent: '#38bdf8'
  };

  const StatCard = ({ label, value, change, positive, icon, col }) => (
    <div style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '14px', padding: '18px 20px', flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p style={{ margin: 0, fontSize: '11px', color: colors.text3, fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{label}</p>
          <p style={{ margin: '8px 0 0', fontSize: '26px', fontWeight: '700', color: colors.text }}>{value}</p>
        </div>
        <div style={{ width: '40px', height: '40px', borderRadius: '11px', background: col + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>{icon}</div>
      </div>
      {change && (
        <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '12px', fontWeight: '600', color: positive ? '#34d399' : '#f87171' }}>{(positive ? "↑ " : "↓ ") + change}</span>
          <span style={{ fontSize: '12px', color: colors.text3 }}>vs last month</span>
        </div>
      )}
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', animation: 'fadeIn 0.3s ease-out' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
        <StatCard label="Offer Acceptance" value="78%" change="+5%" positive icon="🎯" col="#34d399" />
        <StatCard label="Pipeline Velocity" value="14d" change="-3d" positive icon="⚡" col="#38bdf8" />
        <StatCard label="Quality of Hire" value="8.4" change="+0.3" positive icon="🏆" col="#818cf8" />
        <StatCard label="Recruiter Efficiency" value="92%" change="-2%" positive={false} icon="📊" col="#fbbf24" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '14px', padding: '18px 20px' }}>
          <h3 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: '600', color: colors.text }}>Application Volume</h3>
          <ResponsiveContainer width="100%" height={170}>
            <BarChart data={MONTHLY_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: colors.text3 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: colors.text3 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '8px', fontSize: '11px', color: colors.text }} />
              <Bar dataKey="applications" fill="#38bdf8" radius={[4, 4, 0, 0]} name="Applications" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '14px', padding: '18px 20px' }}>
          <h3 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: '600', color: colors.text }}>Stage Conversion Rates</h3>
          {CONVERSION_DATA.map(s => (
            <div key={s.from} style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ fontSize: '12px', color: colors.text3 }}>{s.from} → {s.to}</span>
                <span style={{ fontSize: '12px', fontWeight: '600', color: s.color }}>{s.rate}%</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(255,255,255,0.07)', borderRadius: '3px' }}>
                <div style={{ width: `${s.rate}%`, height: '100%', background: s.color, borderRadius: '3px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '14px', padding: '18px 20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <h3 style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: colors.text }}>Hires vs Applications Over Time</h3>
          <button style={{ padding: '6px 12px', background: 'transparent', border: `1px solid ${colors.border}`, borderRadius: '6px', color: colors.text2, fontSize: '11px', cursor: 'pointer' }}>⬇ Export</button>
        </div>
        <ResponsiveContainer width="100%" height={160}>
          <LineChart data={MONTHLY_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
            <XAxis dataKey="month" tick={{ fontSize: 10, fill: colors.text3 }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fontSize: 10, fill: colors.text3 }} axisLine={false} tickLine={false} />
            <Tooltip contentStyle={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '8px', fontSize: '11px', color: colors.text }} />
            <Legend wrapperStyle={{ fontSize: 11, color: colors.text3 }} />
            <Line type="monotone" dataKey="applications" stroke="#38bdf8" strokeWidth={2} dot={{ r: 3 }} name="Applications" />
            <Line type="monotone" dataKey="hires" stroke="#34d399" strokeWidth={2} dot={{ r: 3 }} strokeDasharray="5 3" name="Hires" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;