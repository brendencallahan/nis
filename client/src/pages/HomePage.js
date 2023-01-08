import Apod from '../components/Apod';
import SearchBar from '../components/SearchBar/SearchBar';

export default function HomePage() {
  return (
    <>
      <h1 className="text-transparent bg-clip-text bg-gradient-to-t from-slate-700 to-base-dark dark:from-gray-light dark:to-slate-300 nis-font text-center text-7xl mb-10">NIS</h1>
      {/* Add NavMenu */}
      <SearchBar/>
      <Apod />
    </>
  );
}
