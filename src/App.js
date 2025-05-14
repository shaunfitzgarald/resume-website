import React from 'react';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import { ParallaxProvider } from 'react-scroll-parallax';
import HeroSection from './components/HeroSection';
import ResumeSections from './components/ResumeSections';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#111',
      paper: '#fff',
    },
    text: {
      primary: '#fff',
      secondary: '#111',
    },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    fontWeightBold: 900,
    h2: { fontWeight: 900 },
    h4: { fontWeight: 700 },
    h6: { fontWeight: 600 },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ParallaxProvider>
        <HeroSection />
        <ResumeSections />
      </ParallaxProvider>
    </ThemeProvider>
  );
}

export default App;
