import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    black: '#212121',
    white: '#fff',
    red: '#f8456c',
    green: '#6bf3d6',
    orange: '#f39b53;',
    gray: '#cccccc',
    lightBlue: '#e4f5f7',
    blue: '#3f51b5',
    violet: '#e26df1',
    grayOverlay: '#000c',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '12px',
  },
  spasing: value => `${value * 4}px`,
  shadow:
    '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
};
ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
