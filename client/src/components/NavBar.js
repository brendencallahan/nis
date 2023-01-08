import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div
      className={`
      sticky top-0 z-10 mb-10 flex justify-between bg-gray-light dark:bg-base-dark py-5 px-[2.5vw] md:px-[15vw] lg:px-[30vw] shadow-md`}
    >
      <Link to="/" className="text-xl nis-font">
        NIS
      </Link>
      <HamburgerMenu />
    </div>
  );
}
