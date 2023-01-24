import { Form } from "react-router-dom";

export default function SearchBar({ query }) {
  return (
    <Form method="get" action="/search">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium sr-only"
      >
        Search
      </label>
      <div className="relative dark:text-gray-light dark:focus-within:text-slate-400 text-gray-dark focus-within:text-slate-400">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
          <span>
            <button type="submit" className="flex items-center">
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </span>
        </div>
        <input
          type="search"
          id="default-search"
          name="q"
          className="dark:focus-within:text-base-light focus-within:text-base-dark block w-full mb-[3.25rem] p-4 pl-10 text-md border-2 focus:outline-none dark:border-slate-400 border-gray-dark focus:border-nasa-blue dark:focus:border-blue-400 rounded-md dark:bg-base-dark bg-gray-light"
          placeholder={"Search..."}
          defaultValue={query || ""}
          key={query}
          required
        />
      </div>
    </Form>
  );
}
