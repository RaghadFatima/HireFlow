import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import Candidates from './components/Candidates';
import Jobs from './components/Jobs';
import Interviews from './components/Interviews';
import Analytics from './components/Analytics';
import Contacts from './components/Contacts';
import SettingsPage from './components/SettingsPage';

const VALID_EMAIL = "hireflowadmin@gmail.com";
const VALID_PASS = "password123";

const VIEWS = {
  dashboard: Dashboard,
  candidates: Candidates,
  jobs: Jobs,
  interviews: Interviews,
  analytics: Analytics,
  contacts: Contacts,
  settings: SettingsPage
};

function App() {
  const [auth, setAuth] = useState(null);
  const [screen, setScreen] = useState("login");
  const [page, setPage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [notif, setNotif] = useState(false);
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved || 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    if (auth) {
      document.body.style.backgroundColor = theme === 'dark' ? '#070d1a' : '#f4f7fc';
    }
  }, [theme, auth]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleLogin = (userData) => {
    setAuth(userData);
    setPage("dashboard");
  };

  const handleSignup = (userData) => {
    setAuth(userData);
    setPage("dashboard");
  };

  const handleLogout = () => {
    setAuth(null);
    setScreen("login");
    setPage("dashboard");
  };

  if (!auth) {
    if (screen === "signup") {
      return <SignupPage onSignup={handleSignup} onGoLogin={() => setScreen("login")} />;
    }
    return <LoginPage onLogin={handleLogin} onGoSignup={() => setScreen("signup")} />;
  }

  const ViewComponent = VIEWS[page] || Dashboard;

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>
      <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
        <Sidebar 
          page={page} 
          setPage={(p) => { setPage(p); setNotif(false); }} 
          open={sidebarOpen} 
          setOpen={setSidebarOpen} 
          user={auth} 
          onLogout={handleLogout}
          theme={theme}
        />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <Topbar 
            page={page} 
            user={auth} 
            notif={notif} 
            setNotif={setNotif}
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <div style={{ flex: 1, overflowY: 'auto', padding: '20px 24px' }} onClick={() => notif && setNotif(false)}>
            <ViewComponent user={auth} setPage={setPage} theme={theme} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;