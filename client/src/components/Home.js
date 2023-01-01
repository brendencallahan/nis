import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [apod, setApod] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await axios.get('/api/home');
      const data = await resp.data;
      setApod(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className='underline'>{apod.title}</h1>
      <img
        src={apod.url}
        alt=''
      ></img>
    </>
  );
}
