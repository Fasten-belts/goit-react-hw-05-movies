import { MovieInfo } from 'components/MoviesInfo/MoviesInfo';
import { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchDetails } from 'services/api';

function MoviesDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!movieId) return;

    async function getMovieDetails() {
      try {
        setLoading(true);
        const data = await fetchDetails(movieId);
        setMovieDetails(data);
      } catch {
        setError(true);
      } finally {
        setError(false);
        setLoading(false);
      }
    }

    getMovieDetails();
  }, [movieId]);

  return (
    <>
      {loading}
      {error && !loading}
      <Link to={backLink.current}>
        <button type="button">Go back</button>
      </Link>

      {movieDetails && <MovieInfo movieDetails={movieDetails} />}

      <section>
        <ul>
          <h3>Additional information</h3>
          <li>
            <Link to="cast">
              <button type="button">Cast</button>
            </Link>
          </li>
          <li>
            <Link to="reviews">
              <button type="button">Reviews</button>
            </Link>
          </li>
        </ul>
      </section>

      <Outlet />
    </>
  );
}

export default MoviesDetails;
