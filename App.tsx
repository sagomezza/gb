// @ts-nocheck
import React, { useEffect } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { Provider as StoreProvider } from 'react-redux';
import { store } from 'store';
import { STRIPE_PUBLISHABLE_KEY, CACHE_TIME_REACT_QUERY } from '@env';
import Amplify from 'aws-amplify';
import { initStripe } from '@stripe/stripe-react-native';
import RNBootSplash from 'react-native-bootsplash';
import { ThemeProvider } from 'styled-components/native';
import { QueryClient, QueryClientProvider } from 'react-query';
import awsConfig from './src/aws-exports';

// UI
import { theme as themePaper } from './src/config/theme';
import AppNavigator from './src/navigation/AppNavigator';

// Uncomment line 16 when doing tests
// LogBox.ignoreAllLogs(true);

// RNBootSplash.hide({ fade: true });

Amplify.configure({
  ...awsConfig,
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: CACHE_TIME_REACT_QUERY,
    },
  },
});

const publishableKey = STRIPE_PUBLISHABLE_KEY;

const App = () => {
  React.useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await RNBootSplash.hide({ fade: true });
    });
  }, []);

  useEffect(() => {
    initStripe({
      publishableKey,
      merchantIdentifier: 'merchant.identifier',
    });
  }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider store={store}>
        <PaperProvider theme={themePaper}>
          <ThemeProvider theme={themePaper}>
            <AppNavigator />
          </ThemeProvider>
        </PaperProvider>
      </StoreProvider>
    </QueryClientProvider>
  );
};

export default App;
