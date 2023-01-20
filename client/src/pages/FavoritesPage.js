import getFavoriteItems from '../utils/getFavoriteItems';
import { useState, useLayoutEffect, useRef } from 'react';
import Result from '../components/Result';

export default function FavoritesPage() {
  const [results, setResults] = useState(null);

  useLayoutEffect(() => {
    setResults(getFavoriteItems());
  },[])

  return (
    <>
      <h2 className="text-transparent bg-clip-text bg-gradient-to-t from-slate-700 to-base-dark dark:from-gray-light dark:to-slate-300 nis-font text-center text-3xl mb-5 ml-2.5">Favorites</h2>
      {results === null ? (
        <p>No favorites saved</p>
      ) : (
        <div>
          {results.map((result) => {
            return (
              <Result
                key={result.data[0].nasa_id}
                result={result}
                favorited={true}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
