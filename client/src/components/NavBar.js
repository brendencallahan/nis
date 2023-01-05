import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='mb-10 flex justify-between'>
      <Link to="/" className="text-xl nis-font">NIS</Link>
      <HamburgerMenu />
    </div>
  );
}
