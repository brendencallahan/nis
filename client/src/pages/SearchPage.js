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
  const [mainPage, setMainPage] = useState(1);
  const [loaded, setLoaded] = useState(false);
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
        setResults(await getResults(query, 1)); //Second argument is page to get. Start with 1 on new queries
        setLoaded(true);
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

  const getMorePics = (entries) => {
    const [entry] = entries;
    let isLeaving = false;
    if (entry.isIntersecting) {
      console.log(entry);
      isLeaving = true; // May need to remove. Pic jumping down might leave this as true
    } else if (isLeaving) {
      isLeaving = false;
    }
  };

  useEffect(() => {

      const options = { root: null, rootMargin: '200%', threshold: 0 };
      const observer = new IntersectionObserver(getMorePics, options);
      const disconnectPic = lastPic.current;

      if (lastPic.current) observer.observe(lastPic.current);
      return () => {
        if (disconnectPic) observer.unobserve(disconnectPic);
      };
  }, [lastPic]);

  return (
    <div className="pt-10">
      <SearchBar />
      {!loaded ? (
        <div className='h-screen'>Loading...</div>
      ) : (
        <>
          <div>
            {results.map((result) => {
              return <Result result={result} />;
            })}
          </div>
        </>
      )}
      <div ref={lastPic}></div>
    </div>
  );
}
