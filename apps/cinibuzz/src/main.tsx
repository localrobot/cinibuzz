import { ChakraProvider } from '@chakra-ui/react';
import { TMDBProvider } from '@cinibuzz/tmdb';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { environment } from './environments/environment';

ReactDOM.render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <TMDBProvider {...environment.tmdb}>
          <App />
        </TMDBProvider>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>,
  document.getElementById('root')
);
