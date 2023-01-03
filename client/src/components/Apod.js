//apod = Astronomy Picture Of the Day
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Apod() {
  const [apod, setApod] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [readMore, setReadMore] = useState(['line-clamp-2']);
  const [buttonHidden, setButtonHidden] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get('/api/home');
        const data = await resp.data;
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
    return <h2>Loading...</h2>;
  } else if (error) {
    return <h2>Error getting picture of the day...</h2>;
  } else
    return (
      <article className="">
        <img className="px-10" src={apod.url} alt=""></img>
        <div className="px-10 flex">
          <p className="">{apod.copyright}</p>
          <p className="ml-auto">{apod.date}</p>
        </div>
        <h2 className="text-center font-bold my-5">{apod.title}</h2>
        <p id="read-more" className={`${[...readMore]}`}>
          {apod.explanation}
        </p>
        <button
          className={`underline font-semibold w-[100%] ${[...buttonHidden]}`}
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
