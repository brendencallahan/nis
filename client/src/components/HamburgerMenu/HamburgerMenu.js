import { useState } from 'react';
import HamburgerModal from './HamburgerModal';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpening = ()  =>{
    setIsOpen((current)  =>!current)
  }

  return (
    <>
      <button onClick={handleOpening} className="z-15 relative">
        <svg
          className="fill-base-dark dark:fill-gray-light"
          viewBox="0 0 100 80"
          width="25"
          height="25"
        >
          <rect width="100" height="12.5" rx="10"></rect>
          <rect y="30" width="100" height="12.5" rx="10"></rect>
          <rect y="60" width="100" height="12.5" rx="10"></rect>
        </svg>
      </button>
      {isOpen && <HamburgerModal />}
    </>
  );
}
