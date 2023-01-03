import Apod from '../components/Apod';
import SearchBar from '../components/SearchBar/SearchBar';

export default function HomePage() {
  return (
    <>
      <h1 className="nis-font text-center text-7xl mt-10 mb-8">NIS</h1>
      {/* Add NavMenu and SearchBar */}
      <SearchBar/>
      <Apod />
    </>
  );
}
