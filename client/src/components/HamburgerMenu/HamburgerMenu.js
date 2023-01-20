import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import HamburgerModal from './HamburgerModal';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const { pathname } = useLocation();

  // Close menu when url changes
  useEffect(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  }, [pathname]);

  function handleOpening() {
    if (isOpen) {
      setIsOpen(false);
      document.body.style.overflow = 'unset';
    } else {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }
  }

  //TODO: Refactor to be generic. Needs to be used in multiple places.
  //useForwardRef might be answer but didn't work first time I tried
  function handleOutsideClicks(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      document.body.style.overflow = 'unset';
      setIsOpen(false);
    }
  }

  // Close the menu when you click outside of it
  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClicks);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClicks);
    };
  }, []);

  return (
    <>
      <div ref={ref}>
        <button className="pt-[11px]" ref={ref} onClick={handleOpening}>
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
        {isOpen && (
          <div className="mt-10 ml-[5vw] md:ml-[15vw] lg:ml-[30vw] absolute left-0">
            <HamburgerModal />
          </div>
        )}
      </div>
      {/* Closing div required above background, so that it is not considered 'inside' the menu (see line 20) */}
      {isOpen && (
        <div className="absolute left-0">
          <div className="w-screen h-screen fixed z-[-1] top-0 bg-gray-light dark:bg-base-dark"></div>
        </div>
      )}
    </>
  );
}
