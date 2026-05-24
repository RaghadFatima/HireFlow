import React from 'react';

export const ThemeContext = React.createContext({ theme: 'dark', toggleTheme: () => {} });

export const ThemeProvider = ({ children, value }) => {
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => React.useContext(ThemeContext);