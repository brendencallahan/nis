import DarkModeButton from './DarkModeButton';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function HamburgerModal() {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="bg-gray-light dark:bg-base-dark shadow-lg border-base-dark dark:border-gray-light rounded-md border
       flex flex-col justify-start items-center
       h-auto w-[90vw] md:w-[70vw] lg:w-[40vw] gap-5 py-10 text-xl"
      >
      <Link to="/favorites">Favorites</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact Me</Link>
      <DarkModeButton />
    </div>
  );
}
