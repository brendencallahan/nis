import DarkModeButton from './DarkModeButton';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function HamburgerModal() {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="z-10 h-auto bg-gray-light dark:bg-base-dark shadow-lg flex flex-col justify-start items-center ml-[5vw] md:ml-[15vw] lg:ml-[30vw] w-[90vw] md:w-[70vw] lg:w-[40vw] rounded-md border border-base-dark dark:border-gray-light gap-5 py-10 mt-10 text-xl"
      >
      <Link to="/favorites">Favorites</Link>
      <Link to="/about">About</Link>
      <a href="https://brendencallahan.com/#contact" target="_blank" rel="noreferrer noopener">Hire Me</a>
      <DarkModeButton />
    </div>
  );
}
