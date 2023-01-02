//apod = Astronomy Picture Of the Day
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Apod() {
  const [apod, setApod] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

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

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else if (error) {
    return <h2>Error getting picture of the day...</h2>;
  } else
    return (
      <article className="">
        <img src={apod.url} alt=""></img>
        <div className="flex">
          <p className="">{apod.copyright}</p>
          <p className="ml-auto">{apod.date}</p>
        </div>
        <h2 className="text-center">{apod.title}</h2>
        <p className="">{apod.explanation}</p>
      </article>
    );
}
