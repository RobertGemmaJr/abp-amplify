import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';

import { Amplify } from 'aws-amplify';
import config from './aws-exports';

import theme from './theme';
import App from './components/App';

Amplify.configure(config);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
