import { useState } from "react";
import addFavoriteItem from "../utils/addFavoriteItem";
import deleteFavoriteItem from "../utils/deleteFavoriteItem";

export default function Result({ result, favorited }) {
  const [readMore, setReadMore] = useState(["line-clamp-1"]);
  const [isTextShowing, setIsTextShowing] = useState(false);
  const [isFavorite, setIsFavorite] = useState(favorited);

  function handleShowMore() {
    if (readMore.length === 0) {
      setReadMore(["line-clamp-1"]);
    } else {
      setReadMore([]);
    }
    setIsTextShowing(!isTextShowing);
  }

  function handleIsFavorite() {
    if (isFavorite) {
      deleteFavoriteItem(result);
    } else {
      addFavoriteItem(result);
    }
    setIsFavorite(!isFavorite);
  }

  return (
    <>
      <article className="flex justify-center">
        <div className="mt-5 rounded-lg w-full">
          <button className="w-full text-left" onClick={handleShowMore}>
            <div className="pb-6 px-2">
              <div className="text-gray-dark dark:text-slate-400 text-md md:text-xl font-medium mb-2 mt-5 flex">
                <h5 className={readMore}>{result.data[0].title}</h5>
                <h5 className="ml-auto">
                  {(readMore ? " " : "") +
                    result.data[0].date_created.substring(0, 10)}
                </h5>
              </div>
              <p
                className={`text-base-dark dark:text-slate-300 text-sm md:text-base ${readMore}`}
              >
                {result.data[0].description_508
                  ? result.data[0].description_508
                  : "No description found..."}
              </p>
            </div>
          </button>
          <div className="relative">
            <button
              onClick={handleIsFavorite}
              className="
                absolute right-3 top-3 h-8 px-5
              text-base-dark bg-gray-light dark:text-slate-400 dark:bg-base-dark
                rounded-md
                "
            >
              {isFavorite ? "</3" : "<3"}
            </button>
            <img
              className="w-full"
              src={result.links[0].href}
              alt={result.data[0].description_508 || "No description found"}
            />
          </div>
        </div>
      </article>
    </>
  );
}
