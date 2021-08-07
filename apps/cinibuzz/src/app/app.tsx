import { Container } from '@chakra-ui/react';

import Header from './header';
import MovieBrowser from './movie-browser';
import SearchBox from './search-box';

export function App() {
  return (
    <Container maxW="90vw">
      <Header />
      <SearchBox />
      <MovieBrowser />
    </Container>
  );
}

export default App;
