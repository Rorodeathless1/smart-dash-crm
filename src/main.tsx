import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { darkTheme } from './styles/theme.ts';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles.ts';
import { App } from './App/App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  </StrictMode>
);
