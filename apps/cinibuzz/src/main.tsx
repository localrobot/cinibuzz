import { ChakraProvider } from '@chakra-ui/react';
import { TMDBProvider } from '@cinibuzz/tmdb';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/app';
import { environment } from './environments/environment';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <TMDBProvider {...environment.tmdb}>
        <App />
      </TMDBProvider>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
