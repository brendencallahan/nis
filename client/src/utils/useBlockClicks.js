import { useEffect, useState, useRef } from 'react';

// Optionally takes in an inital boolean value that decides whether to block/detect clicks outside the current element.
// Basically, detect when user clicks outside of menu to close it.

export default function useBlockClicks(initalBool) {
  const [shouldBlock, setShouldBlock] = useState(initalBool);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {

    //This prevents scrolling. Will still allow clicking on up arrow and "logo"

    setShouldBlock(false);
  }
  };

  useEffect(()  =>{
    document.addEventListener('click', handleClickOutside, true);

    return ()  =>{
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, shouldBlock, setShouldBlock };
}
