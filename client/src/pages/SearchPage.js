import SearchBar from '../components/SearchBar/SearchBar';
import { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

export default function Apod() {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const query = useQuery();

  function useQuery() {
    const { search } = useLocation();
    return useMemo(() => new URLSearchParams(search), [search]);
  }

  useEffect(() => {
  const fetchData = async (params) => {
    try {
      const resp = await axios.get(
        `https://images-api.nasa.gov/search?q=${params.get(
          'q'
        )}&page=${page}&media_type=image`
      );
      const data = await resp.data;
      setResults(data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      setError(err);
    }
  };

    fetchData(query);
  }, [query, page]);

  if (isLoading) {
    return (
      <div>
        <SearchBar />
        <h2 className="text-center py-5">Loading...</h2>;
      </div>
    );
  } else if (error) {
    return (
      <div>
        <SearchBar />
        <h2 className="text-center py-5">
          Error getting picture of the day...
        </h2>
      </div>
    );
  } else
    return (
      <>
        <SearchBar/>
      <div className=''>
        {results.collection.items.map((result) => {
          return (
            <div>
              <h1>{result.data[0].title}</h1>
              <img
                className="w-full"
                loading="lazy"
                src={result.links[0].href}
                alt=""
                />
            </div>
          );
        })}
      </div>
        </>
    );
}
