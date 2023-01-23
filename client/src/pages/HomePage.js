import Apod from "../components/Apod";
import SearchBar from "../components/SearchBar/SearchBar";

export default function HomePage() {
  return (
    <>
      <h1
        className="text-transparent
        bg-clip-text bg-gradient-to-t from-slate-700 to-base-dark
        dark:from-gray-light dark:to-slate-300 
        nis-font text-center text-7xl mb-5 ml-2.5"
      >
        NIS
      </h1>
      <h2
        className="text-transparent
        bg-clip-text bg-gradient-to-t from-slate-700 to-base-dark
        dark:from-gray-light dark:to-slate-300 
        nis-font text-center text-2xl mb-14 ml-2.5"
      >
        Nasa Image Search
      </h2>
      {/* Add NavMenu */}
      <SearchBar />
      <Apod />
    </>
  );
}
