import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import NavBar from './components/Navbar/NavBar';
import Router from './routes/Router';
import LightTheme from './themes/LightTheme';
import DarkTheme from './themes/DarkTheme';

const themes = {
  light: LightTheme,
  dark: DarkTheme
};

export const SetThemeContext = React.createContext();
export const CurrentThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <CurrentThemeContext.Provider value={theme}>
      <SetThemeContext.Provider value={setTheme}>
        <ThemeProvider theme={theme === 'dark'? themes.dark : themes.light}>
          <NavBar />
          <Router />
        </ThemeProvider>
      </SetThemeContext.Provider>
    </CurrentThemeContext.Provider>
  );
}

export default App;