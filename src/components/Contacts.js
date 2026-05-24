import React, { useState, useMemo } from 'react';

const CONTACTS = [
  { id: 1, name: "Usman Khan", role: "Senior Recruiter", company: "HireFlow", email: "usman.khan@hireflow.com", phone: "+92 300 1111111", location: "Lahore, PK", avatar: "UK", color: "#38bdf8", type: "Recruiter", status: "Active" },
  { id: 2, name: "Fatima Rizvi", role: "HR Coordinator", company: "HireFlow", email: "fatima.rizvi@hireflow.com", phone: "+92 321 2222222", location: "Karachi, PK", avatar: "FR", color: "#a78bfa", type: "HR", status: "Active" },
  { id: 3, name: "Ali Hassan", role: "Talent Acquisition", company: "HireFlow", email: "ali.hassan@hireflow.com", phone: "+92 312 3333333", location: "Islamabad, PK", avatar: "AH", color: "#34d399", type: "Recruiter", status: "Active" },
  { id: 4, name: "Maria Siddiqui", role: "Hiring Manager", company: "TechCorp", email: "maria@techcorp.com", phone: "+92 333 4444444", location: "Karachi, PK", avatar: "MS", color: "#fbbf24", type: "Client", status: "Active" },
  { id: 5, name: "Zubair Ahmed", role: "CTO", company: "FinTech Ltd", email: "zubair@fintech.com", phone: "+92 345 5555555", location: "Lahore, PK", avatar: "ZA", color: "#f87171", type: "Client", status: "Inactive" },
  { id: 6, name: "Hana Qureshi", role: "Head of HR", company: "RetailCo", email: "hana@retailco.com", phone: "+92 300 6666666", location: "Multan, PK", avatar: "HQ", color: "#818cf8", type: "Client", status: "Active" },
];

const Contacts = ({ theme }) => {
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

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");

  const filtered = useMemo(() => CONTACTS.filter(c =>
    (c.name.toLowerCase().includes(search.toLowerCase()) || c.company.toLowerCase().includes(search.toLowerCase())) &&
    (typeFilter === "All" || c.type === typeFilter)
  ), [search, typeFilter]);

  const Avatar = ({ i, c, s = 42 }) => (
    <div style={{ width: s, height: s, borderRadius: '50%', background: c + '20', border: `1.5px solid ${c}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c, fontWeight: '700', fontSize: s * 0.31, flexShrink: 0 }}>
      {i}
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', animation: 'fadeIn 0.3s ease-out' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ margin: 0, fontSize: '13px', color: colors.text3 }}>{filtered.length} contacts in your network</p>
        <button style={{ padding: '8px 16px', background: `linear-gradient(135deg, #1d6feb, ${colors.accent})`, border: 'none', borderRadius: '8px', color: '#fff', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>+ Add Contact</button>
      </div>

      <div style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '14px', padding: '12px 14px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input style={{ height: '38px', border: `1px solid ${colors.border}`, borderRadius: '8px', padding: '0 12px', fontSize: '13px', color: colors.text, outline: 'none', background: isDark ? 'rgba(255,255,255,0.04)' : '#f8fafc', width: '100%' }} placeholder="🔍 Search contacts..." value={search} onChange={e => setSearch(e.target.value)} />
          <select style={{ height: '38px', border: `1px solid ${colors.border}`, borderRadius: '8px', padding: '0 10px', fontSize: '13px', color: colors.text2, background: colors.bg3, cursor: 'pointer', outline: 'none' }} value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
            {["All", "Recruiter", "HR", "Client"].map(t => <option key={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '12px' }}>
        {filtered.map(ct => (
          <div key={ct.id} style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '14px', padding: '18px 20px', cursor: 'pointer' }}>
            <div style={{ display: 'flex', gap: '11px', alignItems: 'center', marginBottom: '11px' }}>
              <Avatar i={ct.avatar} c={ct.color} s={42} />
              <div>
                <p style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: colors.text }}>{ct.name}</p>
                <p style={{ margin: '2px 0 0', fontSize: '11px', color: colors.text3 }}>{ct.role}</p>
                <p style={{ margin: '1px 0 0', fontSize: '10px', color: colors.text3 }}>{ct.company}</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '7px', marginBottom: '11px', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ background: '#38bdf822', color: '#38bdf8', padding: '2px 9px', borderRadius: '4px', fontSize: '11px', fontWeight: '600' }}>{ct.type}</span>
              <span style={{ background: ct.status === "Active" ? 'rgba(52,211,153,0.12)' : 'rgba(255,255,255,0.04)', color: ct.status === "Active" ? "#34d399" : colors.text3, padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '500' }}>{ct.status}</span>
            </div>
            <div style={{ fontSize: '11px', color: colors.text3, lineHeight: '1.9' }}>
              <div>📧 {ct.email}</div>
              <div>📞 {ct.phone}</div>
              <div>📍 {ct.location}</div>
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '11px' }}>
              <button style={{ flex: 1, padding: '6px', background: 'transparent', border: `1px solid ${colors.border}`, borderRadius: '6px', color: colors.text2, fontSize: '11px', cursor: 'pointer' }}>📧 Email</button>
              <button style={{ flex: 1, padding: '6px', background: 'transparent', border: `1px solid ${colors.border}`, borderRadius: '6px', color: colors.text2, fontSize: '11px', cursor: 'pointer' }}>📞 Call</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;