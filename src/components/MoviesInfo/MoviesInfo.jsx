import {
  MovieContainer,
  MovieGenreItem,
  MovieGenreList,
  MovieGenres,
  MovieOverview,
  MovieOverviewText,
  MoviePoster,
  MovieRating,
  MovieTitle,
} from './MoviesInfo.styled';

function MovieInfo({ movieDetails }) {
  const {
    poster_path,
    title,
    vote_average: rating,
    overview,
    genres,
    release_date,
  } = movieDetails;

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const releaseYear = new Date(release_date).getFullYear();

  return (
    <MovieContainer>
      <MoviePoster
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <div>
        <MovieTitle>
          {title} ({release_date ? releaseYear : 'not published'})
        </MovieTitle>
        <MovieRating>Rating: {rating.toFixed(2)}</MovieRating>
        <MovieOverview>Overview</MovieOverview>
        <MovieOverviewText>
          {overview ? overview : 'not published'}
        </MovieOverviewText>
        <MovieGenres>Genres</MovieGenres>
        {genres?.length > 0 ? (
          <MovieGenreList>
            {genres.map(({ id, name }) => {
              return (
                <MovieGenreItem key={id}>
                  <p>{name}</p>
                </MovieGenreItem>
              );
            })}
          </MovieGenreList>
        ) : (
          <p>not published</p>
        )}
      </div>
    </MovieContainer>
  );
}

export { MovieInfo };
