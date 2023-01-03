import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

export default function Navbar() {
  return (
    <div className='flex justify-between'>
      <h1 className="text-xl nis-font">NIS</h1>
      <HamburgerMenu />
    </div>
  );
}
