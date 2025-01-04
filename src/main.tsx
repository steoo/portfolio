import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { client } from './components/global/apolloClient.ts';
import { theme } from './components/global/theme.ts';
import 'normalize.css';

import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './components/global/browserRouter.tsx';

const ApolloProvider = React.lazy(() =>
  import('@apollo/client').then((module) => ({
    default: module.ApolloProvider,
  }))
);

const ThemeProvider = React.lazy(() =>
  import('styled-components').then((module) => ({
    default: module.ThemeProvider,
  }))
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ApolloProvider>
  </StrictMode>
);
