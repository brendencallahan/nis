import Apod from '../components/Apod';
import SearchBar from '../components/SearchBar/SearchBar';

export default function HomePage() {
  return (
    <>
      <h1 className=".nis-font">NIS</h1>
      {/* Add NavMenu and SearchBar */}
      <SearchBar/>
      <Apod />
    </>
  );
}
