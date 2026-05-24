import React from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const PIPELINE_DATA = [
  { name: "Applied", value: 142, color: "#38bdf8" },
  { name: "Screened", value: 89, color: "#818cf8" },
  { name: "Interviewed", value: 45, color: "#a78bfa" },
  { name: "Offered", value: 18, color: "#34d399" },
  { name: "Hired", value: 12, color: "#10b981" },
];

const MONTHLY_DATA = [
  { month: "Dec", applications: 68, hires: 5 },
  { month: "Jan", applications: 92, hires: 8 },
  { month: "Feb", applications: 78, hires: 6 },
  { month: "Mar", applications: 115, hires: 11 },
  { month: "Apr", applications: 134, hires: 9 },
  { month: "May", applications: 142, hires: 12 },
];

const DEPT_DATA = [
  { dept: "Engineering", open: 8, filled: 3 },
  { dept: "Product", open: 3, filled: 2 },
  { dept: "Design", open: 4, filled: 1 },
  { dept: "Analytics", open: 2, filled: 1 },
  { dept: "HR", open: 2, filled: 2 },
];

const ACTIVITY = [
  { id: 1, type: "hire", text: "Hamza Ali was marked as Hired", time: "2h ago" },
  { id: 2, type: "interview", text: "Interview scheduled with Aisha Rahman", time: "4h ago" },
  { id: 3, type: "apply", text: "8 new applications for Frontend Dev", time: "6h ago" },
  { id: 4, type: "reject", text: "Zara Khan application rejected", time: "1d ago" },
  { id: 5, type: "shortlist", text: "Bilal Hussain shortlisted", time: "1d ago" },
];

const Dashboard = ({ setPage, theme }) => {
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', animation: 'fadeIn 0.3s ease-out' }}>
      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px' }}>
        <StatCard label="Total Applicants" value="142" change="+18%" positive icon="👥" col="#38bdf8" />
        <StatCard label="Open Positions" value="18" change="+3" positive icon="💼" col="#818cf8" />
        <StatCard label="Hired This Month" value="12" change="+4" positive icon="✅" col="#34d399" />
        <StatCard label="Avg. Time to Hire" value="18d" change="-2d" positive icon="⏱" col="#fbbf24" />
      </div>

      {/* Quick Actions */}
      <div style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '14px', padding: '14px 18px' }}>
        <p style={{ margin: '0 0 11px', fontSize: '11px', fontWeight: '700', color: colors.text3, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Quick Actions</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
          {[
            { label: "View Candidates", icon: "👥", page: "candidates", col: "#38bdf8" },
            { label: "Post a Job", icon: "💼", page: "jobs", col: "#818cf8" },
            { label: "Schedule Interview", icon: "📅", page: "interviews", col: "#34d399" },
            { label: "View Analytics", icon: "📈", page: "analytics", col: "#fbbf24" },
          ].map(a => (
            <button key={a.page} onClick={() => setPage(a.page)} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: '12px 8px', borderRadius: '10px', border: `1px solid ${colors.border}`, background: a.col + '0f', cursor: 'pointer', color: a.col, transition: 'all 0.15s' }}>
              <span style={{ fontSize: '20px' }}>{a.icon}</span>
              <span style={{ fontSize: '11px', fontWeight: '600', color: colors.text2 }}>{a.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Charts Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '14px', padding: '18px 20px' }}>
          <h3 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: '600', color: colors.text }}>Applications & Hires</h3>
          <ResponsiveContainer width="100%" height={160}>
            <LineChart data={MONTHLY_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.border} />
              <XAxis dataKey="month" tick={{ fontSize: 10, fill: colors.text3 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 10, fill: colors.text3 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '8px', fontSize: '11px', color: colors.text }} />
              <Line type="monotone" dataKey="applications" stroke="#38bdf8" strokeWidth={2} dot={false} name="Applications" />
              <Line type="monotone" dataKey="hires" stroke="#34d399" strokeWidth={2} dot={false} name="Hires" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '14px', padding: '18px 20px' }}>
          <h3 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: '600', color: colors.text }}>Hiring Pipeline</h3>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <ResponsiveContainer width="50%" height={150}>
              <PieChart>
                <Pie data={PIPELINE_DATA} cx="50%" cy="50%" innerRadius={40} outerRadius={65} dataKey="value" strokeWidth={0}>
                  {PIPELINE_DATA.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Tooltip contentStyle={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '8px', fontSize: '11px', color: colors.text }} />
              </PieChart>
            </ResponsiveContainer>
            <div style={{ flex: 1 }}>
              {PIPELINE_DATA.map(d => (
                <div key={d.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '7px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: d.color, display: 'inline-block' }} />
                    <span style={{ fontSize: '11px', color: colors.text3 }}>{d.name}</span>
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: '600', color: colors.text }}>{d.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '12px' }}>
        <div style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '14px', padding: '18px 20px' }}>
          <h3 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: '600', color: colors.text }}>Hiring by Department</h3>
          <ResponsiveContainer width="100%" height={130}>
            <BarChart data={DEPT_DATA} layout="vertical" barSize={10}>
              <CartesianGrid strokeDasharray="3 3" stroke={colors.border} horizontal={false} />
              <XAxis type="number" tick={{ fontSize: 10, fill: colors.text3 }} axisLine={false} tickLine={false} />
              <YAxis type="category" dataKey="dept" tick={{ fontSize: 10, fill: colors.text2 }} axisLine={false} tickLine={false} width={72} />
              <Tooltip contentStyle={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '8px', fontSize: '11px', color: colors.text }} />
              <Bar dataKey="open" fill="rgba(56,189,248,0.2)" stroke="#38bdf8" strokeWidth={1} radius={[0, 3, 3, 0]} name="Open" />
              <Bar dataKey="filled" fill="#34d399" radius={[0, 3, 3, 0]} name="Filled" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '14px', padding: '18px 20px' }}>
          <h3 style={{ margin: '0 0 12px', fontSize: '13px', fontWeight: '600', color: colors.text }}>Recent Activity</h3>
          {ACTIVITY.map((a, i) => (
            <div key={a.id} style={{ display: 'flex', gap: '9px', paddingBottom: i < ACTIVITY.length - 1 ? '10px' : 0, marginBottom: i < ACTIVITY.length - 1 ? '10px' : 0, borderBottom: i < ACTIVITY.length - 1 ? `1px solid ${colors.border}` : 'none' }}>
              <span style={{ fontSize: '13px', flexShrink: 0 }}>{a.type === "hire" ? "✅" : a.type === "interview" ? "📅" : a.type === "apply" ? "👥" : a.type === "reject" ? "❌" : "⭐"}</span>
              <div>
                <p style={{ margin: 0, fontSize: '11px', color: colors.text2, lineHeight: '1.4' }}>{a.text}</p>
                <p style={{ margin: '2px 0 0', fontSize: '10px', color: colors.text3 }}>{a.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;