export default function Result({ result }) {
  return (
    <div>
      <div className="flex justify-center">
        <div className="rounded-lg shadow-lg w-full">
          <div className="py-6 px-2">
            <div className="text-gray-dark dark:text-slate-400 text-xl font-medium mb-2 mt-5 flex">
              <h5>{result.data[0].title}</h5>
              <h5 className="ml-auto">{result.data[0].date_created.substring(0, 10)}</h5>
            </div>
            <p className="text-base-dark dark:text-slate-300 text-base line-clamp-1">
              {result.data[0].description
                ? result.data[0].description
                : 'No description found...'}
            </p>
          </div>
          <img className="w-full" src={result.links[0].href} alt="" />
        </div>
      </div>
    </div>
  );
}
