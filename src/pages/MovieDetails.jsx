import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';
import Message from 'components/Toast/Toast';
import Loader from 'components/Loader/Loader';
import useFetch from 'services/hooks';
import STATUS from 'services/constans';

const MovieDetails = () => {
  const { movie, fetchMovie, status, contentIsLoading, setContentIsLoading } =
    useFetch();
  const { current: fetch } = useRef(fetchMovie);
  const { moviesId } = useParams();

  useEffect(() => {
    const controller = new AbortController();
    fetch({ fetchParams: `movie/${moviesId}`, controller });
    return () => {
      controller.abort();
    };
  }, [fetch, moviesId]);

  return (
    <>
      {contentIsLoading && <Loader />}
      {status === STATUS.resolved && (
        <MovieCard
          movie={movie}
          setContentIsLoading={setContentIsLoading}
          contentIsLoading={contentIsLoading}
        />
      )}
      <Message />
    </>
  );
};

export default MovieDetails;
