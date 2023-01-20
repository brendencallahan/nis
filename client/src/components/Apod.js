//apod = Astronomy Picture Of the Day
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Apod() {
  const [apod, setApod] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [readMore, setReadMore] = useState(['line-clamp-1']);
  const [isTextShowing, setIsTextShowing] = useState(false);

  function handleShowMore() {
    if (readMore.length === 0) {
      setReadMore(['line-clamp-1']);
    } else {
      setReadMore([]);
    }
    setIsTextShowing(!isTextShowing);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get('/api/home');
        const data = await resp.data;
        console.log(data);
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
      <>
        <article className="flex justify-center">
          <div className="rounded-lg shadow-md w-full">
            <button className='w-full text-left' onClick={handleShowMore}>
              <div className="py-6 px-2">
                <div className="text-gray-dark dark:text-slate-400 text-md md:text-xl font-medium mb-2 mt-5 flex">
                  <h5 className={readMore}>{apod.title}</h5>
                  <h5 className="ml-auto">
                    {(readMore ? " " : "") + apod.date.substring(0, 10)}
                    </h5>
                </div>
                <p
                  className={`text-base-dark dark:text-slate-300  text-sm md:text-base ${readMore}`}
                >
                  {apod.explanation
                    ? apod.explanation
                    : 'No description found...'}
                </p>
              </div>
            </button>
            {readMore.length > 0 && <p className='text-xs text-center'>(Click text to show/hide)</p>}
            <img
              className="w-full"
              src={apod.url}
              alt={apod.explanation || 'No description found'}
              />
          </div>
        </article>
        <div className="opacity-50 pt-[10px] text-xs text-center">
          {apod.copyright ? (
            <p className="">©{apod.copyright}</p>
          ) : (
            <p className="">No copyright found</p>
          )}
        </div>
      </>
    );
}
