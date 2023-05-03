import { useEffect, useRef } from 'react';
import MoviesList from 'components/MoviesList/MoviesList';
import NetflixLoader from 'components/Loader/NetflixLoader';
import Message from 'components/Toast/Toast';
import useFetch from 'services/hooks';
import STATUS from 'services/constans';

const Home = () => {
  const {
    movies,
    fetchMoviesList,
    status,
    contentIsLoading,
    setContentIsLoading,
  } = useFetch();
  const { current: fetch } = useRef(fetchMoviesList);

  useEffect(() => {
    const controller = new AbortController();
    fetch({ fetchParams: 'trending/movie/week', controller });

    return () => {
      controller.abort();
    };
  }, [fetch]);

  return (
    <>
      {contentIsLoading && <NetflixLoader />}
      {status === STATUS.resolved && !!movies.length && (
        <MoviesList
          movies={movies}
          contentIsLoading={contentIsLoading}
          setContentIsLoading={setContentIsLoading}
        />
      )}
      <Message />
    </>
  );
};

export default Home;
