import { Loader } from 'components/Loader/Loader';
import { MovieInfo } from 'components/MoviesInfo/MoviesInfo';
import { useState, useEffect, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchDetails } from 'services/api';
import toast from 'react-hot-toast';
import {
  AdditionalInfo,
  BackButton,
  Container,
  InfoItem,
  InfoList,
  LinkStyled,
} from './MovieDetails.styled';

function MoviesDetails() {
  const { movieId } = useParams();
  const location = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [movieDetails, setMovieDetails] = useState(null);
  const backLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    if (!movieId) {
      toast.error(
        'An unexpected issue occurred; kindly attempt to refresh the page.',
        {
          icon: '🫣',
        }
      );
      return;
    }

    async function getMovieDetails() {
      try {
        setLoading(true);
        const data = await fetchDetails(movieId);
        setMovieDetails(data);
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

    getMovieDetails();
  }, [movieId]);

  return (
    <Container>
      {loading && <Loader />}
      {error && !loading}

      <BackButton to={backLink.current}>Go back</BackButton>

      {movieDetails && <MovieInfo movieDetails={movieDetails} />}

      <AdditionalInfo>
        <InfoList>
          <h3>Additional information</h3>
          <InfoItem>
            <LinkStyled to="cast">Cast</LinkStyled>
          </InfoItem>
          <InfoItem>
            <LinkStyled to="reviews">Reviews</LinkStyled>
          </InfoItem>
        </InfoList>
      </AdditionalInfo>
      <Outlet />
    </Container>
  );
}

export default MoviesDetails;
