import { useEffect, useMemo, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import MoviesList from 'components/MoviesList/MoviesList';
import Message from 'components/Toast/Toast';
import NetflixLoader from 'components/Loader/NetflixLoader';
import useFetch from 'services/hooks';
import STATUS from 'services/constans';

const Movies = () => {
  const {
    movies,
    fetchMoviesList,
    contentIsLoading,
    setContentIsLoading,
    status,
  } = useFetch();
  const { current: fetch } = useRef(fetchMoviesList);
  const [searchParams, setSearchParams] = useSearchParams();
  const { query } = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  useEffect(() => {
    if (!query) return;
    const controller = new AbortController();
    fetch({
      controller,
      fetchParams: 'search/movie',
      query,
    });
    return () => {
      controller.abort();
    };
  }, [fetch, query]);

  return (
    <>
      <Searchbar setSearchParams={setSearchParams} />
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

export default Movies;
