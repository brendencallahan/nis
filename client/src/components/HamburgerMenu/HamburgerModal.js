import DarkModeButton from './DarkModeButton';
import CollectionButton from './CollectionButton';
import { useRef } from 'react';

export default function HamburgerModal() {
  const ref = useRef(null);


  return (
    <div
      ref={ref}
      className="bg-gray-dark shadow-lg flex flex-col justify-center items-center w-[95vw] md:w-[70vw] lg:w-[40vw] h-[90vh]"
    >
      <CollectionButton />
      <DarkModeButton />
    </div>
  );
}
