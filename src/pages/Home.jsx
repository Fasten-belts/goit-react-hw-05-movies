import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { fetchTrendMovie } from 'services/api';

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getTrendMovies() {
      try {
        setLoading(true);
        const data = await fetchTrendMovie();
        setMovies(data.results);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
        setError(false);
      }
    }
    getTrendMovies();
  }, []);

  return (
    <>
      {loading}
      {error && !loading}
      <h2>Trending Movies This Week</h2>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
}
export default Home;
