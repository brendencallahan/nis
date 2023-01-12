import { Form } from 'react-router-dom';

export default function SearchBar() {
  return (
    <Form method="get" action="/search">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only">
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
          className="dark:focus-within:text-base-light focus-within:text-base-dark block w-full mb-[3.25rem] p-4 pl-10 text-md border-2 border-blue-dark rounded-md dark:bg-base-dark bg-gray-light"
          placeholder="Search..."
          required
        />
        <button
          type="submit"
          className="dark:text-gray-light text-gray-dark absolute right-2.5 bottom-2.5 px-2 pt-2 pb-[0.35rem]"
        >
          <svg
            className="fill-base-dark dark:fill-gray-light"
            viewBox="0 0 100 80"
            width="20"
            height="20"
          >
            <rect width="100" height="7.5" rx="10"></rect>
            <rect y="30" width="100" height="7.5" rx="10"></rect>
            <rect y="60" width="100" height="7.5" rx="10"></rect>
          </svg>
        </button>
      </div>
    </Form>
  );
}
