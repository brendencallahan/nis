import { Form } from 'react-router-dom';

export default function SearchBar() {
  return (
    <Form method="get" action="/search">
      <label for="default-search" className="mb-2 text-sm font-medium sr-only">
        Search
      </label>
      <div className="relative text-slate-700 focus-within:text-slate-400">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </span>
        </div>
        <input
          type="search"
          id="default-search"
          name='q'
          className="focus-within:text-slate-900 block w-full mb-[3.25rem] p-4 pl-10 text-md border border-1 border-blue-light rounded-md outline-cyan-800"
          placeholder="Search..."
          required
        />
        <button
          type="submit"
          className="absolute right-2.5 bottom-2.5 px-2 pt-2 pb-[0.35rem]"
        >
          Test
        </button>
      </div>
    </Form>
  );
}
