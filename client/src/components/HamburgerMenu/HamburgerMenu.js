import { useState } from 'react';
import HamburgerModal from './HamburgerModal';
import useBlockClicks from '../../utils/useBlockClicks';

export default function HamburgerMenu() {
  const { ref, secondaryRef, shouldBlock, setShouldBlock } = useBlockClicks(false);

  const handleOpening = () => {
    setShouldBlock((current) => !current);
    if (document.body.style.overflow ==='hidden') { //This prevents scrolling. Will still allow clicking on up arrow and "logo"
      document.body.style.overflow = '';
    } else {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <button onClick={handleOpening} className="relative" ref={secondaryRef}>
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
      <div className='absolute' ref={ref}>
      {shouldBlock && <HamburgerModal />}
      </div>
    </>
  );
}
