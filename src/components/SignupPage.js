import React, { useState } from 'react';

const SignupPage = ({ onSignup, onGoLogin }) => {
  const [form, setForm] = useState({ name: '', email: '', company: '', pass: '', confirm: '' });
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr('');
    if (!form.name || !form.email || !form.company || !form.pass) {
      setErr('Please fill in all fields.');
      return;
    }
    if (form.pass.length < 8) {
      setErr('Password must be at least 8 characters.');
      return;
    }
    if (form.pass !== form.confirm) {
      setErr('Passwords do not match.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 1200);
  };

  if (done) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: '#0a0e17', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '24px' 
      }}>
        <div style={{ 
          maxWidth: '1100px', 
          width: '100%', 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr', 
          gap: '60px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '40px', background: '#2563eb', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontSize: '20px', fontWeight: '700' }}>H</span>
              </div>
              <span style={{ fontSize: '24px', fontWeight: '600', color: '#ffffff', letterSpacing: '-0.5px' }}>HireFlow</span>
            </div>
            <h1 style={{ fontSize: '36px', fontWeight: '600', color: '#ffffff', marginBottom: '16px', letterSpacing: '-1px' }}>
              Account created
            </h1>
            <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.6' }}>
              Welcome to HireFlow, {form.name.split(' ')[0]}! Your workspace is ready.
            </p>
          </div>
          <div style={{ background: '#111827', borderRadius: '20px', padding: '48px', border: '1px solid #1f2937', textAlign: 'center' }}>
            <div style={{ marginBottom: '24px' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(34,197,94,0.1)', borderRadius: '32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <span style={{ fontSize: '32px' }}>✓</span>
              </div>
            </div>
            <h2 style={{ fontSize: '20px', fontWeight: '600', color: '#ffffff', marginBottom: '12px' }}>Registration complete</h2>
            <p style={{ fontSize: '14px', color: '#6b7280', marginBottom: '32px' }}>
              Your account has been successfully created.
            </p>
            <button 
              onClick={() => onSignup({ email: form.email, name: form.name, role: 'Recruiter' })} 
              style={{ 
                width: '100%', 
                height: '48px', 
                background: '#2563eb', 
                border: 'none', 
                borderRadius: '10px', 
                color: '#ffffff', 
                fontSize: '14px', 
                fontWeight: '500', 
                cursor: 'pointer' 
              }}
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0a0e17', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '24px' 
    }}>
      <div style={{ 
        maxWidth: '1100px', 
        width: '100%', 
        display: 'grid', 
        gridTemplateColumns: '1fr 1fr', 
        gap: '60px',
        alignItems: 'center'
      }}>
        {/* Left Side */}
        <div>
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div style={{ width: '40px', height: '40px', background: '#2563eb', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: 'white', fontSize: '20px', fontWeight: '700' }}>H</span>
              </div>
              <span style={{ fontSize: '24px', fontWeight: '600', color: '#ffffff', letterSpacing: '-0.5px' }}>HireFlow</span>
            </div>
            <h1 style={{ fontSize: '36px', fontWeight: '600', color: '#ffffff', marginBottom: '16px', letterSpacing: '-1px', lineHeight: '1.2' }}>
              Start your<br />recruitment journey
            </h1>
            <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.6' }}>
              Join leading companies using HireFlow to build better teams.
            </p>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <div style={{ background: '#111827', borderRadius: '20px', padding: '40px', border: '1px solid #1f2937' }}>
          <div style={{ marginBottom: '28px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>Create account</h2>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>Get started with your free trial</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
                Full name
              </label>
              <input 
                type="text" 
                value={form.name} 
                onChange={e => setForm({ ...form, name: e.target.value })} 
                placeholder="John Smith" 
                style={{ 
                  width: '100%', 
                  height: '46px', 
                  padding: '0 14px', 
                  background: '#1f2937', 
                  border: '1px solid #374151', 
                  borderRadius: '10px', 
                  color: '#ffffff', 
                  fontSize: '14px', 
                  outline: 'none' 
                }} 
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
                Company name
              </label>
              <input 
                type="text" 
                value={form.company} 
                onChange={e => setForm({ ...form, company: e.target.value })} 
                placeholder="Acme Inc" 
                style={{ 
                  width: '100%', 
                  height: '46px', 
                  padding: '0 14px', 
                  background: '#1f2937', 
                  border: '1px solid #374151', 
                  borderRadius: '10px', 
                  color: '#ffffff', 
                  fontSize: '14px', 
                  outline: 'none' 
                }} 
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
                Work email
              </label>
              <input 
                type="email" 
                value={form.email} 
                onChange={e => setForm({ ...form, email: e.target.value })} 
                placeholder="name@company.com" 
                style={{ 
                  width: '100%', 
                  height: '46px', 
                  padding: '0 14px', 
                  background: '#1f2937', 
                  border: '1px solid #374151', 
                  borderRadius: '10px', 
                  color: '#ffffff', 
                  fontSize: '14px', 
                  outline: 'none' 
                }} 
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
                  Password
                </label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type={showPass ? 'text' : 'password'} 
                    value={form.pass} 
                    onChange={e => setForm({ ...form, pass: e.target.value })} 
                    placeholder="Min. 8 chars" 
                    style={{ 
                      width: '100%', 
                      height: '46px', 
                      padding: '0 40px 0 14px', 
                      background: '#1f2937', 
                      border: '1px solid #374151', 
                      borderRadius: '10px', 
                      color: '#ffffff', 
                      fontSize: '14px', 
                      outline: 'none' 
                    }} 
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPass(!showPass)} 
                    style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', fontSize: '12px' }}
                  >
                    {showPass ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
                  Confirm
                </label>
                <div style={{ position: 'relative' }}>
                  <input 
                    type={showConfirmPass ? 'text' : 'password'} 
                    value={form.confirm} 
                    onChange={e => setForm({ ...form, confirm: e.target.value })} 
                    placeholder="Confirm" 
                    style={{ 
                      width: '100%', 
                      height: '46px', 
                      padding: '0 40px 0 14px', 
                      background: '#1f2937', 
                      border: '1px solid #374151', 
                      borderRadius: '10px', 
                      color: '#ffffff', 
                      fontSize: '14px', 
                      outline: 'none' 
                    }} 
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowConfirmPass(!showConfirmPass)} 
                    style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', fontSize: '12px' }}
                  >
                    {showConfirmPass ? 'Hide' : 'Show'}
                  </button>
                </div>
              </div>
            </div>

            {err && (
              <div style={{ 
                background: 'rgba(239,68,68,0.1)', 
                border: '1px solid rgba(239,68,68,0.3)', 
                borderRadius: '10px', 
                padding: '12px', 
                marginBottom: '20px', 
                fontSize: '13px', 
                color: '#ef4444' 
              }}>
                {err}
              </div>
            )}

            <button 
              type="submit" 
              disabled={loading} 
              style={{ 
                width: '100%', 
                height: '48px', 
                background: '#2563eb', 
                border: 'none', 
                borderRadius: '10px', 
                color: '#ffffff', 
                fontSize: '14px', 
                fontWeight: '500', 
                cursor: 'pointer', 
                marginBottom: '24px', 
                opacity: loading ? 0.7 : 1 
              }}
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '13px', color: '#6b7280' }}>Already have an account? </span>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onGoLogin(); }} 
                style={{ fontSize: '13px', color: '#2563eb', fontWeight: '500', textDecoration: 'none' }}
              >
                Sign in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;