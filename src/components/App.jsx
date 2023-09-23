import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const MoviesDetails = lazy(() => import('pages/MovieDetails'));
const Movies = lazy(() => import('pages/Movies'));
const CastInfo = lazy(() => import('./Cast/Cast'));
const ReviewsInfo = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<CastInfo />} />
          <Route path="reviews" element={<ReviewsInfo />} />
        </Route>
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};
