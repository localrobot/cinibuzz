import { Container } from '@chakra-ui/react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Header from './common/header';
import Movies from './movies';

export function App() {
  return (
    <>
      <Header />
      <Container maxW="90vw">
        <Routes>
          <Route path="/" element={<Navigate to="/movies" replace />} />
          <Route path="movies/*" element={<Movies />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
