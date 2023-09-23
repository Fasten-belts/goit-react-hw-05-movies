import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/api';
import {
  CastCharacter,
  CastDetails,
  CastImage,
  CastItem,
  CastList,
  CastName,
  Container,
  Text,
} from './Cast.styled';
import toast from 'react-hot-toast';

const defaultImg =
  'https://png.pngitem.com/pimgs/s/508-5087257_clip-art-hd-png-download.png';

function CastInfo() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [castDetails, setCastDetails] = useState([]);

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

    async function getCastInfo() {
      try {
        setLoading(true);
        const { cast } = await fetchCast(movieId);
        setCastDetails(cast);
      } catch {
        setError(true);
        toast.error('Oops, something went wrong. Please try again.', {
          icon: '🆘',
        });
      } finally {
        setLoading(false);
      }
    }
    getCastInfo();
  }, [movieId]);

  return (
    <Container>
      {loading && <Loader />}
      {error && !loading}
      {castDetails.length > 0 ? (
        <CastList>
          {castDetails.map(({ profile_path: image, name, character, id }) => (
            <CastItem key={id}>
              <CastDetails>
                <CastImage
                  src={
                    image
                      ? `https://image.tmdb.org/t/p/w185/${image}`
                      : defaultImg
                  }
                  alt={name}
                />

                <CastName>{name}</CastName>
                <CastCharacter>{character}</CastCharacter>
              </CastDetails>
            </CastItem>
          ))}
        </CastList>
      ) : (
        <Text>The list of actors is empty for this movie</Text>
      )}
    </Container>
  );
}

export default CastInfo;
