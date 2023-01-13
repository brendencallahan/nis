import { useEffect, useState } from 'react';
import { useRef } from 'react';

// Optionally takes in an inital boolean value that decides whether to block/detect clicks outside the current element.
// Basically, detect when user clicks outside of menu to close it.

export default function useBlockClicks(initalBool = false) {
  const [shouldBlock, setShouldBlock] = useState(initalBool);
  const ref = useRef(null);
  const secondaryRef = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      console.log(ref.current, event.target, secondaryRef.current);
      setShouldBlock(false);
    }
    else if (secondaryRef.current.contains(event.target)) {
      setShouldBlock(true);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return { ref, secondaryRef, shouldBlock, setShouldBlock };
}
