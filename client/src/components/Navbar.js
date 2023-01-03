import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

export default function Navbar() {
  return (
    <div className='flex justify-between'>
      <h1 className="nis-font">NIS</h1>
      <HamburgerMenu />
    </div>
  );
}
