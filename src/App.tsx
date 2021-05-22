import React from 'react';
import { useRoutes } from 'hookrouter';
import NotFoundPage from './pages/NotFoundPage';
import Header from './components/Header';
import routes from './routes';

const App = () => {
  const match = useRoutes(routes);

  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFoundPage />
  );
};

export default App;
