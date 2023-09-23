import { Loader } from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/api';
import {
  AuthorName,
  CommentText,
  ReviewItem,
  ReviewList,
} from './Reviews.styled';

function ReviewsInfo() {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    async function getReviews() {
      try {
        setLoading(true);
        const { results } = await fetchReviews(movieId);
        setReviews(results);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <>
      {loading && <Loader />}
      {error && !loading}
      <ReviewList>
        {reviews.map(({ author, content, id }) => (
          <ReviewItem key={id}>
            <AuthorName>Author: {author}</AuthorName>
            <CommentText>Comment: {content}</CommentText>
          </ReviewItem>
        ))}
      </ReviewList>
    </>
  );
}

export default ReviewsInfo;
