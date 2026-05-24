import React, { useState, useMemo } from 'react';

// Candidates with coordinates for geofencing
const CANDIDATES = [
  { id: 1, name: "Aisha Rahman", role: "Senior Frontend Dev", dept: "Engineering", avatar: "AR", color: "#38bdf8", status: "Shortlisted", score: 92, applied: "May 18, 2026", location: "Karachi, PK", email: "aisha.rahman@email.com", phone: "+92 300 1234567", experience: "6 years", skills: ["React", "TypeScript", "Node.js"], stage: 2, starred: true, lat: 24.8607, lng: 67.0011, distance: 5.2 },
  { id: 2, name: "Omar Farooq", role: "Product Manager", dept: "Product", avatar: "OF", color: "#818cf8", status: "Interviewed", score: 87, applied: "May 15, 2026", location: "Lahore, PK", email: "omar.farooq@email.com", phone: "+92 321 9876543", experience: "8 years", skills: ["Roadmapping", "Agile", "SQL"], stage: 3, starred: false, lat: 31.5497, lng: 74.3436, distance: 12.8 },
  { id: 3, name: "Sara Ahmed", role: "UX Designer", dept: "Design", avatar: "SA", color: "#a78bfa", status: "Applied", score: 78, applied: "May 20, 2026", location: "Islamabad, PK", email: "sara.ahmed@email.com", phone: "+92 333 5556789", experience: "4 years", skills: ["Figma", "Prototyping", "Research"], stage: 1, starred: true, lat: 33.6844, lng: 73.0479, distance: 8.5 },
  { id: 4, name: "Hamza Ali", role: "Backend Engineer", dept: "Engineering", avatar: "HA", color: "#34d399", status: "Hired", score: 95, applied: "May 10, 2026", location: "Karachi, PK", email: "hamza.ali@email.com", phone: "+92 312 4441234", experience: "5 years", skills: ["Go", "Kubernetes", "AWS"], stage: 4, starred: false, lat: 24.8607, lng: 67.0011, distance: 3.1 },
  { id: 5, name: "Zara Khan", role: "Data Scientist", dept: "Analytics", avatar: "ZK", color: "#fbbf24", status: "Rejected", score: 65, applied: "May 12, 2026", location: "Peshawar, PK", email: "zara.khan@email.com", phone: "+92 345 7890123", experience: "3 years", skills: ["Python", "ML", "TensorFlow"], stage: 0, starred: false, lat: 34.0151, lng: 71.5249, distance: 25.3 },
  { id: 6, name: "Bilal Hussain", role: "DevOps Engineer", dept: "Engineering", avatar: "BH", color: "#6366f1", status: "Shortlisted", score: 89, applied: "May 17, 2026", location: "Lahore, PK", email: "bilal.hussain@email.com", phone: "+92 300 9998877", experience: "7 years", skills: ["Docker", "CI/CD", "Terraform"], stage: 2, starred: true, lat: 31.5497, lng: 74.3436, distance: 6.4 },
  { id: 7, name: "Nadia Malik", role: "HR Specialist", dept: "HR", avatar: "NM", color: "#f87171", status: "Interviewed", score: 82, applied: "May 14, 2026", location: "Quetta, PK", email: "nadia.malik@email.com", phone: "+92 321 3334455", experience: "5 years", skills: ["Recruitment", "HRIS", "L&D"], stage: 3, starred: false, lat: 30.1798, lng: 66.9750, distance: 18.2 },
  { id: 8, name: "Tariq Mehmood", role: "Full Stack Dev", dept: "Engineering", avatar: "TM", color: "#22d3ee", status: "Applied", score: 75, applied: "May 21, 2026", location: "Faisalabad, PK", email: "tariq.mehmood@email.com", phone: "+92 333 2221100", experience: "3 years", skills: ["React", "Django", "PostgreSQL"], stage: 1, starred: false, lat: 31.4504, lng: 73.1350, distance: 9.7 },
];

const STATUS_CONFIG = {
  Applied: { bg: "rgba(56,189,248,0.15)", text: "#38bdf8", dot: "#38bdf8" },
  Shortlisted: { bg: "rgba(251,191,36,0.15)", text: "#fbbf24", dot: "#fbbf24" },
  Interviewed: { bg: "rgba(129,140,248,0.15)", text: "#818cf8", dot: "#818cf8" },
  Hired: { bg: "rgba(52,211,153,0.15)", text: "#34d399", dot: "#34d399" },
  Rejected: { bg: "rgba(248,113,113,0.15)", text: "#f87171", dot: "#f87171" },
};

const STAGES = ["Applied", "Shortlisted", "Interviewed", "Hired"];

const Candidates = ({ theme }) => {
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
  const [statusFilter, setStatusFilter] = useState("All");
  const [deptFilter, setDeptFilter] = useState("All");
  const [distanceFilter, setDistanceFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const [starred, setStarred] = useState(() => new Set(CANDIDATES.filter(c => c.starred).map(c => c.id)));

  const filtered = useMemo(() => CANDIDATES.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.role.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === "All" || c.status === statusFilter;
    const matchesDept = deptFilter === "All" || c.dept === deptFilter;
    
    let matchesDistance = true;
    if (distanceFilter !== "All") {
      const maxDist = parseInt(distanceFilter);
      matchesDistance = c.distance <= maxDist;
    }
    
    return matchesSearch && matchesStatus && matchesDept && matchesDistance;
  }), [search, statusFilter, deptFilter, distanceFilter]);

  const Badge = ({ status }) => {
    const cfg = STATUS_CONFIG[status] || STATUS_CONFIG.Applied;
    return (
      <span style={{ background: cfg.bg, color: cfg.text, padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '600', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
        <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: cfg.dot }} />
        {status}
      </span>
    );
  };

  const ScoreBar = ({ score }) => {
    const c = score >= 85 ? "#34d399" : score >= 70 ? "#fbbf24" : "#f87171";
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <div style={{ flex: 1, height: '5px', background: 'rgba(255,255,255,0.07)', borderRadius: '3px' }}>
          <div style={{ width: `${score}%`, height: '100%', background: c, borderRadius: '3px' }} />
        </div>
        <span style={{ fontSize: '12px', fontWeight: '600', color: c, minWidth: '26px' }}>{score}</span>
      </div>
    );
  };

  const Avatar = ({ i, c, s = 34 }) => (
    <div style={{ width: s, height: s, borderRadius: '50%', background: c + '20', border: `1.5px solid ${c}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c, fontWeight: '700', fontSize: s * 0.31, flexShrink: 0 }}>
      {i}
    </div>
  );

  const getDistanceColor = (distance) => {
    if (distance <= 5) return "#34d399";
    if (distance <= 10) return "#fbbf24";
    return "#f87171";
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 340px' : '1fr', gap: '16px', height: '100%', animation: 'fadeIn 0.3s ease-out' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ margin: 0, fontSize: '13px', color: colors.text3 }}>{filtered.length} candidates total</p>
          <button style={{ padding: '8px 16px', background: `linear-gradient(135deg, #1d6feb, ${colors.accent})`, border: 'none', borderRadius: '8px', color: '#fff', fontSize: '13px', fontWeight: '600', cursor: 'pointer' }}>+ Add Candidate</button>
        </div>

        <div style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '14px', padding: '12px 14px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '10px' }}>
            <input style={{ height: '38px', border: `1px solid ${colors.border}`, borderRadius: '8px', padding: '0 12px', fontSize: '13px', color: colors.text, outline: 'none', background: isDark ? 'rgba(255,255,255,0.04)' : '#f8fafc' }} placeholder="🔍 Search..." value={search} onChange={e => setSearch(e.target.value)} />
            <select style={{ height: '38px', border: `1px solid ${colors.border}`, borderRadius: '8px', padding: '0 10px', fontSize: '13px', color: colors.text2, background: colors.bg3, cursor: 'pointer', outline: 'none' }} value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
              {["All", "Applied", "Shortlisted", "Interviewed", "Hired", "Rejected"].map(s => <option key={s}>{s}</option>)}
            </select>
            <select style={{ height: '38px', border: `1px solid ${colors.border}`, borderRadius: '8px', padding: '0 10px', fontSize: '13px', color: colors.text2, background: colors.bg3, cursor: 'pointer', outline: 'none' }} value={deptFilter} onChange={e => setDeptFilter(e.target.value)}>
              {["All", "Engineering", "Product", "Design", "Analytics", "HR"].map(d => <option key={d}>{d}</option>)}
            </select>
            <select style={{ height: '38px', border: `1px solid ${colors.border}`, borderRadius: '8px', padding: '0 10px', fontSize: '13px', color: colors.text2, background: colors.bg3, cursor: 'pointer', outline: 'none' }} value={distanceFilter} onChange={e => setDistanceFilter(e.target.value)}>
              <option value="All">📍 All distances</option>
              <option value="5">📍 Within 5 km</option>
              <option value="10">📍 Within 10 km</option>
              <option value="20">📍 Within 20 km</option>
              <option value="50">📍 Within 50 km</option>
            </select>
          </div>
        </div>

        <div style={{ background: colors.bg3, borderRadius: '10px 10px 0 0', border: `1px solid ${colors.border}`, borderBottom: 'none', padding: '9px 14px', display: 'grid', gridTemplateColumns: '2fr 1.3fr 0.8fr 1fr 0.8fr 1fr 50px' }}>
          {["Candidate", "Role", "Dept", "Status", "Distance", "Score", ""].map(h => (
            <span key={h} style={{ fontSize: '9px', fontWeight: '700', color: colors.text3, letterSpacing: '0.07em', textTransform: 'uppercase' }}>{h}</span>
          ))}
        </div>
        <div style={{ border: `1px solid ${colors.border}`, borderRadius: '0 0 12px 12px', overflow: 'hidden', flex: 1 }}>
          {filtered.map((c, i) => (
            <div key={c.id} onClick={() => setSelected(s => s?.id === c.id ? null : c)} style={{ display: 'grid', gridTemplateColumns: '2fr 1.3fr 0.8fr 1fr 0.8fr 1fr 50px', padding: '10px 14px', borderBottom: i < filtered.length - 1 ? `1px solid ${colors.border}` : 'none', background: selected?.id === c.id ? `${colors.accent}12` : colors.bg2, cursor: 'pointer', alignItems: 'center', transition: 'background 0.12s' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                <Avatar i={c.avatar} c={c.color} s={30} />
                <div>
                  <p style={{ margin: 0, fontSize: '12px', fontWeight: '600', color: colors.text }}>{c.name}</p>
                  <p style={{ margin: '1px 0 0', fontSize: '10px', color: colors.text3 }}>{c.applied}</p>
                </div>
              </div>
              <span style={{ fontSize: '12px', color: colors.text2 }}>{c.role}</span>
              <span style={{ background: '#38bdf822', color: '#38bdf8', padding: '2px 9px', borderRadius: '4px', fontSize: '11px', fontWeight: '600', width: 'fit-content' }}>{c.dept}</span>
              <Badge status={c.status} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>📍</span>
                <span style={{ fontSize: '11px', fontWeight: '600', color: getDistanceColor(c.distance) }}>{c.distance} km</span>
              </div>
              <ScoreBar score={c.score} />
              <button onClick={e => { e.stopPropagation(); setStarred(s => { const n = new Set(s); n.has(c.id) ? n.delete(c.id) : n.add(c.id); return n; }); }} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px' }}>
                {starred.has(c.id) ? "⭐" : "☆"}
              </button>
            </div>
          ))}
        </div>
      </div>

      {selected && (
        <div style={{ background: colors.bg2, border: `1px solid ${colors.border}`, borderRadius: '14px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ background: selected.color + '12', padding: '16px', borderBottom: `1px solid ${colors.border}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', gap: '11px', alignItems: 'center' }}>
                <Avatar i={selected.avatar} c={selected.color} s={46} />
                <div>
                  <h2 style={{ margin: 0, fontSize: '15px', fontWeight: '700', color: colors.text }}>{selected.name}</h2>
                  <p style={{ margin: '2px 0 5px', fontSize: '12px', color: colors.text3 }}>{selected.role}</p>
                  <Badge status={selected.status} />
                </div>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '16px', color: colors.text3 }}>✕</button>
            </div>
          </div>
          <div style={{ padding: '16px', overflowY: 'auto', flex: 1 }}>
            <div style={{ marginBottom: '14px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                <span style={{ fontSize: '11px', fontWeight: '600', color: colors.text3 }}>Match Score</span>
                <span style={{ fontSize: '13px', fontWeight: '700', color: colors.text }}>{selected.score}/100</span>
              </div>
              <ScoreBar score={selected.score} />
            </div>

            {/* Geofencing Info Card */}
            <div style={{ marginBottom: '14px', background: `${getDistanceColor(selected.distance)}15`, borderRadius: '10px', padding: '10px', border: `1px solid ${getDistanceColor(selected.distance)}30` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '5px' }}>
                <span>📍</span>
                <span style={{ fontSize: '12px', fontWeight: '600', color: colors.text }}>Location Analysis</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                <span style={{ fontSize: '11px', color: colors.text3 }}>Distance from office:</span>
                <span style={{ fontSize: '12px', fontWeight: '700', color: getDistanceColor(selected.distance) }}>{selected.distance} km</span>
              </div>
              <div style={{ marginTop: '6px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px' }}>
                <div style={{ width: `${Math.min(100, (selected.distance / 50) * 100)}%`, height: '100%', background: getDistanceColor(selected.distance), borderRadius: '2px' }} />
              </div>
              <p style={{ fontSize: '10px', color: colors.text3, marginTop: '6px', marginBottom: 0 }}>
                {selected.distance <= 5 ? '✅ Ideal location - within preferred radius' : 
                 selected.distance <= 10 ? '⚠️ Acceptable distance' : 
                 '❌ Far from office - consider relocation'}
              </p>
            </div>

            <div style={{ marginBottom: '14px' }}>
              <p style={{ margin: '0 0 7px', fontSize: '10px', fontWeight: '700', color: colors.text3, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Pipeline Stage</p>
              <div style={{ display: 'flex' }}>
                {STAGES.map((s, i) => {
                  const stageIdx = STAGES.indexOf(["Rejected", "Applied"].includes(selected.status) ? "Applied" : selected.status);
                  const active = i <= stageIdx;
                  return (
                    <div key={s} style={{ flex: 1, textAlign: 'center' }}>
                      <div style={{ height: '4px', background: active ? selected.color : colors.border, marginBottom: '4px', borderRadius: i === 0 ? '2px 0 0 2px' : i === STAGES.length - 1 ? '0 2px 2px 0' : 0 }} />
                      <span style={{ fontSize: '9px', color: active ? selected.color : colors.text3 }}>{s}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {[["📧", selected.email], ["📞", selected.phone], ["📍", selected.location], ["🏆", selected.experience + " experience"]].map(([ic, tx]) => (
              <div key={tx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '7px' }}>
                <span>{ic}</span>
                <span style={{ fontSize: '12px', color: colors.text2 }}>{tx}</span>
              </div>
            ))}

            <p style={{ margin: '12px 0 7px', fontSize: '10px', fontWeight: '700', color: colors.text3, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Skills</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
              {selected.skills.map(s => <span key={s} style={{ background: selected.color + '22', color: selected.color, padding: '2px 9px', borderRadius: '4px', fontSize: '11px', fontWeight: '600' }}>{s}</span>)}
            </div>

            <button style={{ width: '100%', padding: '10px', background: `linear-gradient(135deg, #1d6feb, ${colors.accent})`, border: 'none', borderRadius: '8px', color: '#fff', fontSize: '13px', fontWeight: '600', cursor: 'pointer', marginBottom: '8px' }}>📅 Schedule Interview</button>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '8px' }}>
              <button style={{ padding: '8px', background: 'transparent', border: `1px solid ${colors.border}`, borderRadius: '8px', color: colors.text2, fontSize: '12px', cursor: 'pointer' }}>📧 Email</button>
              <button style={{ padding: '8px', background: 'transparent', border: `1px solid ${colors.border}`, borderRadius: '8px', color: colors.text2, fontSize: '12px', cursor: 'pointer' }}>📄 View CV</button>
            </div>
            <button style={{ width: '100%', padding: '8px', background: 'transparent', border: `1px solid rgba(248,113,113,0.3)`, borderRadius: '8px', color: '#f87171', fontSize: '12px', cursor: 'pointer' }}>✕ Reject</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Candidates;