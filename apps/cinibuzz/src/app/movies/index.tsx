import { Outlet, Route, Routes } from 'react-router-dom';

import SearchBox from '../common/search-box';
import MovieBrowser from './movie-browser';
import MovieDetail from './movie-detail';
import SearchResults from './search-results';

const SearchablePage = () => (
  <>
    <SearchBox />
    <Outlet />
  </>
);

/* eslint-disable-next-line */
export interface MoviesProps {}

export function Movies(props: MoviesProps) {
  return (
    <Routes>
      <Route path="/" element={<SearchablePage />}>
        <Route path="/" element={<MovieBrowser />} />
        <Route path="results" element={<SearchResults />} />
      </Route>
      <Route path=":movieId" element={<MovieDetail />} />
    </Routes>
  );
}

export default Movies;
