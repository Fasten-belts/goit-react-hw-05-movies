import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/api';
import toast from 'react-hot-toast';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query && error) {
      toast.error(
        'An unexpected issue occurred; kindly attempt to refresh the page.',
        {
          icon: '🫣',
        }
      );
      return;
    }

    async function getSearchMovies() {
      try {
        setLoading(true);
        const { results } = await fetchSearchMovies(query);
        setMovies(results);
      } catch {
        setError(true);
        toast.error('Oops, something went wrong. Please try again.', {
          icon: '🆘',
        });
      } finally {
        setError(false);
        setLoading(false);
      }
    }

    getSearchMovies();
  }, [error, query]);

  function onSubmit(e) {
    e.preventDefault();
    const value = e.target.elements.query.value;

    if (value.trim() === '') return;

    setSearchParams({ query: value });
    e.target.reset();
  }

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      {loading && <Loader />}
      {error && !loading}
    </>
  );
}
export default Movies;
