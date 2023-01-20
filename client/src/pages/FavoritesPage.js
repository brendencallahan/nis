import getFavoriteItems from '../utils/getFavoriteItems';
import { useState, useLayoutEffect, useRef } from 'react';
import Result from '../components/Result';

export default function FavoritesPage() {
  const [results, setResults] = useState(getFavoriteItems());

  return (
    <>
      <h2>Favorites</h2>
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
