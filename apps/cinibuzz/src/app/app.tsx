import { Box } from '@chakra-ui/react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Header from './common/header';
import Movies from './movies';

export function App() {
  return (
    <>
      <Header />
      <Box as="main" px="44" w="100vw">
        <Routes>
          <Route path="/" element={<Navigate to="/movies" replace />} />
          <Route path="movies/*" element={<Movies />} />
        </Routes>
      </Box>
    </>
  );
}

export default App;
