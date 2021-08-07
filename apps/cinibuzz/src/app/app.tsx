import { Container } from '@chakra-ui/react';
import { Outlet, Route, Routes } from 'react-router-dom';

import Header from './header';
import MovieBrowser from './movie-browser';
import MovieDetail from './movie-detail';
import SearchBox from './search-box';
import SearchResults from './search-results';

const SearchablePageContainer = () => (
  <>
    <SearchBox />
    <Outlet />
  </>
);

export function App() {
  return (
    <>
      <Header />
      <Container maxW="90vw">
        <Routes>
          <Route path="/" element={<SearchablePageContainer />}>
            <Route path="/" element={<MovieBrowser />} />
            <Route path="/results" element={<SearchResults />} />
          </Route>
          <Route path="/movies/:movieId" element={<MovieDetail />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
