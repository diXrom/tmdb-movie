import { Component } from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';
import { setupStore } from 'shared/store';

import ErrorBoundary from 'widgets/Error';
import Routes from './ui/Routes';
import { theme } from './lib/styles';

class App extends Component {
  render() {
    return (
      <CssBaseline>
        <Provider store={setupStore()}>
          <ThemeProvider theme={theme}>
            <ErrorBoundary>
              <Routes />
            </ErrorBoundary>
          </ThemeProvider>
        </Provider>
      </CssBaseline>
    );
  }
}

export default App;
