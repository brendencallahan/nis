import DarkModeButton from './DarkModeButton';
import CollectionButton from './CollectionButton';
import { useRef } from 'react';

export default function HamburgerModal() {
  const ref = useRef(null);


  return (
    <div
      ref={ref}
      className="bg-gray-light dark:bg-base-dark shadow-lg flex flex-col justify-start items-center mr-0 ml-[2.5vw] md:ml-[15vw] lg:ml-[30vw] w-[95vw] md:w-[70vw] lg:w-[40vw] rounded-md border border-base-dark dark:border-gray-light gap-5 py-10 text-xl"
    >
      <CollectionButton />
      <DarkModeButton />
      <h3>About</h3>
      <h3>Hire Me</h3>
    </div>
  );
}
