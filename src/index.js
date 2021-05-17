import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import Amplify from 'aws-amplify';
import config from './aws-exports';

import theme from "./theme"

// Configure amplify settings
Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);