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
  const [isVisible, setIsVisible] = useState(false);
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
        setResults(await getResults(query, mainPage));
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
  }, [query, mainPage]);

  const getMorePics = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const options = { root: null, rootMargin: '0px', threshold: 0.5 };
    const observer = new IntersectionObserver(getMorePics, options);
    const disconnectPic = lastPic.current

    if (lastPic.current) observer.observe(lastPic.current);

    return () => {
      if (disconnectPic) observer.unobserve(disconnectPic);
    };
  }, [lastPic]);

  return (
    <div className="pt-10">
      <SearchBar />
      <div>
        {results.map((result, i) => {
          return i === 24 ? (
            <Result result={result} ref={lastPic} />
          ) : (
            <Result result={result} />
          );
        })}
      </div>
      <div>{isVisible ? "HEYEYYEYE" : "HMMMMMMM"}</div>
    </div>
  );
}
