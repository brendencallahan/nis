import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import ScrollTop from './ScrollTop'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='sticky top-0 shadow-md z-10'>

    <div
      className={`
      mb-10 flex justify-between bg-gray-light dark:bg-base-dark py-5 max-w-[95vw] ml-[2.5vw] md:max-w-[70vw] md:ml-[15vw] lg:max-w-[40vw] lg:ml-[30vw]`}
      >
      <Link to="/" className="text-2xl nis-font pt-[11px]">
        NIS
      </Link>
      <ScrollTop />
      <HamburgerMenu />
    </div>
      </div>
  );
}
