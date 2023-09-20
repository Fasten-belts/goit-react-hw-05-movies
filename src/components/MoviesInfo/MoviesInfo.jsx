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
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      <div>
        <h2>
          {title} ({release_date ? releaseYear : 'not published'})
        </h2>
        <p>Rating: {rating.toFixed(2)}</p>
        <h3>Overview</h3>
        <p>{overview ? overview : 'not published'}</p>
        <h3>Genres</h3>
        {genres?.length > 0 ? (
          <ul>
            {genres.map(({ id, name }) => {
              return (
                <li key={id}>
                  <p>{name}</p>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>not published</p>
        )}
      </div>
    </div>
  );
}

export { MovieInfo };
