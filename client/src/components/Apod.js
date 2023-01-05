//apod = Astronomy Picture Of the Day
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Apod() {
  const [apod, setApod] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [readMore, setReadMore] = useState(['line-clamp-3']);
  const [buttonHidden, setButtonHidden] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get('/api/home');
        const data = await resp.data;
        console.log(data)
        setApod(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
        setError(err);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <h2 className="text-center py-5">Loading...</h2>;
  } else if (error) {
    return (
      <h2 className="text-center py-5">Error getting picture of the day...</h2>
    );
  } else
    return (
      <article className="">
        <img className="" src={apod.url} alt=""></img>
          {apod.copyright ? (
            <div className="text-xs flex">
              <p className="">©{apod.copyright}</p>
              <p className="ml-auto">{apod.date}</p>
            </div>
          ) : (
            <div className="text-xs flex">
              <p className="">Pic of the Day</p>
              <p className="ml-auto">{apod.date}</p>
            </div>
          )}
        <h2 className="text-center font-bold py-8 text-lg">{apod.title}</h2>
        <p className={`${[...readMore]}`}>{apod.explanation}</p>
        <button
          className={`underline w-[100%] ${[...buttonHidden]}`}
          onClick={() => {
            setReadMore([]);
            setButtonHidden(['hidden']);
          }}
        >
          Read More
        </button>
      </article>
    );
}
