import { useState } from 'react';

export default function Result({ result }) {
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

  return (
    <>
      <article className="flex justify-center">
        <div className="rounded-lg shadow-lg w-full">
            <button className='w-full text-left' onClick={handleShowMore}>
          <div className="py-6 px-2">
            <div className="text-gray-dark dark:text-slate-400 text-md md:text-xl font-medium mb-2 mt-5 flex">
              <h5 className={readMore}>{result.data[0].title}</h5>
              <h5 className="ml-auto">
                {(readMore ? " " : "") + result.data[0].date_created.substring(0, 10)}
              </h5>
            </div>
            <p
              className={`text-base-dark dark:text-slate-300 text-sm md:text-base ${readMore}`}
            >
              {result.data[0].description_508
                ? result.data[0].description_508
                : 'No description found...'}
            </p>
          </div>
          </button>
          <img
            className="w-full"
            src={result.links[0].href}
            alt={result.data[0].description_508 || 'No description found'}
            />
        </div>
      </article>
    </>
  );
}
