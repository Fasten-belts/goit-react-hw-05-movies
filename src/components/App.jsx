import Home from 'pages/Home';
import MoviesDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import { NavLink, Route, Routes } from 'react-router-dom';
import { fetchTrendMovie } from 'services/api';

async function logTrendingMovies() {
  try {
    const trendingMovies = await fetchTrendMovie();
    console.log('Trending Movies:');
    console.log(trendingMovies);
  } catch (error) {
    console.error('Error fetching trending movies:', error);
  }
}

logTrendingMovies();

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />} />
      </Routes>
    </div>
  );
};
