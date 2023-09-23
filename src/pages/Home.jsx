import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { fetchTrendMovie } from 'services/api';
import toast from 'react-hot-toast';
import { Container, Title } from './Home.styled';

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
        toast.error('Oops, something went wrong. Please try again.', {
          icon: '🆘',
        });
      } finally {
        setLoading(false);
        setError(false);
      }
    }
    getTrendMovies();
  }, []);

  return (
    <Container>
      {loading && <Loader />}
      {error && !loading}
      <Title>Trending Movies This Week</Title>
      {movies.length > 0 && <MoviesList movies={movies} />}
    </Container>
  );
}
export default Home;
