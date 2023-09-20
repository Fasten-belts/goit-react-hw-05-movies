import { MoviesList } from 'components/MoviesList/MoviesList';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/api';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) {
      return;
    }
    async function getSearchMovies() {
      try {
        setLoading(true);
        const { results } = await fetchSearchMovies(query);
        setMovies(results);
      } catch {
        setError(true);
      } finally {
        setError(false);
        setLoading(false);
      }
    }

    getSearchMovies();
  }, [query]);

  function onSubmit(e) {
    e.preventDefault();
    const value = e.target.elements.query.value;

    if (value === '') return;

    setSearchParams({ query: value });
    e.target.reset();
  }

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {movies.length > 0 && <MoviesList movies={movies} />}
      {loading}
      {error && !loading}
    </>
  );
}
export default Movies;
