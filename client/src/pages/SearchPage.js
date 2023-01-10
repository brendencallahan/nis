import { useState, useEffect, useMemo, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import cullResults from '../utils/cullResults';
import getResults from '../utils/getResults';
import SearchBar from '../components/SearchBar/SearchBar';
import Result from '../components/Result';

export default function Apod() {
  const [results, setResults] = useState([]);
  const [culledResults, setCulledResults] = useState([]);
  const [page, setPage] = useState(1);
  const [loaded, setLoaded] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const lastPic = useRef(null);
  const query = useQuery();

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchData = async (params) => {
      try {
        const data = await getResults(query, 1);
        if (data.length > 0) {
          setResults(data.slice(25));
          setCulledResults(data.slice(0, 25));
          setLoaded(true);
          setHasMore(true);
          setPage(2);
        }
        else {
          setLoaded(true);
          setHasMore(false);
        }
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log(err.message);
        }
        console.log(err);
      }
    };
    fetchData(query);

    return () => {
      source.cancel('Interrupted request');
    };
  }, [query]);

  useEffect(() => {
    if (loaded) {
      const options = { root: null, rootMargin: '200%', threshold: 0 };
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        let isLeaving = false;
        if (entry.isIntersecting && results.length >= 1) {
          setCulledResults((old) => [...old, ...cullResults(results, 1)]); //second arg to cull... is multiple of 25 to include. i.e. 1 = 25, 2 = 50, etc.
          setResults((old) => [...old.slice(25)]);
          console.log(page);
          isLeaving = true; // May need to remove. Pic jumping down might leave this as true
        } else if (isLeaving) {
          isLeaving = false;
        } else if (entry.isIntersecting && results.length <= 0) {
          const loadMore = async () => {
            try {
              const data = await getResults(query, page);
              if (data.length > 0) {
                setResults(data.slice(25));
                setCulledResults((old) => [...old, ...data.slice(0, 25)]);
                setPage((page) => page + 1);
                setHasMore(true);
              } else {
                setHasMore(false);
              }
            } catch (err) {
              console.log(err);
              setHasMore(false);
            }
          };

          loadMore();
        }
      }, options);
      const disconnectPic = lastPic.current;

      if (lastPic.current) observer.observe(lastPic.current);
      return () => {
        if (disconnectPic) observer.unobserve(disconnectPic);
      };
    }
  }, [lastPic, loaded, results, page, query]);

  return (
    <div className="pt-10">
      <SearchBar />
      {!loaded ? (
        <div className="h-screen">Loading...</div>
      ) : (
          <div>
            {culledResults.map((result) => {
              return <Result result={result} />; //TODO: Add nasa_id as key
            })}
            {hasMore ? <div ref={lastPic}></div> : <p className='mt-2.5 text-center'>End of Results...</p>}
          </div>
      )}
    </div>
  );
}
