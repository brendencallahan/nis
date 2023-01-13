import { useEffect, useState, useRef} from 'react';
import HamburgerModal from './HamburgerModal';


export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null)

  function handleOpening(event) {
    setIsOpen(!isOpen);
  }

  //TODO: Refactor to be generic. Needs to be used in multiple places.
  function handleOutsideClicks(event) {
    if (
      ref.current && !ref.current.contains(event.target)
    ) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClicks)

    return (() => {
      document.removeEventListener('mousedown', handleOutsideClicks)
    })
  }, [])

  return (
    <>
        <div ref={ref}>
      <button className='h-10 pt-[10px]' ref={ref} onClick={handleOpening}>
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
      <div className='mt-1 absolute left-0'>

      {isOpen &&<HamburgerModal  />}
      </div>
    </div>
    </>
  );
}
