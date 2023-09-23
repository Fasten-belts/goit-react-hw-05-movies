import { useLocation } from 'react-router-dom';
import { MovieLink, MovieList, MovieListItem } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieList>
      {movies.map(({ id, title }) => (
        <MovieListItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </MovieLink>
        </MovieListItem>
      ))}
    </MovieList>
  );
};
