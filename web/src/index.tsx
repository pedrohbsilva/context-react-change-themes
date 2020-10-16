import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeSwitchProvider } from './hooks/SwitchTheme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitchProvider>
      <App />
    </ThemeSwitchProvider>
  </React.StrictMode>,
  document.getElementById('root')
);