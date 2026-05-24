import React, { useState } from 'react';

const LoginPage = ({ onLogin, onGoSignup }) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErr('');
    if (!email || !pass) {
      setErr('Please fill in all fields.');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      if (email.trim().toLowerCase() === 'hireflowadmin@gmail.com' && pass === 'password123') {
        onLogin({ email, name: 'Hira Noor', role: 'HR Manager' });
      } else {
        setErr('Invalid email or password');
        setLoading(false);
      }
    }, 800);
  };

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
        {/* Left Side - Simple Brand */}
        <div>
          <div style={{ marginBottom: '40px' }}>
            <div style={{ 
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px'
            }}>
              <div style={{ 
                width: '40px', 
                height: '40px', 
                background: '#2563eb', 
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <span style={{ color: 'white', fontSize: '20px', fontWeight: '700' }}>H</span>
              </div>
              <span style={{ 
                fontSize: '24px', 
                fontWeight: '600', 
                color: '#ffffff',
                letterSpacing: '-0.5px'
              }}>HireFlow</span>
            </div>
            <h1 style={{ 
              fontSize: '36px', 
              fontWeight: '600', 
              color: '#ffffff', 
              marginBottom: '16px',
              letterSpacing: '-1px',
              lineHeight: '1.2'
            }}>
              Recruitment<br />Operations Platform
            </h1>
            <p style={{ fontSize: '15px', color: '#6b7280', lineHeight: '1.6' }}>
              Streamline your hiring process from sourcing to onboarding.
            </p>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div style={{ 
          background: '#111827', 
          borderRadius: '20px', 
          padding: '48px',
          border: '1px solid #1f2937'
        }}>
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: '#ffffff', marginBottom: '8px' }}>Welcome back</h2>
            <p style={{ fontSize: '14px', color: '#6b7280' }}>Enter your credentials to access your account</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
                Email address
              </label>
              <input 
                type="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
                placeholder="name@company.com" 
                style={{ 
                  width: '100%', 
                  height: '48px', 
                  padding: '0 16px', 
                  background: '#1f2937', 
                  border: '1px solid #374151', 
                  borderRadius: '10px', 
                  color: '#ffffff', 
                  fontSize: '14px', 
                  outline: 'none',
                  transition: 'all 0.2s'
                }}
                onFocus={e => e.target.style.borderColor = '#2563eb'}
                onBlur={e => e.target.style.borderColor = '#374151'}
              />
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '13px', fontWeight: '500', color: '#9ca3af', marginBottom: '8px' }}>
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <input 
                  type={showPass ? 'text' : 'password'} 
                  value={pass} 
                  onChange={e => setPass(e.target.value)} 
                  placeholder="Enter your password" 
                  style={{ 
                    width: '100%', 
                    height: '48px', 
                    padding: '0 48px 0 16px', 
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
                  style={{ 
                    position: 'absolute', 
                    right: '16px', 
                    top: '50%', 
                    transform: 'translateY(-50%)', 
                    background: 'none', 
                    border: 'none', 
                    cursor: 'pointer', 
                    color: '#6b7280', 
                    fontSize: '14px' 
                  }}
                >
                  {showPass ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '28px' }}>
              <a href="#" style={{ fontSize: '13px', color: '#2563eb', textDecoration: 'none' }}>Forgot password?</a>
            </div>

            {err && (
              <div style={{ 
                background: 'rgba(239,68,68,0.1)', 
                border: '1px solid rgba(239,68,68,0.3)', 
                borderRadius: '10px', 
                padding: '12px 16px', 
                marginBottom: '24px', 
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
                opacity: loading ? 0.7 : 1,
                marginBottom: '28px'
              }}
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>

            <div style={{ textAlign: 'center' }}>
              <span style={{ fontSize: '13px', color: '#6b7280' }}>Don't have an account? </span>
              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); onGoSignup(); }} 
                style={{ fontSize: '13px', color: '#2563eb', fontWeight: '500', textDecoration: 'none' }}
              >
                Create account
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;